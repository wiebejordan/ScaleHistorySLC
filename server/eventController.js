module.exports = {
  alliedregister: async (req, res) => {
    const {name, faction, side, payed} = req.body,
          db = req.app.get('db');
    
    const foundPlayer = await db.players.check_allied_player({name});
    if(foundPlayer[0]){
      return res.status(400).send('player already registered!')
    }

    db.players.allied_register(name, faction, side, payed)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send(err))

  },

  axisregister: async (req, res) => {
    const {name, faction, side, payed} = req.body,
          db = req.app.get('db');
    
    const foundPlayer = await db.players.check_axis_player({name});
    if(foundPlayer[0]){
      return res.status(400).send('player already registered!')
    }

    db.players.axis_register(name, faction, side, payed)
    .then(() => res.sendStatus(200))
    .catch(() => res.status(500).send(err))

  },



}