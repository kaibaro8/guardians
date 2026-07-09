package com.hegaf.guardians.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaginasController {

	// Inspirações Femininas
    @GetMapping("/inspiracoes-fem")
    public String inspiracoesFem() {
        return "inspiracoes-fem";
    }

    // Proposta do Projeto
    @GetMapping("/propostaDoProjeto")
    public String propostaDoProjeto() {
        return "propostaDoProjeto";
    }

    //Eventos
    @GetMapping("/eventos")
    public String eventos() {
        return "eventos";
    }

    //Galeria
    @GetMapping("/galeria")
    public String galeria() {
        return "galeria";
    }

    // Agenda
    @GetMapping("/agenda")
    public String agenda() {
        return "agenda";
    }

    //Núcleos pelo Brasil
    @GetMapping("/nucleosPeloBrasil")
    public String nucleosPeloBrasil() {
        return "nucleosPeloBrasil";
    }

    // Dúvidas 
    @GetMapping("/duvidas")
    public String duvidas() {
        return "duvidas";
    }

    //Denúncia
    @GetMapping("/denuncia")
    public String denuncia() {
        return "denuncia";
    }

}

