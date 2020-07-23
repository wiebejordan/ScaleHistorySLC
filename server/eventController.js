module.exports = {
  alliedregister: async (req, res) => {
    const {player_id, name, faction, side, payed} = req.body,
          db = req.app.get('db');
    
    const foundPlayer = await db.players.check_allied_player({player_id});
    if(foundPlayer[0]){
      return res.status(400).send('player already registered!')
    }

    db.players.allied_register(player_id, name, faction, side, payed)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))

  },

  axisregister: async (req, res) => {
    const {player_id, name, faction, side, payed} = req.body,
          db = req.app.get('db');
    
    const foundPlayer = await db.players.check_axis_player({player_id});
    if(foundPlayer[0]){
      return res.status(400).send('player already registered!')
    }

    db.players.axis_register(player_id, name, faction, side, payed)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send(err))

  },



}