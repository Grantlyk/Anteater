var bug = require('./models/bug');

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	app.get('/api/bugs', function(req, res) {


		bug.find(function(err, bugs) {

			if (err)
				res.send(err)

			res.json(bugs);
		});
	});

	app.post('/api/bugs', function(req, res) {

		bug.create({
			desc : req.body.text,
			fixed : false
		}, function(err, bugs) {
			if (err)
				res.send(err);

			bug.find(function(err, bugs) {
				
				if (err)
					res.send(err)
				
				res.json(bugs);
			});
		});

	});

	app.delete('/api/bugs/:bug_id', function(req, res) {
		bug.remove({
			_id : req.params.bug_id
		}, function(err, bugs) {
			if (err)
				res.send(err);

			bug.find(function(err, bugs) {
				
				if (err)
					res.send(err)
				
				res.json(bugs);
			});
		});

	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};