drop table if exists users;
create table users (
    id serial primary key,
    name text,
    email text,
    phone bigInt
);
insert into users
(name, email, phone)
values
('NickNa$ty', 'NickNa$ty@BAMF.com', 1234567890),
('NickBla$ty', 'NickBla$ty@BAMF.com', 0987654321),
('NickSa$$y', 'NickSa$$y@BAMF.com', 1111111111),
('NickGra$$y', 'NickGra$$y@BAMF.com', 1212121111)