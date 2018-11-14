INSERT INTO zoos 
(zoo_name, address, city, state, zip_code, phone, contact_name) 
values('Cleveland Metroparks Zoo', '3900 Wildlife Way', 'Cleveland', 'OH', 44109, '216-661-6500', 'Elsa Lancaster', 'animalhusbandry@clevelandmetroparks.com'),
		('Columbus Zoo', '4850 W Powell Road', 'Columbus', 'OH', 43065, '614-645-3400', 'Jack Hannah', 'jhannah@columbuszoo.com'),
		('Lincoln Park Zoo', '2001 N Clark St', 'Chicago', 'IL', 60614, '312-742-2000', 'Harry Carey', 'hcareylincolnparkzoo.com'),
		('San Diego Zoo', '2920 Zoo Dr.', 'San Diego', 'CA', 92101, '619-231-1515', 'Elizabeth Waterstone', 'ewaterstone@san-diego-zoo.com'),
		('The Smithzonian-National Zoo', '3001 Connecticut Ave NW.', 'Washington', 'DC', 20008, '202-633-4888', 'Joseph Fabietz', 'jfabietz@nationalzoo.com');

INSERT INTO species 
(species_name, scientific_name, endangered, gestation_months, mating_age_min, mating_age_max, notes)
Values('Bear, Polar', 'Ursus maritimus', False, 7, 5, 15, 'Normal litter size is 2'),
	('Cheetah', 'Acinonyx jubatus', False, 3, 2, 7, 'Normal litter size is 4'),
	('Chimpanze', 'Pan troglodytes', True, 8, 15, 30, 'Normal litter size is 1'),
	('Elephant, African', 'Loxodonta africana' False, 22, 10, 15, 'Difficult to mate in captivity'),
	('Giraffe, Masai', 'Giraffa camelopardalis tipelskirchi' False, 18, 4, 10, ''),
	('Gorilla, Western lowland', 'Gorilla gorilla gorilla' False, 8, 10, 35, ''),
	('Lemur, Ring-Tailed', 'Lemur catta' False, 5, 2, 6, ''),
	('Lion, African', 'Panthera leo' False, 3, 4, 9, ''),
	('Rhinoceros, Black', 'Diceros bicornis' False, 15, 7, 15, ''),
	('Tiger, Siberian', 'Panthera tigris' False, 3, 4, 9, '');

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