create table shslc_users (
    user_id serial primary key,
    username varchar(20),
    password text,
    email varchar(200),
    profile_img text,
    isAdmin boolean
);