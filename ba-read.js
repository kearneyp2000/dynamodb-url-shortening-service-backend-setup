require("dotenv").config();
 var AWS = require("aws-sdk");

 AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        if (process.env.awskey == AWS.config.credentials.accessKeyId){
            AWS.config.update({region: "eu-west-1", endpoint: "https://dynamodb.eu-west-1.amazonaws.com"});
            var docClient = new AWS.DynamoDB.DocumentClient();
            
            var table = "url-mappings";
            var longurl = "https://www.amazon.co.uk/fire-tv-stick-with-alexa-voice-remote/dp/B08C1RR8JM/ref=zg_bs_electronics_home_2?_encoding=UTF8&psc=1&refRID=HZ0912XJEJC83QEBB0GK";
            var client = "ba";
            
            var params = {
            TableName: table,
            Key: {
                "resource": longurl,
                "client": client
            }
            };
            
            docClient.get(params, function(err, data) {
            if (err) {
                console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            }
            });
        }
    }
 });