![beautifull badge](https://github.com/ReconnectCMI/onepager/actions/workflows/build-deploy.yml/badge.svg?branch=main)
# Get started
Check here the Material-UI docs: https://material-ui.com/
## Usage

- Install dependencies: ```npm install```
- Start and watch app: ```npm start```
- Build the app: ```npm build```
- Run the tests: ```npm test```

## Docker <3
Make sure you have [Docker](https://www.docker.com/get-started) installed before using it ;)

For the full experience to test locally how it runs on productions:
- Create a image from the Docker file: ```docker build . -t searchbar:latest```
- Run the container: ```docker run --publish 8080:8080 searchbar:latest```
- Go to ```http://localhost:8080/``` and enjoy :)

### You can also run docker interactively and use it for developing:
This is really handy if you have issues with Node or NPM or something like that.
If you change your code it wil automaticly change in the container that is running.

After running the command you are in the command line of the container. In there you can just simply run ```npm start``` of whatever you want.

Command: ```docker run -ite ${PWD}:/code node:14.16.0-alpine sh```

## Routing
If you are using routing and are using Github pages to host you app, you have to add the basename in the routing. This is because Github pages is not deploying it at the root but one level deeper.

This is also why in the ```package.json``` there is a field:
```"homepage": "https://<username>.github.io/<project>/",```

To also get this to work with routing you need to add the basename to the router.
From:
```<Router>```
To:
```<Router basename={process.env.PUBLIC_URL}>```
The value ```process.env.PUBLIC_URL``` is ```/<project>```. The basename property allows us to specify the actual base URL for the routes which, in this case, will be the sub-directory. 

# How to install a react app with Material-UI
This is not needed to run locally or something, just when you ever want to create your own app you have to go through these steps to start fresh. Handy to have right? :)

- Create the react app: ```npx create-react-app my-app```
- Install Material-UI: ```npm install @material-ui/core```
- Install Material-UI icons: ```npm install @material-ui/icons```
