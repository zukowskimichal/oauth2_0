const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/login", { 
        target: "http://localhost:9000" }));

    app.use(createProxyMiddleware("/oauth2/token", { 
        target: "http://localhost:9000" }));
        
    app.use(createProxyMiddleware("/oauth2/authorize", { 
        target: "http://localhost:9000" }));
};