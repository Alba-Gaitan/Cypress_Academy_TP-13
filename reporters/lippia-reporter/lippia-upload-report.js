/**
 * @file This file process Cypress Test Exection and push
 * the results to the Lippia Reporter Server.
 * @package Lippia, https://lippia.io/
 * @copyright Crowdar 2022, https://www.crowdar.com.ar/
 */
 'use strict';

 const { uploadReport } = require('./lippia-report-server');
 
 uploadReport();
 