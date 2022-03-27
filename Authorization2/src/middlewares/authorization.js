
const authorization = (permittedRoles) => {
    console.log('permittedRoles:', permittedRoles)
    return (req, res, next) => {

        // first get the user from the req
        const user = req.user;

        // then check if any of the roles that user has matches with any of the permittedRoles
        const isPermittedArray = user.roles.filter((role) => {
           return permittedRoles.includes(role);
        });
        console.log(user);
        console.log(isPermittedArray);
        // if not then throw an error
        if (isPermittedArray.length === 0) {
            return res.status(403).json({ message: "You are not permitted to access this" })
        }

        // else return next
        return next();

    }
}

module.exports = authorization;



