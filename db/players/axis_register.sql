insert into axis_players (
    name,
    faction,
    side,
    payed
) values (
    ${name},
    ${faction},
    ${side},
    ${payed}
    
    
)
returning player_id, name, faction, side, payed;