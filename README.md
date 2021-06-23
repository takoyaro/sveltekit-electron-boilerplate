# SvelteKit Electron Boilerplate

## Installation
Clone repository to get started
```
npx degit takoyaro/sveltekit-electron-boilerplate <app-name>
cd <app-name>
npm install
```
### Electron
NOTE: electron dev script relies on `nodemon` to listen for file changes. Instead of installing nodemon as a package install it globally with the `-g` flag.

https://www.npmjs.com/package/nodemon
```
npm install -g nodemon
```

To run dev server. Execute following command in your terminal from the 
root directory 
```
npm run electron
```
or to launch electron with devtools open
```
npm run electron:devtools
```

### Frontend
To spawn frontend dev server simply cd into `frontend`, install and launch the dev script
```
cd frontend
npm install
npm run dev
```

## Build
Launching the electron build will first build the `frontend` before being packaged to an electron application.

From root directory. Execute following build script
```
npm run build
```

The build step is managed by the [electron-builder](https://www.electron.build/) library. To configure the build step, refer to it's documentation.

NOTE: Currently only windows configured out of the box.

![Svelte-Electron-Boilerplate preview](preview.png?raw=true "In action preview")