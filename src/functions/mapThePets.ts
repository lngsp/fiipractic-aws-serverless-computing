import { Handler } from "aws-lambda";
import { Request, Response } from "../types";
import { responseBuilder } from "../utils/responseBuilder";

export const handler: Handler = async (event: Request): Promise<Response> => {
    const response = {myRequest: event}
    await setTimeout(() => console.log(event), 1000);
    return responseBuilder.buildResponse(200, response);
}