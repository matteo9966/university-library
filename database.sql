-- CREATE DATABASE university_library;

CREATE TYPE user_role AS ENUM ('admin', 'user');
CREATE TYPE user_status AS ENUM ('pending', 'subscribed');
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        univerisity_id_number VARCHAR(255) NOT NULL,
        university_card_image VARCHAR(255) DEFAULT '',
        role user_role DEFAULT 'user'::user_role,
        full_name VARCHAR(255) DEFAULT '',
        status user_status DEFAULT 'pending'::user_status
    );

CREATE TABLE IF NOT EXISTS authors(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE,
    nationality VARCHAR(255),
    biography TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS categories(
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS books_categories(
    category_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

CREATE TABLE IF NOT EXISTS books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL CHECK(price>0),
    description TEXT,
    color VARCHAR(255),
    cover VARCHAR(255),
    video VARCHAR(255),
    summary VARCHAR(255),
    rating INT NOT NULL CHECK(rating>=0),
    total_copies INT NOT NULL CHECK(total_copies>=0),
    available_copies INT NOT NULL CHECK(available_copies>=0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS authors_books(
    author_id INT NOT NULL,
    book_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES book(id) 
);


CREATE TABLE IF NOT EXISTS borrowed_books(
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL,
    book_id INT NOT NULL,
    borrowed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    returned_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);


-- VIEWS 

CREATE OR REPLACE VIEW admin_dashboard_user AS 
select u.id, u.email, u.created_at,u.updated_at,u.full_name, u.role, u.status, u.university_card_image, u.univerisity_id_number, count(bb.borrowed_at) as borrowed from users as u
left join borrowed_books  as bb 
on u.id = bb.user_id 
group by u.id, u.email, u.created_at,u.updated_at
order by  borrowed

create or replace view authors_view as
select * from authors;
