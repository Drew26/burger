
var db = require('../models');

module.exports = function(app) {

  // API route display all burgers.
  app.get('/', function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.render('index', {burgers: dbBurger}); 
    });
  });

  // API route to add a new burger
  app.post('/', function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger
    }).then(function() {
      res.redirect('/');
    });
  });

  // API route to update a burger devoured true.
  app.put('/:id', function(req, res) {
    db.Burger.update({
      devoured: 1
      },
      {
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.redirect('/');
      });
    });

  // API route to delete a burger.
  app.delete('/:id', function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect('/');
    });
  });
};