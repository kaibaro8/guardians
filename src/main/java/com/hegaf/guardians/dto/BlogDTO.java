package com.hegaf.guardians.dto;
import org.springframework.web.multipart.MultipartFile;

public class BlogDTO {

    private String titulo;
    private String descricao;
    private String textoCompleto;
    private MultipartFile arquivo;

    public BlogDTO() {}

    public String getTitulo()                    { return titulo; }
    public void setTitulo(String titulo)         { this.titulo = titulo; }
    public String getDescricao()                 { return descricao; }
    public void setDescricao(String descricao)   { this.descricao = descricao; }
    public String getTextoCompleto()             { return textoCompleto; }
    public void setTextoCompleto(String t)       { this.textoCompleto = t; }
    public MultipartFile getArquivo()            { return arquivo; }
    public void setArquivo(MultipartFile a)      { this.arquivo = a; }
}