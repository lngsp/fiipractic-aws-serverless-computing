import { Response } from "../types";
class ResponseBuilder {
    public buildResponse (statusCode: number, response: Record<string, unknown>):
    Response {
        return {
            statusCode,
            body: JSON.stringify(response)
        }
    }
}
export const responseBuilder = new ResponseBuilder();