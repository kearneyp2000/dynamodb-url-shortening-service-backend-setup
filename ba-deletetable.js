require("dotenv").config();
var AWS = require("aws-sdk");

if (process.env.awskey == AWS.config.credentials.accessKeyId){

    AWS.config.update({region: "eu-west-1", endpoint: "https://dynamodb.eu-west-1.amazonaws.com"});

    var dynamodb = new AWS.DynamoDB();

    var params = {
        TableName : "url-mappings"
    };

    dynamodb.deleteTable(params, function(err, data) {
        if (err) {
            console.error("Unable to delete table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Deleted table. Table description JSON:", JSON.stringify(data, null, 2));
        }
    });
}
