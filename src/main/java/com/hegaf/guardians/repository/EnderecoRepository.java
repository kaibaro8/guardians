package com.hegaf.guardians.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.hegaf.guardians.model.Endereco;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {
}