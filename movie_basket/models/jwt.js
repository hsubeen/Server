var jwt = require('jwt-simple');
var secret = 'dudghk';


function makeToken (value) {
    var token = jwt.encode(value, secret);
    console.log(value);
    console.log("token is : " + token);
    return token;
}

function decodeToken (token) {
    var decoded = jwt.decode(token, secret);
    console.log("decoded value is " + decoded);
    return decoded;
}


module.exports.makeToken = makeToken;
module.exports.decodeToken = decodeToken;
