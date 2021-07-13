# Server-Side Rendered React with Node and Typescript
This is a project template for server-side rendered react application with node all written in typescript.

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
Normally, you would have to `git ignore` the build folder and the dist folder because these contain the actual artifacts that would be published. They are kept here for clarity.
### Folders 
* `build` This is the public path of the application as can be seen in `server.ts`. This is where you would place all the `css`, `images`, and custom `js` files.
* `dist` This is where the `build-prod` script will dump all the transpiled `server code` for deployment. It will have the same file names (with .js extension) and folder structure as `server` folder.
* `server` This is where you would write you server side code all in `typescript`. Where you will manage `data`, convert your components to `string`, and send back to the user as pure `html`.
* `client` This holds all you awesome `React` pages and components. It basically handles all frontend matter.
* `webpack` Contains webpack configurations

