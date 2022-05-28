import {StatusCodes} from "http-status-codes";

export const logErrors = (err, req, res, next) => {
    console.err(err.stack);
    next(err);
};

export const pageNotFoundError = (req, res, next) => {
    let errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

export const internalServerError = (err, req, res, next) => {
    let errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${err.stack}`);
    res.status(errorCode);
    res.render(`${errorCode} | Sorry, our application is experiencing a problem!`);
};
