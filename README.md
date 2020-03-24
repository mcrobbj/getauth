# Sign the Request for an Auth Token
It will need to be changed but currently it signs a JWT that is used to request a Token

## Setup
At the same level as this project you should have a directory named certs with:
- privateKeySigning.key
- publicKeySigning.pem

You will need to modify the code to have:
- the key as your key currently "kid":"5FZT6gTLM5wEoSGn3eW0Q8zCPsQ"
- ClientId as the clinetId you got from registration

## Run
node getauth.js

## To Do
Pull configinfrom a file
