package com.hegaf.guardians.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.hegaf.guardians.dto.PostagemEventoDTO;
import com.hegaf.guardians.model.PostagemEvento;
import com.hegaf.guardians.model.PostagemEventoFoto;
import com.hegaf.guardians.model.Usuario;
import com.hegaf.guardians.repository.PostagemEventoRepository;

@Service
public class PostagemEventoService {

    @Autowired
    private PostagemEventoRepository repository;

    @Autowired
    private CloudnaryService cloudnaryService;

    public void publicar(PostagemEventoDTO dto, Usuario autor) throws IOException {

        List<MultipartFile> fotos = dto.getFotos();
        if (fotos == null || fotos.isEmpty() || fotos.stream().allMatch(MultipartFile::isEmpty)) {
            throw new RuntimeException("Envie ao menos uma foto do evento.");
        }

        PostagemEvento postagem = new PostagemEvento();
        postagem.setTitulo(dto.getTitulo());
        postagem.setNucleo(dto.getNucleo());
        postagem.setLocal(dto.getLocal());
        postagem.setData(dto.getData());
        postagem.setResumo(dto.getResumo());
        postagem.setDescricao(dto.getDescricao());
        postagem.setDataPublicacao(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
        postagem.setAutor(autor);

        boolean primeira = true;
        for (MultipartFile foto : fotos) {
            if (foto == null || foto.isEmpty()) continue;

            String url = cloudnaryService.uploadImagem(foto);
            postagem.adicionarFoto(new PostagemEventoFoto(url));

            if (primeira) {
                postagem.setImagemCapa(url);
                primeira = false;
            }
        }

        repository.save(postagem);
    }

    public List<PostagemEvento> listarTodos() {
        return repository.findAllByOrderByDataDesc();
    }

    public PostagemEvento buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}