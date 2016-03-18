// Combine matching media queries into one media query definition
module.exports = {
	options: {
		log: false
	},
	main: {
		files:[{
			expand: true,
			cwd: '<%= paths.theme.css %>',
			src: ['*.css', '!*.min.css'],
			dest: '<%= paths.theme.css %>'
		}]
	}
}
