/**
 * Lib
 */

const respond = (event, cb) => {

  const response = {
    message: "Your Serverless function ran successfully!!!"
  };

  return cb(null, response);
};

export default {respond};
