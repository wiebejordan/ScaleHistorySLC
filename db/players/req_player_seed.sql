create table reg_players (
    id serial primary key,
    player_id integer REFERENCES shslc_users(user_id),
    name varchar(100),
    faction varchar(100),
    side varchar(20),
    switch boolean,
    payed boolean
);