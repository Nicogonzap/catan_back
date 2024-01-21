create table roles (
	id int NOT NULL PRIMARY key AUTO_INCREMENT,
	roledesc varchar (255)
);

insert into roles (roledesc)
values
('regular'),
('admin');

CREATE TABLE tournaments (
    id int NOT NULL PRIMARY key AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);
insert into tournaments (name)
values
('2024');

create table events (
	id int NOT NULL PRIMARY key AUTO_INCREMENT,
	eventdate date not null,
	location varchar (255),
	tournamentId int,
	foreign key (tournamentId) references tournaments (id)
);

insert into events (eventdate, location, tournamentId)
values
	("2024-01-03","Ivo",1),
	("2024-01-06","Gaspa",1),
	("2024-01-13","Gaspa",1),
	("2024-01-16","Ivo",1);

create table players (
	id int NOT NULL PRIMARY key AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	mail varchar (255),
	pass varchar (255),
	active int, /* 1 o 0 si el player está activo*/
	regularplayer int, /* 1 o 0 si el player es regular (Para luego definir cuáles mostrar primero*/
	playertype int,
	foreign key (playertype) references roles (id)
);

insert into players (name, pass, active, regularplayer, playertype)
values
	/*1*/ ('Gallo','Gallo',1,1,2),
	/*2*/ ('Ivo','Ivo',1,1,1),
	/*3*/ ('Gaspa','Gaspa',1,1,1),
	/*4*/ ('Hugo','Hugo',1,1,1),
	/*5*/ ('Max','Max',1,1,1),
	/*6*/ ('Sofi','Sofi',1,0,1),
	/*7*/ ('Gasta','Gasta',1,0,1),
	/*8*/ ('Rodri','Rodri',1,0,1);

	
create table games (
	id int NOT NULL PRIMARY key AUTO_INCREMENT,
	eventId int,
	player1 int,
	player2 int,
	player3 int,
	player4 int,
	player5 int,
	player6 int,
	foreign key (player1) references players (id),
	foreign key (player2) references players (id),
	foreign key (player3) references players (id),
	foreign key (player4) references players (id),
	foreign key (player5) references players (id),
	foreign key (player6) references players (id)
);

insert into games (eventId, player1, player2, player3, player4, player5, player6)
values
	/*Partida 1*/ (1,1,2,5,6,3,null),
	/*Partida 2*/ (1,1,2,5,6,3,null),
	/*Partida 3*/ (1,1,2,5,6,null,null);
	/*Solo se carga el primer Evento - El resto se debe cargar con la web corriendo*/