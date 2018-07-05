# Centran Label Manager

* Creation et Installation Package NPM
* Documentation Label Manager

## Création et Installation Package NPM

La structure minimal pour la création d'un package npm: 

 <pre>
 --src
    --lib
        -- lib-source <= your code goes here
        -- tsconfig.es5.json
        -- tsconfig.lib.json
        -- tsconfig.spec.json
        -- index.ts
        -- typings.d.ts
        
 --dist  #generated
 --out-tsc #generated
 --package.json
 --build.js
 --inline-resources.js
 --tsconfig.json
 --README.MD
 </pre>
 
 * Etape 1 : Preparer le package.json
 
   Le fichier package.json doit ressembler a ceci : 
    
  <pre>
   {
     "name": "centran-label-manager",
     "version": "1.0.0",
     "description": "Centran Label Manager",
     "main": "./bundles/centran-label-manager.umd.js",
     "module": "./centran-label-manager.es5.js",
     "es2015": "./centran-label-manager.js",
     "typings": "./centran-label-manager.d.ts",
     "author": "",
     "license": "MIT",
     "repository": {},
     "engines": {
       "node": ">= 6.9.0",
       "npm": ">= 3.0.0"
     },
     "scripts": {
       "clean": "rimraf out-tsc dist/*",
       "prebuild": "npm run clean",
       "build": "node build.js"
     },
     "peerDependencies": {
       "@angular/core": ">=5.0.0 <6.0.0"
     },
     "devDependencies": {
       "@angular/common": "^5.0.0",
       "@angular/compiler": "^5.0.0",
       "@angular/compiler-cli": "^5.0.0",
       "@angular/core": "^5.0.0",
       "@angular/platform-browser": "^5.0.0",
       "@angular/platform-browser-dynamic": "^5.0.0",
       "@types/jasmine": "2.5.36",
       "@types/node": "^6.0.46",
     },
     "dependencies": {
        "project dependencies"
     }
  </pre>  
    
 * Etape 2 : Build 
 
  <pre> npm run build </pre>
  
 * Etape 3 : Publish 
 
  
  
 * Etape 4 : Install 
 
  <pre>
    npm install @centran/centran-label-manager </pre>