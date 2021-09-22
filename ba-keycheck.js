var AWS = require("aws-sdk");

// check the key configured on your machine - key is specific to aws account
// Might help prevent you creating Dynamodb tables on the wrong instance of aws.
AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
    }
  });
