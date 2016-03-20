// Compile Jade templates
module.exports = {
	all: {
		options: {
			client: false,
			pretty: true
		},
		files: [ {
			cwd: '<%= paths.theme.jade %>',
			src: ['*.jade'],
			dest: '<%= paths.theme.html %>',
			expand: true,
			ext: '.html'
		} ]
	}
}
