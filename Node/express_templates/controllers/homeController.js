export function respondName(req, res) {
    // let paramsName = req.params.name;
    res.render("index", {name: paramsName});
}