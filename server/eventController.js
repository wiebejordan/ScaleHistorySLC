module.exports = {
  playerregister: async (req, res) => {
    const {player_id, name, faction, side, payed} = req.body,
          db = req.app.get('db');
    
    const foundPlayer = await db.players.check_player({player_id});
    if(foundPlayer[0]){
      return res.status(400).send('player already registered!').console.log('player already registered!')
    }

    db.players.player_register(player_id, name, faction, side, payed)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))

  },

  addSide: (req, res) => {
    const {user_id} = req.params,
          {side} = req.body,
           db = req.app.get('db');
    
    db.users.add_side({side, user_id})
      .then(() => res.status(200).send('side updated!'))
      .catch(err => res.status(500).send(err))
  }



}