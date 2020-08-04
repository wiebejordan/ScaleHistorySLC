module.exports = {
  getAlliedMessages: (req, res) => {
    const db = req.app.get('db');

    db.chat.get_allied_messages()
    .then(messages => res.status(200).send(messages))
    .catch(err => res.status(500).send(err));
  },

  postAlliedMessage: (req, res) => {
    const db = req.app.get('db'),
          {name, message} = req.body;

    db.chat.new_allied_message(name, message)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  },

  getAxisMessages: (req, res) => {
    const db = req.app.get('db');

    db.chat.get_axis_messages()
    .then(messages => res.status(200).send(messages))
    .catch(err => res.status(500).send(err));
  },

  postAxisMessage: (req, res) => {
    const db = req.app.get('db'),
          {name, message} = req.body;

    db.chat.new_axis_message(name, message)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err))
  }

}