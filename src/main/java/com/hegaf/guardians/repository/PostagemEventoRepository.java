package com.hegaf.guardians.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hegaf.guardians.model.PostagemEvento;

public interface PostagemEventoRepository extends JpaRepository<PostagemEvento, Long> {

    List<PostagemEvento> findAllByOrderByDataDesc();
}