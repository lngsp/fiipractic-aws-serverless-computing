export const Functions = {
    mapThePets: {
        handler: 'src/functions/mapThePets.handler',
        events: [
        {
            http: {
                method: 'post',
                path: 'pets',
                integration: 'lambda',
                request: {
                    template:{
                        "application/json": "#set($inputRoot = $input.path('$'))\n[\n#foreach($elem in $inputRoot)\n {\n \"description\" : \"Item $elem.id is a $elem.type.\",\n \"askingPrice\" : $elem.price\n }#if($foreach.hasNext),#end\n\n#end\n]\n"
                    }
                },
                authorizer: {
                    name: 'authorizerFunc',
                    resultTtlInSeconds: 0,
                    identitySource: 'method.request.header.Authorization',
                    identityValidationExpression: 'someRegex',
                    type: 'token'
                }
            }
        }
        ],
        role: 'MyCustomRole'
    },
    authorizer: {
        handler: 'src/utils/authorizerHandler.authorizer'
      }
}
    