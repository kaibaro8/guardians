package com.hegaf.guardians.service;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.hegaf.guardians.dto.BlogDTO;
import com.hegaf.guardians.model.Blog;
import com.hegaf.guardians.model.Usuario;
import com.hegaf.guardians.repository.BlogRepository;

@Service
public class BlogService {

    @Autowired
    private BlogRepository repository;

    @Autowired
    private CloudnaryService cloudnaryService;


    
    public void publicar(BlogDTO dto) throws IOException {

        String nomeOriginal = dto.getArquivo().getOriginalFilename();
        if (nomeOriginal == null || nomeOriginal.isBlank()) {
            throw new RuntimeException("Arquivo inválido.");
        }

        String extensao = nomeOriginal
                .substring(nomeOriginal.lastIndexOf(".") + 1)
                .toLowerCase();

        String tipoArquivo;
        String resourceType;

        if (isImagem(extensao)) {
            tipoArquivo = "imagem";
            resourceType = "image";
        } else if (isVideo(extensao)) {
            tipoArquivo = "video";
            resourceType = "video";
        } else {
            throw new RuntimeException("Formato não suportado.");
        }

        String urlArquivo = cloudnaryService.uploadArquivo(dto.getArquivo(), resourceType);

        Blog postagem = new Blog();
        postagem.setTitulo(dto.getTitulo());
        postagem.setDescricao(dto.getDescricao());
        postagem.setTextoCompleto(dto.getTextoCompleto());
        postagem.setTipoArquivo(tipoArquivo);
        postagem.setDataPublicacao(LocalDateTime.now());
        postagem.setArquivo(urlArquivo);
        repository.save(postagem);
    }


    
    public void publicar(BlogDTO dto, Usuario autor) throws IOException {

        String nomeOriginal = dto.getArquivo().getOriginalFilename();
        if (nomeOriginal == null || nomeOriginal.isBlank()) {
            throw new RuntimeException("Arquivo inválido.");
        }

        String extensao = nomeOriginal
                .substring(nomeOriginal.lastIndexOf(".") + 1)
                .toLowerCase();

        String tipoArquivo;
        String resourceType;

        if (isImagem(extensao)) {
            tipoArquivo = "imagem";
            resourceType = "image";
        } else if (isVideo(extensao)) {
            tipoArquivo = "video";
            resourceType = "video";
        } else {
            throw new RuntimeException("Formato não suportado.");
        }

        String urlArquivo = cloudnaryService.uploadArquivo(dto.getArquivo(), resourceType);

        Blog postagem = new Blog();
        postagem.setTitulo(dto.getTitulo());
        postagem.setDescricao(dto.getDescricao());
        postagem.setTextoCompleto(dto.getTextoCompleto());
        postagem.setTipoArquivo(tipoArquivo);
        postagem.setDataPublicacao(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
        postagem.setArquivo(urlArquivo);
        postagem.setAutor(autor);
        repository.save(postagem);
    }


    // Listar todos 
    public List<Blog> listarTodos() {
        return repository.findAllByOrderByDataPublicacaoDesc();
    }



    public Page<Blog> listarPaginado(String busca, LocalDate dataInicio, LocalDate dataFim, Pageable pageable) {

        String titulo = (busca == null) ? "" : busca.trim();

        
        LocalDateTime inicio = (dataInicio != null) ? dataInicio.atStartOfDay() : null;
        LocalDateTime fim    = (dataFim != null)    ? dataFim.atTime(LocalTime.MAX) : null;

        Specification<Blog> spec = Specification.where(null);

        if (!titulo.isEmpty()) {
            String tituloLower = titulo.toLowerCase();
            spec = spec.and((root, query, cb) ->
                    cb.like(cb.lower(root.get("titulo")), "%" + tituloLower + "%"));
        }
        if (inicio != null) {
            spec = spec.and((root, query, cb) ->
                    cb.greaterThanOrEqualTo(root.get("dataPublicacao"), inicio));
        }
        if (fim != null) {
            spec = spec.and((root, query, cb) ->
                    cb.lessThanOrEqualTo(root.get("dataPublicacao"), fim));
        }

        return repository.findAll(spec, pageable);
    }


  
    public void deletar(Long id) {
        repository.deleteById(id);
    }


    // ── Helpers ────────────────────────────────────────────
    private boolean isImagem(String extensao) {
        return extensao.equals("jpg")
                || extensao.equals("jpeg")
                || extensao.equals("png")
                || extensao.equals("gif")
                || extensao.equals("webp");
    }

    private boolean isVideo(String extensao) {
        return extensao.equals("mp4")
                || extensao.equals("webm")
                || extensao.equals("mov")
                || extensao.equals("avi")
                || extensao.equals("mkv");
    }
}