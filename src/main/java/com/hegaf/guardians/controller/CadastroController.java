package com.hegaf.guardians.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.hegaf.guardians.dto.UsuarioCadastroDTO;
import com.hegaf.guardians.repository.UsuarioRepository;
import com.hegaf.guardians.service.UsuarioService;

import jakarta.validation.Valid;


//Cadastro público  → GET /cadastro  + POST /salvar → redireciona para /login (VIA th:object="${usuario}")
 //Cadastro admin    → POST /salvar   (vindo de admin/usuarios.html com cadastroDTO) (via th:object="${cadastroDTO}")
 

@Controller
public class CadastroController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private UsuarioRepository usuarioRepository;


    @GetMapping("/cadastro")
    public String exibirCadastro(Model model) {
        model.addAttribute("usuario", new UsuarioCadastroDTO());
        return "cadastro";
    }


    @GetMapping(value = "/cadastro/validar-cpf", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public String validarCpf(@RequestParam(value = "cpf", required = false) String cpf) {
        if (cpf == null || cpf.isBlank()) {
            return "";
        }

        UsuarioCadastroDTO temp = new UsuarioCadastroDTO();
        temp.setCpf(cpf);

        if (!temp.isCpfValido()) {
            return "<span class=\"campo-erro\">CPF inválido.</span>";
        }
        if (usuarioRepository.existsByCpf(cpf)) {
            return "<span class=\"campo-erro\">Este CPF já está cadastrado.</span>";
        }
        return "<span style=\"color:#16a34a;font-size:1.3rem;\">CPF válido.</span>";
    }

    // salvar 

    @PostMapping("/salvar")
    public String salvar(
            @Valid @ModelAttribute("usuario") UsuarioCadastroDTO usuarioCadastroDTO,
            BindingResult result,
            Authentication auth,
            RedirectAttributes ra,
            Model model) {

        boolean isAdmin = auth != null &&
            auth.getAuthorities().contains(new SimpleGrantedAuthority("ROLE_ADMIN"));

        // Erros de validação
        if (result.hasErrors()) {
            if (isAdmin) {
                model.addAttribute("cadastroDTO", usuarioCadastroDTO);
                return "admin/usuarios";
            }
            model.addAttribute("usuario", usuarioCadastroDTO);
            return "cadastro";
        }

        // Não-admin sempre cadastra como ROLE_USER
        if (!isAdmin) {
            usuarioCadastroDTO.setTipo("ROLE_USER");
        }

        try {
            usuarioService.cadastrar(usuarioCadastroDTO, null);
        } catch (IllegalArgumentException ex) {
            model.addAttribute("erroSenha", ex.getMessage());
            if (isAdmin) {
                model.addAttribute("cadastroDTO", usuarioCadastroDTO);
                return "admin/usuarios";
            }
            model.addAttribute("usuario", usuarioCadastroDTO);
            return "cadastro";
        }

        if (isAdmin) {
            ra.addFlashAttribute("mensagem", "Usuário cadastrado com sucesso!");
            return "redirect:/admin/listar-usuarios";
        }

        ra.addFlashAttribute("mensagem", "Cadastro realizado! Faça seu login.");
        return "redirect:/login";
    }
}