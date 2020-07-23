create table axis_players (
    player_id integer REFERENCES shslc_users(user_id),
    name varchar(100),
    faction varchar(100),
    side varchar(20),
    payed boolean
);