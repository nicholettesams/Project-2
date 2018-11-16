USE zoomate;

INSERT INTO zoos 
(zoo_name, address, city, state, zip_code, phone, contact_name) 
values('Cleveland Metroparks Zoo', '3900 Wildlife Way', 'Cleveland', 'OH', 44109, '216-661-6500', 'Jane Doe'),
('Brooklyn Zoo', '230 Bogart St', 'Brooklyn', 'NY', 11206, '347-987-3228', 'Jim Adams');

use zoomate;

select * from species;
INSERT INTO species 
(species_name, endangered, gestation_months, mating_age_min, mating_age_max, notes)
Values('African Elephant', 2, 22, 10, 15, 'Diffult to mate in captivity');

INSERT INTO animals 
(animal_name, zoo_id, species_id, mom_id, dad_id, gender, matable, birth_date, image_URL)
values
	('Mrs. Jumbo', 1, 1, 0, 0, 'F', TRUE, '2008-01-01', ''),
	('Dumbo Sr.', 1, 1, 0, 0, 'M', TRUE, '2007-02-06', ''),
	('Dumbo', 1, 1, 1, 2, 'M', FALSE, '2018-05-02', ''),
    ('Larry', 2, 1, 0, 0, 'M', TRUE, '2007-05-23', '');
    
INSERT INTO mates
(male_id, female_id, success, breed_date)
values (2, 1, True, '2017-03-01');

