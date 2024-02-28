CREATE DATABASE;

CREATE TABLE vehiculos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(45),
    tipo_vehiculo VARCHAR(45),
    placa VARCHAR(45) UNIQUE,
    colores_id INT,
    tipo_vehiculo_id INT,
    tipo_vehiculo_marcas_id INT
);

CREATE TABLE colores(
    id INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(45)
);

CREATE TABLE marcas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45)
);

CREATE TABLE tipo_vehiculo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_vehiculo VARCHAR(45),
    marcas_id INT
);

INSERT INTO colores (color) VALUES 
("Rojo"), ("Azul");
   