const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// For ASPX files, serve as HTML (since we can't run ASP.NET)
app.get('*.aspx', (req, res) => {
  const filePath = req.path.replace('.aspx', '.html');
  res.sendFile(path.join(__dirname, filePath));
});

// Proxy for ArcGIS (simple proxy)
const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

app.all('/proxy.ashx*', (req, res) => {
  // Simple proxy to ArcGIS server
  const target = 'http://maps.decaturil.gov'; // from proxy.config
  proxy.web(req, res, { target });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});