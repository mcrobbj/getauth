'use strict';
const fs = require('fs');
const jwt = require('jsonwebtoken');
const uuid4 = require('uuid4');
var privateKEY  = fs.readFileSync('./../certs/privateKeySigning.key', 'utf8');
var publicKEY  = fs.readFileSync('./../certs/publicKeySigning.pem', 'utf8');
/*
 ====================   JWT Signing =====================
*/
var id = uuid4();
var payload = {
 "token_endpoint_auth_signing_alg": "PS256",
 "jti": id
};
var header  = {"alg":"PS256", "typ":"JWT", "kid":"5FZT6gTLM5wEoSGn3eW0Q8zCPsQ"};
var issuer  = 'ClientId';   
var subject  = 'ClientId';   
var audience  = 'https://tsob.sainsburysbank.co.uk:443/sso/oauth2/realms/root/realms/general';
var signOptions = {
 issuer:  issuer,
 header:  header,
 subject:  subject,
 audience:  audience,
 expiresIn:  "1h"
};


var token = jwt.sign(payload, privateKEY, signOptions);

console.log("Token :" + token);
/*
 ====================   JWT Verify =====================
*/
var verifyOptions = {
 issuer:  issuer,
 subject:  subject,
 audience:  audience,
 expiresIn:  "1h",
 algorithm:  ["PS256"]
};
var legit = jwt.verify(token, publicKEY, verifyOptions);
console.log("\nJWT verification result: " + JSON.stringify(legit));