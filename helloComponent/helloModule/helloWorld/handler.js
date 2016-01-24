'use strict';

/**
 * Serverless Module: Lambda Handler
 * - Your lambda functions should be a thin wrapper around your own separate
 * modules, to keep your code testable, reusable and AWS independent
 * - 'serverless-helpers-js' module is required for Serverless ENV var support.  Hopefully, AWS will add ENV support to Lambda soon :)
 */

// Require Serverless ENV vars
import { loadEnv } from 'serverless-helpers-js';
const ServerlessHelpers = loadEnv();

// import ServerlessHelpers from 'serverless-helpers-js'.loadEnv();
// Require Logic
import lib from '../../lib';

// Lambda Handler
export function handler(event, context) {

  lib.respond(event, (error, response) => {
    return context.done(error, response);
  });
};
