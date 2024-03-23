import { APIGatewayTokenAuthorizerHandler } from "aws-lambda";

export const authorizer: APIGatewayTokenAuthorizerHandler = async (event) => {
    const token = event.authorizationToken;
    let effect = 'Deny';

    if (token === 'authed') {
        effect = 'Allow';
    }

    return {
        principalId: 'user',
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
            {
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: '*',
            },
            ],
        },
    }
};
    