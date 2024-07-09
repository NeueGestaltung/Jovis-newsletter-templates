module.exports = {
        files: [
                '*.html'
],

	proxy: {
		target: 'http://localhost/jovis_newsletter/',
		proxyReq: [
			function(proxyReq) {
				proxyReq.setHeader('X-Proxy-Header', 'browsersync');
			}
		]
	},
	https: false,
        watch: true,
        host: 'localhost',
        open: 'local',
        logLevel: 'debug',
};
  

