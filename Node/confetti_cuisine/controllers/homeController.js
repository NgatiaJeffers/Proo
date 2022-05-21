let courses = [
    {
        name: "How to cook the best burger pt. 4",
        topic: "Javascript",
        level: "Intermediate",
        views: 0,
        date: new Date(2019, 11, 1),
        cost: 50
    },
    {
        name: "How to cook the best burger pt. 3",
        topic: "Javascript",
        level: "Intermediate",
        views: 4,
        date: new Date(2020, 11, 1),
        cost: 25
    },
    {
        name: "How to cook the best burger pt. 2",
        topic: "Javascript",
        level: "Intermediate",
        views: 2,
        date: new Date(2020, 11, 1),
        cost: 10
    }
]


// Add callback functions for specific routes
export function showCourses(req, res) {
    res.render("courses", {
        offeredCourses: courses
    });
};

export function showSignUp(req, res) {
    res.render("Sign up");
}

export function postedSignUp(req, res) {
    res.render("Posted sign up");
}