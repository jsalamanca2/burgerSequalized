var app = require('./../server.js');

var burger = require('./../models/burger.js');
// Routes
module.exports = function(app) {
	// This takes the user to the homepage
	app.get('/', function(req, res) {
		burger.findAll({}).then(function(results) {
		res.render("index", {burgers: results});
	 })
	});
//create added and findall
	app.post('/',function(req,res){
		burger.create({
			burger_name:req.body.newestBurger
		}).then(function(){
			res.redirect('/');
		})
	});
	app.post('/delete/:id',function(req,res){
		burger.update({
			devoured:1
			},{
				where:{ 
					id : req.params.id
				}
			}).then(function(){
				res.redirect('/');
			})
		});
}
