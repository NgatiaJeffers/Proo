import User from "../models/user.js";

export const index = (req, res, next) => {
    User.find({})
        .then(users => {
            res.locals.users = users;
            next();
        })
        .catch(err => {
            console.log(`Error fectching users: ${err.message}`);
            next(err);
        });
}

export const indexView = (req, res) => {
    res.render("users/index");
}

export const newUser = (req, res) => {
    res.render("users/new");
}

export const createUser = (req, res, next) => {
    let userParams = {
        name: {
            first: req.body.first,
            last: req.body.last
        },
        email: req.body.email,
        password: req.body.password,
        zipCode: req.body.zipCode
    };

    User.create(userParams)
        .then(user => {
            res.locals.redirect = "/users";
            res.locals.user = user;
            next()
        })
        .catch(err => {
            console.log(`Error saving user: ${err.message}`);
            next(err);
        });
}

export const redirectView = (req, res, next) => {
    let redirectPath = res.locals.redirect;
    if(redirectPath) res.redirect(redirectPath);
    else next();
}

export const showUser = (req, res, next) => {
    let userId = req.params.id;
    User.findById(userId)
        .then(user => {
            res.locals.user = user;
            next();
        })
        .catch(err => {
            console.log(`Error fetching user by ID: ${err.message}`);
            next(err);
        });
}

export const showView = (req, res) => {
    res.render("users/show");
}