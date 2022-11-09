# Crowdar Academy 2022 - Cypress

## Purpose:
The following project has the purpose of demonstrate and let test automation developers to
to test a App Web using Cypress.io Framework.

****

## Project structure

A typical Cypress project usually looks like this

```

..\academy2022-cypress
|   .dockerignore
|   .drone.yml
|   .gitignore
|   .gitlab-ci.yml
|   cypress.json
|   dockerfile
|   lippia-rs.json
|   Makefile
|   package-lock.json
|   package.json
|   README.md
|   yarn.lock
|   
\---cypress
    +---downloads
    +---fixtures
    |   +---examples
    |   |       DatosExample.json
    |   |       LoginAdminExample.json
    |   |       LoginExample.json
    |   |       
    |   \---locators
    |           HomeLocators.json
    |           LoginLocators.json
    |           ShopLocators.json
    |           
    +---integration
    |   |   
    |   |   
    |   |   NativeExecutionRunner-CrowdarAcademy2022.spec.js
    |   |   
    |   +---common
    |   |   +---Gestion       
    |   |   |   |       
    |   |   |   \---shop
    |   |   |           shopSteps.js
    |   |   |           
    |   |   \---Login
    |   |           loginSteps.js
    |   |           
    |   \---cucumber-tests
    |       +---01-Login
    |       |       login.feature
    |       |       
    |       \---02-Gestion
    |           |       
    |           |       
    |           \---shop
    |                   shop.feature
    |                   
    +---plugins
    |       index.js
    |       
    \---support
        |   commands.js
        |   index.js
        |   
        \---pages
                ShopPage.js
                HomePage.js
                LoginPage.js          
                        


## Folder's description:

|Path   |Description    |
|-------|----------------|
|academy2022-cypress\cypress\fixtures\examples\\\*.json | Folder with all the **Fixtures-Examples**|
|academy2022-cypress\cypress\fixtures\Download\\\*.xlsx | Folder with all downloads **Downloads** report.xlsx |
|academy2022-cypress\cypress\fixtures\locators\\\*.json | Folder with all the **Locators** matching steps with java code|
|academy2022-cypress\cypress\integration\\\*.spec.js | Folder with all the **Test Web** matching steps with java script code|
|academy2022-cypress\cypress\plugins\\\index.js | Folder with all the **Plugins** with java script code|
|academy2022-cypress\cypress\support\\\ | Folder with all the **Support Commands** with java script code|
|academy2022-cypress\ | Folder with all configuration needed to run Cypress |


## Getting started
***    

```

# Getting started

 snap install node --classic

 npm init
 
 npm install cypress --save-dev
 
 npm install cypress-donwloadfile --no
 
 Run Cypress:  .\node_modules\.bin\cypress open

Comando optativo: npx cypress open              

Ante dificultades ejecutar en modo Administrador:
 - Para CMD: ".\node_modules\.bin\cypress.cmd install --force"
 - Para Bash: " .\\node_modules\\.bin\\cypress.cmd install --force"

 Después ya podrán correr "npm run cy:open"
