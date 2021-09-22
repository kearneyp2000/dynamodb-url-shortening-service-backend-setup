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
                var shorturl = "http://dummydata/xxxxx";
                var client = "ba";
                var longurl = "https://www.amazon.co.uk/fire-tv-stick-with-alexa-voice-remote/dp/B08C1RR8JM/ref=zg_bs_electronics_home_2?_encoding=UTF8&psc=1&refRID=HZ0912XJEJC83QEBB0GK";

                var params = {
                    TableName:table,
                    Item:{
                        "resource": longurl,
                        "client": client,
                        "shorturl": shorturl
                    }
                };

                console.log("Adding a new item...");
                //put  uses different docClient to putItem
                docClient.put(params, function(err, data) {
                    if (err) {
                        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
                    } else {
                        console.log("Added item:", JSON.stringify(data, null, 2));
                    }
                });
        }
    }
});