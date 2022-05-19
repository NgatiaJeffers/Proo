export function sendRegParam(req, res) {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
}