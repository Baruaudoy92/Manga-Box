CREATE DATABASE mangaDB;

CREATE TABLE mangas (
    manga_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    publication_date DATE,
    genre VARCHAR(50),
    description TEXT,
    stock_quantity INT
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    titre VARCHAR(255),
    author VARCHAR(255),
    publication_date VARCHAR(55),
    genre VARCHAR(50),
    description VARCHAR(800),
    stock_quantity VARCHAR(100)
);

CREATE TABLE client (
    client_id serial PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(15),
    address TEXT,
    birth_date DATE,
);

// client //
INSERT INTO client (client_id,first_name, last_name, email, phone_number, address, birth_date, registration_date)
VALUES ('1','John', 'Doe', 'johndoe@example.com', '555-123-4567', '123 Main St, City, Country', '1990-01-15' );
VALUES ('2','Jane', 'Smith', 'janesmith@example.com', '555-789-1234', '456 Oak St, Town, Country', '1995-03-20');
VALUES ('3','Ronel', 'Zander', 'rolze@example.com', '555-987-6543', '156 Pok st, Town, Country', '"1998-05-09"');
VALUES ('4','Simona', 'chav', 'chavsimona@example.com', '655-989-9831', '156 Rainbow, Town, Slovakia', '2003-09-17');
VALUES ('5','Tyron', 'Barua', 'tyronbar@example.com', '652-529-8492', '2 BIS, rue Maurice, France', '2004-01-09');
VALUES ('6','Dani', 'Hery', 'daniol@example.com', '202-599-5412', '57 St, Denver, US', '2001-01-10');
VALUES ('7','Akasa', 'Sihure', 'akashu@example.com', '305-419-9910', '156 Tokyo, Town, Japon', '1991-01-29');

//Mangas//
INSERT INTO mangas (mangas_id,title, author, publication_date,  genre, description, stock_quantity)
VALUES ('1', 'One piece', 'Oda', '1998-11-02', 'Shonen', 'A brief description of the manga.', 30);
VALUES ('2', 'JK', 'Hanmi', '2018-01-02', 'Shonen', 'A brief description of the manga.', 40);
VALUES ('3', 'Hunter X Hunter', 'Hunter', '1995-11-12', 'Shonen', 'A brief description of the manga.', 20);
VALUES ('4', 'Detective', 'Sohichiro', '1993-09-02', 'Shonen', 'A brief description of the manga.', 10);
VALUES ('5', 'Doreamon', 'Great one', '1991-01-22', 'Shonen', 'A brief description of the manga.', 2);
VALUES ('6', 'Naruto', 'Sasami', '2003-10-14', 'Shonen', 'A brief description of the manga.', 5);
VALUES ('7', 'Bleach', 'Asura', '2005-10-14', 'Shonen', 'A brief description of the manga.', 13);
VALUES ('8', 'Demon slayer', 'Kasura', '2019-04-21', 'Shonen', 'A brief description of the manga.', 0);
VALUES ('9', 'JOJO', 'bizzare', '1989-07-30', 'Shonen', 'A brief description of the manga.', 6);

