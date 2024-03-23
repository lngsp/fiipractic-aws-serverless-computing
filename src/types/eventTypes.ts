export type Response = {
    statusCode: number;
    headers?: Record<string, string>;
    body: string;
}

export type Request = {
    requestContext: {
        requestId: string;
    },
    headers?: Record<string, string>;
    body?: string;
    queryStringParameters?: Record<string, unknown>;
}

