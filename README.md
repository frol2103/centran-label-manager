# Centran Label Manager

* Creation et Installation Package NPM
* Documentation Label Manager

## TL;DR

Build Library
<pre> ng build centran-label-manager --prod </pre>

Test Library

<pre>
ng serve centran-label-manager-test
</pre>

Publish Library
<pre> cd dist/
npm login
npm publish --public
</pre>

### Import LabelModule 

<pre>

@NgModule({
    declarations:[
    ],
    imports:[
    LabelModule.forRoot({
          languages: ["NL", "FR", "DE", "EN"],
          labelSourceUrl: environment.labelSourceUrl,
          appName: "appName",
          urlPrefix: environment.labelPrefix,
          urlSuffix: environment.labelSuffix,
          prod: environment.production,
        }),
    ]
    ...
})
</pre>
        
###  Configuration Basique : Lecture depuis Centranslator et DB

<pre>
//environement.ts
export const environment = {
  production: false,
  assetsSource:"",
  labelSourceUrl : "/Project/api/translations/",
  labelPrefix: "file/",
  labelSuffix: ""
};
</pre>
    
###  Configuration Spéciale  : Lecture depuis fichier JSON

 <pre>
 //environement.prod.ts dans projet principal
 export const environment = {
   production: true,
   assetsSource:"/Project/",
   labelSourceUrl : "/Project/assets/",
   labelPrefix: "Label",
   labelSuffix: ".json"
 };
 </pre>
 
 
 ### Augmenter taille modale 
 
 <pre>
 assets/css/custom.css => a ajouter dans le angular(-cli).json 
 
 .modal-lg {
 max-width: 1000px !important
 }
 </pre>
 
 
 
 
 
 
 Version 2 :
 ²
ajouter dans index.html :  
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

add in imports of module
    ModalModule.forRoot(),
    TooltipModule.forRoot(),

from
import {ModalModule} from "ngx-bootstrap/modal";
import {TooltipModule} from "ngx-bootstrap/tooltip";
