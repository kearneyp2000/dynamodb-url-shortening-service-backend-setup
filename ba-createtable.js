require("dotenv").config();
var AWS = require("aws-sdk");

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {

        // console.log("Env Access key:", process.env.awskey);
        // console.log("AWS ClI Access key:", AWS.config.credentials.accessKeyId);

            if (process.env.awskey == AWS.config.credentials.accessKeyId){

            AWS.config.update({region: "eu-west-1", endpoint: "https://dynamodb.eu-west-1.amazonaws.com"});

            var dynamodb = new AWS.DynamoDB();

            var params = {
                TableName : "url-mappings",
                KeySchema: [
                    { AttributeName: "resource", KeyType: "HASH"},  //Partition key
                    { AttributeName: "client", KeyType: "RANGE" },  //Sort key
                ],
                AttributeDefinitions: [
                    { AttributeName: "resource", AttributeType: "S" },
                    { AttributeName: "client", AttributeType: "S" },
                ],
                ProvisionedThroughput: {
                    ReadCapacityUnits: 10,
                    WriteCapacityUnits: 10
                }
            };

            dynamodb.createTable(params, function(err, data) {
                if (err) {
                    console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                } else {
                    console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                }
            });
        }
    }
  });


