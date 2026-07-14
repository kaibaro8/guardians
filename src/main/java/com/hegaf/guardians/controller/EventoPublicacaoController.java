package com.hegaf.guardians.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.hegaf.guardians.dto.PostagemEventoDTO;
import com.hegaf.guardians.model.PostagemEvento;
import com.hegaf.guardians.model.Usuario;
import com.hegaf.guardians.repository.UsuarioRepository;
import com.hegaf.guardians.service.PostagemEventoService;

@Controller
public class EventoPublicacaoController {

    @Autowired
    private PostagemEventoService postagemEventoService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Lista de núcleos usada tanto no filtro público quanto no formulário do operador
    public static final List<String> NUCLEOS = List.of(
            "Uberlândia",
            "Triângulo Mineiro",
            "Ceará",
            "Pernambuco",
            "Sergipe",
            "Mato Grosso",
            "Rio Grande do Sul"
    );

    // ── PAINEL DO OPERADOR ──────────────────────────────

    @GetMapping("/operador/painel-evento")
    @PreAuthorize("hasAnyAuthority('ROLE_OPERADOR', 'ROLE_ADMIN')")
    public String telaPublicacao(Model model) {
        model.addAttribute("postagemDTO", new PostagemEventoDTO());
        model.addAttribute("postagens", postagemEventoService.listarTodos());
        model.addAttribute("nucleos", NUCLEOS);
        return "operador/painel-evento";
    }

    @PostMapping("/operador/painel-evento/publicar")
    @PreAuthorize("hasAnyAuthority('ROLE_OPERADOR', 'ROLE_ADMIN')")
    public String publicar(@ModelAttribute PostagemEventoDTO postagemDTO,
                            Authentication authentication,
                            RedirectAttributes redirectAttributes) throws IOException {

        try {
            Usuario autor = usuarioRepository.findByEmail(authentication.getName());
            postagemEventoService.publicar(postagemDTO, autor);
            redirectAttributes.addFlashAttribute("sucesso", "Evento publicado com sucesso!");
        } catch (RuntimeException e) {
            redirectAttributes.addFlashAttribute("erro", e.getMessage());
        }
        return "redirect:/operador/painel-evento";
    }

    @PostMapping("/operador/painel-evento/deletar/{id}")
    @PreAuthorize("hasAnyAuthority('ROLE_OPERADOR', 'ROLE_ADMIN')")
    public String deletar(@PathVariable Long id) {
        postagemEventoService.deletar(id);
        return "redirect:/operador/painel-evento";
    }

    // ── API PÚBLICA (consumida pelas páginas Eventos e Galeria) ──────────

    @GetMapping("/api/eventos-publicados")
    @ResponseBody
    public List<Map<String, Object>> listarPublicados() {
        return postagemEventoService.listarTodos().stream()
                .map(this::paraJson)
                .collect(Collectors.toList());
    }

    private Map<String, Object> paraJson(PostagemEvento p) {
        return Map.of(
                "id", p.getId(),
                "titulo", p.getTitulo(),
                "nucleo", p.getNucleo(),
                "local", p.getLocal() == null ? "" : p.getLocal(),
                "data", p.getData().toString(),
                "resumo", p.getResumo() == null ? "" : p.getResumo(),
                "descricao", p.getDescricao() == null ? "" : p.getDescricao(),
                "imagem", p.getImagemCapa(),
                "galeria", p.getFotos().stream().map(f -> f.getUrl()).collect(Collectors.toList())
        );
    }
}