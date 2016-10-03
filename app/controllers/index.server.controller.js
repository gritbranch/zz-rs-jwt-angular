exports.homepage = function(req, res) {
	
    //first argument is the name of your EJS template without the .ejs extension, and the second argument is an object containing your template variables
	res.render('index', {
		title: 'Das Auto',
        header: 'Angular JWT'
  	})

}