var bug = require('./models/bug');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/bugs', function(req, res) {

		// use mongoose to get all todos in the database
		bug.find(function(err, bugs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(bugs); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/bugs', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		bug.create({
			desc : req.body.text,
			fixed : false
		}, function(err, bugs) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			bug.find(function(err, bugs) {
				
				if (err)
					res.send(err)
				
				res.json(bugs);
			});
		});

	});

	// delete a todo
	app.delete('/api/bugs/:bug_id', function(req, res) {
		bug.remove({
			_id : req.params.bug_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			bug.find(function(err, bugs) {
				if (err)
					res.send(err)
				res.json(bugs);
			});
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};