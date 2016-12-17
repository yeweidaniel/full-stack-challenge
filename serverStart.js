var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	stats: { colors: true }
}).listen(config.ui.port, config.ui.host, function(err) {
	if (err) console.log(err);
	console.log('Listening at ' + config.ui.host + ':' + config.ui.port);
});
