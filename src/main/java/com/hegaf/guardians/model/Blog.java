package com.hegaf.guardians.model;
import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "blog")
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 200)
    private String titulo;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String descricao;

    @Column(columnDefinition = "TEXT")
    private String textoCompleto;

    @Column(nullable = false)
    private String arquivo;

    @Column(nullable = false)
    private String tipoArquivo;

    @Column(nullable = false)
    private LocalDateTime dataPublicacao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario autor;

    public Blog() {}

    public Long getId()                            { return id; }
    public void setId(Long id)                     { this.id = id; }
    public String getTitulo()                      { return titulo; }
    public void setTitulo(String titulo)           { this.titulo = titulo; }
    public String getDescricao()                   { return descricao; }
    public void setDescricao(String descricao)     { this.descricao = descricao; }
    public String getTextoCompleto()               { return textoCompleto; }
    public void setTextoCompleto(String t)         { this.textoCompleto = t; }
    public String getArquivo()                     { return arquivo; }
    public void setArquivo(String arquivo)         { this.arquivo = arquivo; }
    public String getTipoArquivo()                 { return tipoArquivo; }
    public void setTipoArquivo(String t)           { this.tipoArquivo = t; }
    public LocalDateTime getDataPublicacao()       { return dataPublicacao; }
    public void setDataPublicacao(LocalDateTime d) { this.dataPublicacao = d; }
    public Usuario getAutor()                      { return autor; }
    public void setAutor(Usuario autor)            { this.autor = autor; }
}