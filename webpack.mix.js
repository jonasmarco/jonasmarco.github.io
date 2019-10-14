let mix         = require('laravel-mix');
let public_path = 'public';

// Default config
mix.options({
	processCssUrls: false,
	browserslist  : {
		enabled: true,
		options: {
			browsers: ['> 1%', 'last 2 versions', 'ff >= 50', 'Chrome >= 49', 'Safari >= 9.2', 'edge >= 15', 'iOS >= 9', 'Android >= 4.4'],
		}
	}
});

mix.webpackConfig({
	watchOptions: {
		ignored: /node_modules/
	}
});

// Set public path
mix.setPublicPath(public_path);

// Disable success notifications
mix.disableNotifications();

// Front-end path's
const front_path = {
	source : 'common/',
	css    : 'css/',
	js     : 'js/',
	fonts  : public_path + '/fonts/',
	img    : public_path + '/images/',
	uploads: 'public/uploads/',
};

// front_path.source  => 'common/'
// front_path.css     => 'css/'
// front_path.css     => 'js/'
// front_path.fonts   => 'public/fonts/'
// front_path.img     => 'public/images/'
// front_path.uploads => 'public/uploads/'

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

/* ================================
 Frontend
 ================================== */
if( typeof front_path !== 'undefined' )
{
	mix
	.sass(front_path.source + 'scss/app.scss', front_path.css + 'app.css', { implementation: require('node-sass') })

	.js([
		front_path.source + 'js/app.js',
	], front_path.js + 'app.js')

	// Copy font's folder
	.copyDirectory(front_path.source + 'fonts/', front_path.fonts)

	// Copy images's folder
	.copyDirectory(front_path.source + 'images/', front_path.img)

	// Copy uploads's folder
	.copyDirectory(front_path.source + 'uploads/', front_path.uploads)

	.browserSync({
		proxy: 'D:\\Users\\Jonas\\Projetos\\jonasmarco.github.io',
		files: [
			public_path + '/css/**/*.*',
			public_path + '/js/**/*.*',
		]
	});
}

