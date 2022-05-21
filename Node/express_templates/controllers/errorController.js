import {StatusCodes} from 'http-status-codes'

// Respond with a 404 status code
export function respondNoResourceFound(req, res) {
    let errorCode = StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.send(`<h1>${errorCode} | The page does not exist!</h1>`);
};

// Cath all errors and respond with a 500 status code
export function respondInternalServerError(error, req, res, next) {
    let errorCode = StatusCodes.INTERNAL_SERVER_ERROR;
    console.log(`Error occured: ${error.stack}`);
    res.status(errorCode);
    res.send(`<h1>${errorCode} | Sorry, our application is experiencing a problem!</h1>`);
};


export function logErrors(error, req, res, next) {
    console.log(error.stack);

    next(error);
}