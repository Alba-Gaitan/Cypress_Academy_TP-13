/**
 * @file This file finalize the project execution in Lippia Reporter Server.
 * @package Lippia, https://lippia.io/
 * @copyright Crowdar 2022, https://www.crowdar.com.ar/
 */
 const fs = require('fs');
 const axios = require('axios');
 const LippiaRs = require('../../lippia-rs.json');
 const { exit } = require('process');
 const glob = require('glob');
 
 console.log('\x1b[32m%s\x1b[0m', 'Lippia Reporter Server');
 console.log(`Connecting to ${LippiaRs.api}`);
 
 uploadReport();
 
 /**
  * This function read the stored executionIdentifier in the file
  * and finalize the execution on Lippia Report Server
  */
 async function uploadReport() {
   if (fs.existsSync(`.${LippiaRs.reportPath}`)) {
     const config = {
       onUploadProgress: getUploadProgress
     };
 
     console.log(`Sending the report. This might take several minutes, please wait...`);
 
     const report = require(`../..${LippiaRs.reportPath}`);
     let data = await axios.post(`${LippiaRs.api}/api/v2/json/report`, report, config)
       .then(() => { console.log(`√ Report sent to the server.`); })
       .catch((error) => {
         console.log('\x1b[31m%s\x1b[0m', `Error: ${error}`);
         exit();
       })
   } else {
     console.log('\x1b[31m%s\x1b[0m', `X Report not found on ${LippiaRs.reportPath}.`);
     exit();
   }
 }
 
 function getUploadProgress(progressEvent) {
   let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
   process.stdout.clearLine();
   process.stdout.cursorTo(0);
   process.stdout.write('Sending report ' + percentCompleted + '%');
 }

 const getFailedScreenshot = (testTitle) => {
  const rootDir = process.env.PWD;
  const title = testTitle.replace(/[",',:]/g, '')
      .replace("before each hook for ", "")
      .replace("before all hook for ", "");

  const pattern = `${rootDir}/cypress/screenshots/**/*${title}*`;

  const files = glob.sync(pattern);
  const filesContent = base64Encode(files[0]);

  return files.length ? filesContent : undefined;
};

const base64Encode = (file) => {
  const bitmap = fs.readFileSync(file);
  return Buffer.from(bitmap).toString('base64');
};

module.exports = {uploadReport, getFailedScreenshot, base64Encode};