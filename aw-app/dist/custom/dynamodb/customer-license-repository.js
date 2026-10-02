"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlByLicenseNo = getUrlByLicenseNo;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dynamodb_client_1 = require("./dynamodb-client");
// license_no をキーに customer_license テーブルから url を取得する
async function getUrlByLicenseNo(licenseNo) {
    const result = await dynamodb_client_1.dynamoDb.send(new lib_dynamodb_1.GetCommand({
        TableName: 'customer_license',
        Key: { license_no: licenseNo },
        // "url" は DynamoDB の予約語のためプレースホルダーに置き換える
        ProjectionExpression: '#url',
        ExpressionAttributeNames: { '#url': 'url' },
    }));
    const url = result.Item?.url;
    return typeof url === 'string' ? url : undefined;
}
