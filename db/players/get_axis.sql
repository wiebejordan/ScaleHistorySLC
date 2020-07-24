select p.name, p.faction, u.profile_img from reg_players p 
join shslc_users u on p.player_id = u.user_id
where u.side = 'axis';