CREATE TABLE board (
    id SERIAL PRIMARY KEY,
    message VARCHAR(255) NOT NULL
);

INSERT INTO board (message) VALUES
('Ola from Brazil!'),
('Ni Hao from China!');