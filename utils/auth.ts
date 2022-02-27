import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function signJWT(id) {
    return jwt.sign({id} , SECRET);
}

export { signJWT ,SECRET };