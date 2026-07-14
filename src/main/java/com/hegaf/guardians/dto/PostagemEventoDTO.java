package com.hegaf.guardians.dto;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class PostagemEventoDTO {

    private String titulo;
    private String nucleo;
    private String local;
    private LocalDate data;
    private String resumo;
    private String descricao;
    private List<MultipartFile> fotos;

    public PostagemEventoDTO() {}

    public String getTitulo()                      { return titulo; }
    public void setTitulo(String titulo)            { this.titulo = titulo; }
    public String getNucleo()                       { return nucleo; }
    public void setNucleo(String nucleo)            { this.nucleo = nucleo; }
    public String getLocal()                        { return local; }
    public void setLocal(String local)              { this.local = local; }
    public LocalDate getData()                      { return data; }
    public void setData(LocalDate data)             { this.data = data; }
    public String getResumo()                       { return resumo; }
    public void setResumo(String resumo)            { this.resumo = resumo; }
    public String getDescricao()                    { return descricao; }
    public void setDescricao(String descricao)      { this.descricao = descricao; }
    public List<MultipartFile> getFotos()           { return fotos; }
    public void setFotos(List<MultipartFile> fotos) { this.fotos = fotos; }
}