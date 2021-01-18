Social Media Sample Project
Database Setup
$ mysql -u root
create database cbsocialmediadb;

create user cbsocialuser identified with mysql_native_password by 'cbsocialpass';

grant all privileges on cbsocialmediadb.\* to cbsocialuser;

flush privileges;
Project Structure
src
├── controllers # functions to connect routes to db operations
├── db # db connection and model definitions
├── public # html/js/css files for static part of site
└── routes # express middlewares (route wise)
Business Logic
Users
create users this will create a new user with a random username
Posts
create post this will create a new post, required fields are

username (the author of this post)
title
body
show all posts list all existing posts, we should have following filtering support

filter by username
filter by query contained in title (search by title)
edit posts TBD

delete posts TBD

Comments
show all comments (of a user)

show all comments (under a post)

add a comment
