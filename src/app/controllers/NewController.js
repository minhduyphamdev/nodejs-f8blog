class NewController {
    index(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send("Detail")
    }
}
module.exports = new NewController;