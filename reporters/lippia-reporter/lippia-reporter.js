/**
 * @file This file process Cypress Test Exection and push
 * the results to the Lippia Reporter Server.
 * @package Lippia, https://lippia.io/
 * @copyright Crowdar 2022, https://www.crowdar.com.ar/
 */
 'use strict';

 const fs = require('fs');
 const Mocha = require('mocha');
 const { exit } = require('process');
 const axios = require('axios').default;
 const LippiaRs = require('../../lippia-rs.json');
 const uuid = require('uuid').v4;
 var dateFormat = require("dateformat");
 var format = "dd/mm/yyyy HH:MM:ss";
 const { getFailedScreenshot } = require('./lippia-report-server');

 const {
   EVENT_RUN_BEGIN,
   EVENT_RUN_END,
   EVENT_TEST_FAIL,
   EVENT_TEST_PASS,
   EVENT_SUITE_BEGIN,
   EVENT_SUITE_END
 } = Mocha.Runner.constants;
 
 // Init report
 initReport();
 const reportPath = '/cypress/results/lippia-reporter.json';
 
 class CypressLippiaReporter {
   static report;
 
   static currentFeature;
 
   static reportFile;

   static lastScreenshot;

   static lastFail;
 
   constructor(runner) {
     this.runner_ = runner;
 
     this.runner_
       .on(EVENT_SUITE_BEGIN, this.onSuiteBegin)
       .on(EVENT_RUN_BEGIN, this.onRunBegin)
       .on(EVENT_TEST_PASS, this.onTestPass)
       .on(EVENT_TEST_FAIL, this.onTestFail)
       .on(EVENT_RUN_END, this.onRunEnd)
       .on(EVENT_SUITE_END, this.onSuiteEnd);
   }
 
   static getReport() {
     try {
       CypressLippiaReporter.report = require(`../..${LippiaRs.reportPath}`);
     } catch (error) {
       console.log('\x1b[31m%s\x1b[0m', `ERROR reading the report. Trace: ${error}.`);
     }
   }

   static setScreenshot(screenshot) {
    CypressLippiaReporter.lastScreenshot = screenshot;
  }
 
   static saveReport() {
     try {
       fs.writeFile(`.${LippiaRs.reportPath}`, JSON.stringify(CypressLippiaReporter.report), (error) => {
         if (error) {
           console.log('\x1b[31m%s\x1b[0m', '  Report cannot be saved.');
           console.log('  Trace:');
           console.log(`    ${error}`);
           exit();
         } else {
           console.log(`  √ Report Started on ${CypressLippiaReporter.reportFile}`);
         }
       });
     } catch (error) {
       console.log('\x1b[31m%s\x1b[0m', `  Report cannot be saved. Trace ${error}`);
     }
   }
 
 
   onRunBegin() {
     CypressLippiaReporter.getReport();
     console.log(`Start`);
   }
 
   onRunEnd() {
     CypressLippiaReporter.saveReport();
     console.log(`End`);
   }
 
   onTestPass(test) {
    var now = new Date();
    var startTime = dateFormat(now, format);
    CypressLippiaReporter.currentFeature.tests.push({
       name: test.fullTitle(),
       duration: test.duration,
       type: 'scenario',
       executionIdentifier: CypressLippiaReporter.report.executionIdentifier,
       testIdentifier: uuid().replace(/-/gi, ''),
       testParentIdentifier: CypressLippiaReporter.currentFeature.testIdentifier,
       status: 'PASS'
     });
     console.log(`    √ PASS: ${test.fullTitle()}, duration: ${test.duration}`);
   }
 
   onTestFail(test) {
    var now = new Date();
    var startTime = dateFormat(now, format);
    var testId = uuid().replace(/-/gi, '');

     CypressLippiaReporter.currentFeature.tests.push({
       name: test.fullTitle(),
       description: `error: ${err.message}`,
       duration: test.duration,
       type: 'scenario',
       executionIdentifier: CypressLippiaReporter.report.executionIdentifier,
       testIdentifier: testId,
       testParentIdentifier: CypressLippiaReporter.currentFeature.testIdentifier,
       base64Image: getFailedScreenshot(test.title),
       startTime: startTime,
       status: 'FAIL'
     });

     CypressLippiaReporter.lastFail = testId;

     console.log(`    √ FAIL: ${test.fullTitle()}, duration: ${test.duration}`);
   }
 
   onSuiteBegin(suite) {
     if (suite.title) {
      var now = new Date();
      var startTime = dateFormat(now, format);
      CypressLippiaReporter.currentFeature = {
         name: suite.title,
         type: 'feature',
         executionIdentifier: CypressLippiaReporter.executionIdentifier,
         testIdentifier: uuid().replace(/-/gi, ''),
         testParentIdentifier: null,
         startTime: startTime,
         tests: []
       } 
       console.log(`Feature: ${suite.title}`);
     }
   }
 
   onSuiteEnd(suite) {
     if (suite.title) {
       CypressLippiaReporter.report.features.push(CypressLippiaReporter.currentFeature);
       console.log(`End Suite: ${suite.title}`);
     }
   }
 }
 
 function initReport() {
   console.log('\x1b[4m\x1b[32m%s\x1b[0m', 'Lippia Reporter Server');
 
   const body = {
     projectName: LippiaRs.project.projectName,
     reportName: LippiaRs.project.projectName,
     executionIdentifier: uuid().replace(/-/gi, ''),
     features: []
   }
 
   fs.writeFile(`.${LippiaRs.reportPath}`, JSON.stringify(body), (error) => {
     if (error) {
       console.log('\x1b[31m%s\x1b[0m', '  Report cannot be saved.');
       console.log('  Trace:');
       console.log(`    ${error}`);
       exit();
     } else {
       console.log(`√ Report Started on ${LippiaRs.reportPath}`);
     }
   });
 }
 
 module.exports = CypressLippiaReporter; 