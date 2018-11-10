
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
    endangered INT, /* Scale of 1-5*/
    gestation_months INT,
    mating_age_min INT,
    mating_age_max INT,
    notes TEXT,
    PRIMARY KEY (id)
); 

CREATE TABLE IF NOT EXISTS mates (
    id INT AUTO_INCREMENT,
    male_id INT, /* Foreign key to animals table */
    female_id INT, /* Foreign key to animals table */
    success BOOLEAN,
    breed_date DATE,
    PRIMARY KEY (id)
); 


CREATE VIEW view_animals as
SELECT a.id, a.animal_name, a.gender, a.mating_status, a.birth_date, YEAR(CURDATE()) - YEAR(a.birth_date) AS age, a.image_url
, z.zoo_name, s.species_name, IFNULL(a2.animal_name, '') as mom_name, IFNULL(a3.animal_name, '') as dad_name 
FROM zoomate.animals as a
INNER JOIN zoomate.zoos as z ON z.id = a.zoo_id
INNER JOIN zoomate.species as s ON a.species_id = s.id
LEFT JOIN zoomate.animals as a2 ON a.mom_id = a2.id
LEFT JOIN zoomate.animals as a3 ON a.dad_id = a3.id;

