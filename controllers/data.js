const model = require('../models/data')

module.exports = {
  create: function (req, res) {
    let data = {
      letter: req.body.letter,
      frequency: req.body.frequency,
      is_deleted: 0
    }
    model.create(data).then(function (data) {
      res.json({success: data})
    }).catch(function (err) {
      res.json({err: err})
    })
  },
  read: function (req, res) {
    model.find()
      .then(function (data) {
        res.json({read: data})
      }).catch(function (err) {
      res.json({err: err})
    })
  }

}
