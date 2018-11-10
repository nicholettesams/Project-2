INSERT INTO zoos 
(zoo_name, address, city, state, zip_code, phone, contact_name) 
values('Cleveland Metroparks Zoo', '3900 Wildlife Way', 'Cleveland', 'OH', 44109, '216-661-6500', 'Jane Doe');

INSERT INTO species 
(species_name, endangered, gestation_months, mating_age_min, mating_age_max, notes)
Values('African Elephant', 2, 22, 10, 15, 'Diffult to mate in captivity');

INSERT INTO animals 
(animal_name, zoo_id, species_id, mom_id, dad_id, gender, mating_status, birth_date, image_URL)
values
	('Mrs. Jumbo', 1, 1, 0, 0, 'F', 'None', '2008-01-01', ''),
	('Dumbo Sr.', 1, 1, 0, 0, 'M', 'None', '2007-02-06', ''),
	('Dumbo', 1, 1, 1, 2, 'M', 'None', '2018-05-02', '');
    
INSERT INTO mates
(male_id, female_id, success, breed_date)
values (2, 1, True, '2017-03-01')