// Add callback functions for specific routes
export function showCourses(req, res) {
    res.render("Show all courses");
};

export function showSignUp(req, res) {
    res.render("Sign up");
}

export function postedSignUp(req, res) {
    res.render("Posted sign up");
}