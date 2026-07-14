package com.hegaf.guardians.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;

@Service
public class CloudnaryService {

    @Value("${cloudinary.cloud-name}")
    private String cloudName;

    @Value("${cloudinary.api-key}")
    private String apiKey;

    @Value("${cloudinary.api-secret}")
    private String apiSecret;

    private Cloudinary getCloudinary() {
        return new Cloudinary(Map.of(
                "cloud_name", cloudName,
                "api_key", apiKey,
                "api_secret", apiSecret));
    }

    public String uploadImagem(MultipartFile file) throws IOException {
        return uploadArquivo(file, "image");
    }

    public String uploadArquivo(MultipartFile file, String resourceType) throws IOException {

        Map<?, ?> resultado = getCloudinary().uploader().upload(
                file.getBytes(),
                Map.of("resource_type", resourceType));

        return resultado.get("secure_url").toString();
    }
}