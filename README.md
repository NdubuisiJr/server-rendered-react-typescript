# Server-Side Rendered React with Node and Typescript
This is a project template for server-side rendered react application with node all written in typescript.

<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" width="175">   
  <img style="margin:0px 30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" width="175">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png" width="175">
</div>

## Project Structure
```
build/
|___ css/
|___ images/
|___ js/
|
dist/
|___ server.js
|
server/
|___ server.ts
|___ tsconfig.json
|
client/
|___ components/
|___ pages/ 
|___ index.html
|___ index.tsx
|
webpack/
```
Normally, you would have to `git ignore` the `build` folder and the `dist` folder because these contain the actual artifacts that would be published. They are kept here for clarity.
### Folders 
* `build` This is the public path of the application as can be seen in `server.ts`. This is where you would place all the `css`, `images`, and custom `js` files.
* `dist` This is where the `build-prod` script will dump all the transpiled `server code` for deployment. It will have the same file names (with .js extension) and folder structure as `server` folder.
* `server` This is where you would write you server side code all in `typescript`. Where you will manage `data`, convert your components to `string`, and send back to the user as pure `html`.
* `client` This holds all you awesome `React` pages and components. It basically handles all frontend matter.
* `webpack` Contains webpack configurations

### Scripts
* `npm run dev` or `yarn run dev` - This initiates a `nodemon` process that continueously watches all the `.tsx` files in the `client` folder and regenerates the build artifacts on change.
* `npm run serve` or `yarn run serve` - This initiates another `nodemon` process that continueously watches all files in `client` and `server` folder, restarting the server each time a change is made.
* **Note that these two scripts must be running on different terminals during development**
* `npm start` or `yarn start` - Runs the development build of the application.
* `npm run build` or `yarn run build` - Creates the production build for the server (`dist` folder)
* `npm run build-img` or `yarn run build-img` - Packages the application into a docker image (you need to edit this script and provide your `image name/tag`)

## Usage
1. `git clone` this repository, copy files to your project folder
2. Run `npm install` or `yarn install` to install all project dependencies
3. Open two terminals on the project folder
4. Run `npm run dev` or `yarn run dev` on one of the terminals
5. Run `npm run serve` or `yarn run serve` on the other terminal
6. Navigate (using a browser) to the port your server is listening and rock on!

## Contributing
I would love to see all the awesome ways you'll edit and reconfigure this template. Feel free to contribute if you see where we can make it better.

See: [How to Contribute on GitHub](https://www.dataschool.io/how-to-contribute-on-github/)
