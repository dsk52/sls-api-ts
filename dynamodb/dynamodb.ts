import { DynamoDBClient } from '@aws-sdk/client-dynamodb';


let options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://0.0.0.0:8000',
  };
}

const client = new DynamoDBClient(options)

export default client;
