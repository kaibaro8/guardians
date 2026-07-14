package com.hegaf.guardians.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;

/**
 * Postagem de evento exibida na página pública "Eventos" (e refletida na
 * Galeria, usando as mesmas fotos). Não confundir com {@link Evento}, que é
 * usado apenas para a Agenda e para confirmação de presença (RSVP).
 */
@Entity
@Table(name = "postagem_evento")
public class PostagemEvento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String titulo;

    // Núcleo/região do evento, usado no filtro das páginas Eventos e Galeria
    @Column(nullable = false, length = 100)
    private String nucleo;

    // Endereço/local do evento
    @Column(length = 255)
    private String local;

    @Column(nullable = false)
    private LocalDate data;

    // Texto curto exibido no card/prévia
    @Column(columnDefinition = "TEXT")
    private String resumo;

    // Texto completo exibido na página do evento
    @Column(columnDefinition = "TEXT")
    private String descricao;

    // URL (Cloudinary) da foto de capa — é a primeira foto enviada
    @Column(nullable = false)
    private String imagemCapa;

    @Column(nullable = false)
    private LocalDateTime dataPublicacao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario autor;

    @OneToMany(mappedBy = "postagem", cascade = CascadeType.ALL,
               orphanRemoval = true, fetch = FetchType.LAZY)
    @OrderColumn(name = "ordem")
    private List<PostagemEventoFoto> fotos = new ArrayList<>();

    public PostagemEvento() {}

    public Long getId()                              { return id; }
    public void setId(Long id)                       { this.id = id; }
    public String getTitulo()                        { return titulo; }
    public void setTitulo(String titulo)             { this.titulo = titulo; }
    public String getNucleo()                        { return nucleo; }
    public void setNucleo(String nucleo)             { this.nucleo = nucleo; }
    public String getLocal()                         { return local; }
    public void setLocal(String local)               { this.local = local; }
    public LocalDate getData()                       { return data; }
    public void setData(LocalDate data)              { this.data = data; }
    public String getResumo()                        { return resumo; }
    public void setResumo(String resumo)             { this.resumo = resumo; }
    public String getDescricao()                     { return descricao; }
    public void setDescricao(String descricao)       { this.descricao = descricao; }
    public String getImagemCapa()                    { return imagemCapa; }
    public void setImagemCapa(String imagemCapa)     { this.imagemCapa = imagemCapa; }
    public LocalDateTime getDataPublicacao()         { return dataPublicacao; }
    public void setDataPublicacao(LocalDateTime d)   { this.dataPublicacao = d; }
    public Usuario getAutor()                        { return autor; }
    public void setAutor(Usuario autor)              { this.autor = autor; }
    public List<PostagemEventoFoto> getFotos()       { return fotos; }
    public void setFotos(List<PostagemEventoFoto> f) { this.fotos = f; }

    public void adicionarFoto(PostagemEventoFoto foto) {
        foto.setPostagem(this);
        this.fotos.add(foto);
    }
}