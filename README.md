# URL Shortening Service

> API to create Dynamodb collection for urls mappings required for url-shortening-service.

# Requirements
AWS account with admin access is required along with the AWS CLI and an access key to configure.

You can obtain/download your access key under your user from IAM aws service.

At the aws cli prompt run "aws configure" to setup with your access key.

create a .env also file and add the following "awskey=YOUR_ACCESS_KEY"

.env file is used to check/tie the project to a particular aws account/endpoint.

# Install dependencies
npm install

# To Create Table
node ba-createtable.js

# To Create Table
node ba-createtable.js

# To Delete Table
node ba-deletetable.js

# To Insert an Item
node ba-putItem.js

# To Read an Item
node ba-read.js

