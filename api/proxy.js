const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  let target = "https://google.com"; // Change this to the site you want to proxy
  
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: { '^/api/proxy': '' },
  });

  return proxy(req, res);
};
