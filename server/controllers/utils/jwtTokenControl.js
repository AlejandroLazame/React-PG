const jwt = require('jsonwebtoken');
const { findBy } = require('./findBy');

const secretKey = process.env.SECRET_JWT;

const customErrors = {
    expiredToken: 'Token de acesso expirado.',
    invalidToken: 'Token de acesso invalido.',
}

const generateToken = credential => 
    jwt.sign({id: credential._id}, secretKey, { expiresIn: '1h'});

const verifyTokenValidity = token => {
    try {
        const decoded = jwt.verify(token, secretKey);
        if(decoded === null || decoded === 'null'){
            return false;
        }
        return decoded && true;
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return customErrors.expiredToken;
        }
        if(error.name === 'JsonWebTokenError'){
            return customErrors.invalidToken;
        }

        return error;
    }
}

const authorizeWithJwt = async (credentials, db) => {
    console.log(credentials.email);
    
    const users = await findBy(credentials.email.toLowerCase(), 'email', db);
    const { _id } = users[0];
    const access_token = generateToken(_id);
    return { _id, access_token}
}

module.exports = { generateToken, verifyTokenValidity, authorizeWithJwt }