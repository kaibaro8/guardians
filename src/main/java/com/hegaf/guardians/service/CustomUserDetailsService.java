package com.hegaf.guardians.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hegaf.guardians.model.Usuario;
import com.hegaf.guardians.repository.UsuarioRepository;

@Primary   // <- garante que o Spring usa este
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private static final Logger log = LoggerFactory.getLogger(CustomUserDetailsService.class);

    @Autowired
    private UsuarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        log.debug("Tentativa de login para o e-mail: '{}'", username);

        Usuario usuario = repository.findByEmail(username);

        if (usuario == null) {
            log.warn("Falha no login: e-mail não encontrado no banco: '{}'", username);
            throw new UsernameNotFoundException("Usuário não encontrado: " + username);
        }

        log.debug("Usuário encontrado. Tipo: '{}'", usuario.getTipo());

        return User.builder()
                .username(usuario.getEmail())
                .password(usuario.getSenha())
                .authorities(List.of(new SimpleGrantedAuthority(usuario.getTipo())))
                .build();
    }
}