import { StatusCodes } from "http-status-codes";

export const pageNotFoundError = (req, res) => {
    let errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
}

export const internalServerError = (error, req, res, next) => {
    let errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`<h1>${errorCode} | Internal Server Error our application is taking a nap!</h1>`);
}