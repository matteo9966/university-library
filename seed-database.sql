insert into
    users (
        email,
        password,
        univerisity_id_number,
        role,
        full_name,
        status
    )
values
    (
        'matteo@tommasi.it',
        'secret_password',
        '1321233Q',
        'user',
        'Matteo Luigi Tommy',
        'pending'
    );

insert into
    users (
        email,
        password,
        univerisity_id_number,
        role,
        full_name,
        status
    )
values
    (
        'luigi@fermento.it',
        'secret_password',
        '142123ZQ',
        'admin',
        'Luigi Fermento',
        'pending'
    );

insert into
    users (
        email,
        password,
        univerisity_id_number,
        role,
        full_name,
        status
    )
values
    (
        'gino@fornero.it',
        'gino_fornero',
        '1421ddd23ZQ',
        'user',
        'Gino Fornero',
        'subscribed'
    );

insert into
    users (
        email,
        password,
        univerisity_id_number,
        role,
        full_name,
        status
    )
values
    (
        'paolo@bitta.it',
        'gino_fornero',
        '1421ddd23ZQ',
        'user',
        'Gino Fornero',
        'subscribed'
    );

-- books 
INSERT INTO
    books (
        title,
        price,
        description,
        color,
        cover,
        video,
        summary,
        rating,
        total_copies,
        available_copies
    )
values
    (
        'Harry Potter and the Sorcerers Stone',
        '12.50',
        'A young wizard discovers his magical heritage.',
        '#ffcc00',
        'https://example.com/harrypotter.jpg',
        '',
        'A boy with a scar goes to wizard school.',
        5,
        150,
        150
    );

INSERT INTO
    books (
        title,
        price,
        description,
        color,
        cover,
        video,
        summary,
        rating,
        total_copies,
        available_copies
    )
VALUES
    (
        'The Hobbit',
        '9.99',
        'A hobbit embarks on an adventure with dwarves.',
        '#008000',
        'https://example.com/thehobbit.jpg',
        '',
        'Bilbo finds a ring and meets a dragon.',
        4.8,
        200,
        180
    ),
    (
        '1984',
        '8.99',
        'A dystopian novel about surveillance and control.',
        '#333333',
        'https://example.com/1984.jpg',
        '',
        'Big Brother is watching.',
        4.7,
        120,
        95
    ),
    (
        'The Catcher in the Rye',
        '7.99',
        'A rebellious teenager navigates life in New York.',
        '#ff5733',
        'https://example.com/catcher.jpg',
        '',
        'Holden Caulfield complains a lot.',
        4.5,
        130,
        110
    ),
    (
        'Pride and Prejudice',
        '11.99',
        'A classic romance novel.',
        '#ffb6c1',
        'https://example.com/pride.jpg',
        '',
        'Elizabeth Bennet and Mr. Darcy overcome misunderstandings.',
        4.9,
        160,
        150
    ),
    (
        'The Great Gatsby',
        '10.50',
        'A tragic story of wealth and love.',
        '#0044cc',
        'https://example.com/gatsby.jpg',
        '',
        'Gatsby throws parties but loves only one woman.',
        4.6,
        140,
        125
    ),
    (
        'Dune',
        '14.99',
        'A sci-fi epic about a desert planet.',
        '#cc6600',
        'https://example.com/dune.jpg',
        '',
        'Paul Atreides becomes the Kwisatz Haderach.',
        4.8,
        180,
        170
    ),
    (
        'To Kill a Mockingbird',
        '9.49',
        'A novel about racism and justice.',
        '#000000',
        'https://example.com/mockingbird.jpg',
        '',
        'Atticus Finch defends an innocent man.',
        4.9,
        170,
        160
    );

INSERT INTO
    authors ("name", "birthdate", "nationality", "biography")
VALUES
    (
        'J.K. Rowling',
        '1965-07-31',
        'British',
        'Author of the Harry Potter series.'
    ),
    (
        'George Orwell',
        '1903-06-25',
        'British',
        'Known for "1984" and "Animal Farm".'
    ),
    (
        'Jane Austen',
        '1775-12-16',
        'British',
        'Famous for novels like "Pride and Prejudice".'
    ),
    (
        'Mark Twain',
        '1835-11-30',
        'American',
        'Author of "The Adventures of Tom Sawyer".'
    ),
    (
        'Gabriel García Márquez',
        '1927-03-06',
        'Colombian',
        'Wrote "One Hundred Years of Solitude".'
    ),
    (
        'Haruki Murakami',
        '1949-01-12',
        'Japanese',
        'Author of "Norwegian Wood" and "Kafka on the Shore".'
    ),
    (
        'Fyodor Dostoevsky',
        '1821-11-11',
        'Russian',
        'Known for "Crime and Punishment".'
    ),
    (
        'Leo Tolstoy',
        '1828-09-09',
        'Russian',
        'Wrote "War and Peace" and "Anna Karenina".'
    );