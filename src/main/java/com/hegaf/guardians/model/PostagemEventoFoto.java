package com.hegaf.guardians.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "postagem_evento_foto")
public class PostagemEventoFoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @jakarta.persistence.Column(nullable = false, columnDefinition = "TEXT")
    private String url;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "postagem_evento_id", nullable = false)
    private PostagemEvento postagem;

    public PostagemEventoFoto() {}

    public PostagemEventoFoto(String url) {
        this.url = url;
    }

    public Long getId()                          { return id; }
    public void setId(Long id)                   { this.id = id; }
    public String getUrl()                       { return url; }
    public void setUrl(String url)               { this.url = url; }
    public PostagemEvento getPostagem()          { return postagem; }
    public void setPostagem(PostagemEvento p)    { this.postagem = p; }
}