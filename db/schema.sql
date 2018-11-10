
DROP DATABASE IF EXISTS zoomate;

CREATE DATABASE zoomate;

USE zoomate;

CREATE TABLE IF NOT EXISTS zoos (
    id INT AUTO_INCREMENT,
    zoo_name VARCHAR(100) NOT NULL,
    address VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(2) ,
    zip_code TINYINT NOT NULL,
    phone varchar(20),
    contact_name varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS animals (
    id INT AUTO_INCREMENT,
    animal_name VARCHAR(100) NOT NULL,
    zoo_id INT, /* Foreign key to zoos table */
    species_id INT, /* Foreign key to species table */
    mom_id INT, /* Foreign key to animals table */
    dad_id INT, /* Foreign key to animals table */
    gender VARCHAR(1),
    mating_status VARCHAR(50),
    birth_date DATE,
    image_URL VARCHAR(500) ,
    PRIMARY KEY (id)
); 

CREATE TABLE IF NOT EXISTS species (
    id INT AUTO_INCREMENT,
    species_name VARCHAR(100) NOT NULL,
    endanged INT, /* Scale of 1-5*/
    gestation_months INT,
    gestation_age_min INT,
    gestation_age_max INT,
    notes TEXT,
    PRIMARY KEY (id)
); 

CREATE TABLE IF NOT EXISTS mates (
    id INT AUTO_INCREMENT,
    male_id INT, /* Foreign key to animals table */
    female_id INT, /* Foreign key to animals table */
    Success BOOLEAN,
    breed_date DATE,
    PRIMARY KEY (id)
); 