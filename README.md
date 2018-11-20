# Cerulean-Project-2

## Contributors
- Nicholas Miesmer
- Mark Piscioneri
- Nicholette Sams
- Dana Shelton

## Intro
Zoo Mates is a website designed to help neighboring zoos find possible mates for their animals.  Zoos must work together to ensure offspring from diffrent family lines are produced.  Breeding animals in captivity is a vital part of saving species from extinction.

## Design Process
Our team worked together on the overall design and then split into two teams, a front-end team (Dana and Mark) and a back-end team (Nicholas and Nicholette). The front-end team was dedicated to the HTML, CSS, Handlebars and content of the pages, utilizing the Bootstrap framework for most of the styling. The back-end team worked on javascript, routes and mysql queries. After each person finished their task, we reviewed and made tweaks as a group to ensure cohesion.

## Technologies
- HTML 
- CSS 
- Javascript 
- JQuery 
- Bootstrap Framework 
- Hanldebars
- Express
- MySQL

## Finding a Mate
From the home page, a user will select the zoo that they work at.  This will display a page containing all the animals in the zoo.  From here, a user can click the "Find Mate" button and a new page will then appear with the best matches for the selected animal.  Criteria for a good mate is based on same species, opposite gender, different zoo, and "matable".  Matable is a true/false value used to determine if the animal is able to breed with another animal.  Once an animal is selected to mate with, the "matable" value will be set to false which prevents them from being selected as a potential mate for another animal.  

## Adding a new Animal
A user can also choose to "Add an Animal" from the zoo detail page.  This will display a form where a user can enter all the information for an animal and it will then be saved to the database.

## Future development
- A detail page that would display all fields for an animal along with zoo contact information and lineage and mating history.
- Login screen to only allow employees of the zoo to gain access
- Filter for narrowing search results of animals
- Ability to update/add/delete breeding history
- Abiltiy to update/add/delete zoo information
- Ability to update/add/delete species information
- Ability to update/delete animals 
- Map showing address of zoo 

version 2