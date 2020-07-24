delete from reg_players
where player_id = $1;
delete from shslc_users
where user_id = $1;