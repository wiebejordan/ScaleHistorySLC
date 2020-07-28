create table blog_post(
    post_id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer REFERENCES shslc_users(user_id)
);