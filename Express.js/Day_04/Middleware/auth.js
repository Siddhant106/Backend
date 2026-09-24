const Auth = (req, res, next) => {
    // Do Authentication and Authorization to check whether the user is admin or not
    // Dummy code:
    const token = "ABCDEF";
    const access = token === "ABCDEF" ? 1 : 0;

    if(!access){
        res.status(403).send("Access denied");
    }

    next();
};

module.exports = {
    Auth,
}