"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamoDb = void 0;
exports.checkDynamoDbConnection = checkDynamoDbConnection;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
// DYNAMODB_ENDPOINT が設定されている場合は DynamoDB Local などへ接続する（ローカル開発用）。
// 未設定の場合は AWS のデフォルト認証情報チェーンを使って本番の DynamoDB に接続する。
const client = new client_dynamodb_1.DynamoDBClient({
    region: process.env.AWS_REGION ?? 'ap-northeast-1',
    ...(process.env.DYNAMODB_ENDPOINT ? { endpoint: process.env.DYNAMODB_ENDPOINT } : {}),
});
exports.dynamoDb = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
// DynamoDB への疎通確認（ヘルスチェック用）。
async function checkDynamoDbConnection() {
    try {
        await exports.dynamoDb.send(new lib_dynamodb_1.GetCommand({
            TableName: 'customer_license',
            Key: { license_no: '__health_check__' },
        }));
        return true;
    }
    catch {
        return false;
    }
}
