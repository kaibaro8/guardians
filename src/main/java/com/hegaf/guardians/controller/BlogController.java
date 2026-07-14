package com.hegaf.guardians.controller;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.hegaf.guardians.dto.BlogDTO;
import com.hegaf.guardians.model.Blog;
import com.hegaf.guardians.model.Usuario;
import com.hegaf.guardians.repository.UsuarioRepository;
import com.hegaf.guardians.service.BlogService;

@Controller
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/blog")
    public String blog(Model model) {
        model.addAttribute("posts", blogService.listarTodos());
        return "blog";
    }

    @GetMapping("/operador/painel-blog")
    public String telaPublicacao(
            @RequestParam(defaultValue = "0")  int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "")   String busca,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataInicio,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate dataFim,
            Model model) {

        Pageable pageable = PageRequest.of(page, size, Sort.by("dataPublicacao").descending());
        Page<Blog> pageResult = blogService.listarPaginado(busca, dataInicio, dataFim, pageable);

        model.addAttribute("blogDTO", new BlogDTO());
        model.addAttribute("posts",        pageResult.getContent());
        model.addAttribute("totalPages",   pageResult.getTotalPages());
        model.addAttribute("currentPage",  page);
        model.addAttribute("size",         size);
        model.addAttribute("busca",        busca);
        model.addAttribute("dataInicio",   dataInicio);
        model.addAttribute("dataFim",      dataFim);
        model.addAttribute("totalPosts",   pageResult.getTotalElements());
        model.addAttribute("sizeOptions",  List.of(10, 20, 30));
        return "operador/painel-blog";
    }

    @PostMapping("/operador/painel-blog/publicar")
    public String publicar(
            @ModelAttribute BlogDTO blogDTO,
            Authentication authentication)
            throws IOException {

        Usuario autor = usuarioRepository.findByEmail(authentication.getName());
        blogService.publicar(blogDTO, autor);
        return "redirect:/blog";
    }

    @PostMapping("/operador/painel-blog/deletar/{id}")
    public String deletar(@PathVariable Long id) {
        blogService.deletar(id);
        return "redirect:/operador/painel-blog";
    }
 }