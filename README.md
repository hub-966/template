# GIS Web Application Template

This is a template for a GIS web application using ExtJS, jQuery, and a proxy for ArcGIS Server.

## Setup

1. Install Node.js (version 18 or later)
2. Run `npm install` to install dependencies
3. Run `npm start` to start the server
4. Open http://localhost:3000 in your browser

## Deployment

This project is configured for deployment to Azure Web Apps using GitHub Actions.

- Update the app-name in `.github/workflows/azure-webapps-node.yml`
- Add your Azure App Service publish profile as a secret named `AZUREAPPSERVICE_PUBLISHPROFILE` in your repository settings

## Files

- `default.aspx` - Main page
- `proxy.ashx` - Proxy handler for ArcGIS Server (implemented in server.js for Node.js)
- `js/` - JavaScript libraries
- `css/` - Stylesheets
- `assets/` - Images and icons

## Notes

The original ASP.NET proxy has been adapted to a Node.js proxy for deployment purposes.