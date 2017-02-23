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
    model.find({is_deleted: 0})
      .then(function (data) {
        res.json({read: data})
      }).catch(function (err) {
      res.json({err: err})
    })
  },
  delete: function (req, res) {
    let id = {
      '_id': req.body.objid
    }
    model.findOne(id)
      .then(function (data) {
        data.is_deleted = 1
        data.save(function (err) {
          if (err)
            res.json({errorsave: err})
        })
        res.json({delete: true})
      }).catch(function (err) {
      res.json({notfound: err})
    })
  },
  beforeUpdate: function (req, res) {
    let id = {
      '_id': req.params.id
    }
    model.findOne(id)
      .then(function (data) {
        res.json({update: data})
      }).catch(function (err) {
      res.json({notfound: err})
    })
  }

}
