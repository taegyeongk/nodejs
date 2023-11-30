const { rejects } = require('assert');
const crypto = require('crypto');
const { resolve } = require('path');
const data = 'pw1234';

let encData = crypto.createHash('sha512')
                    .update(data)
                    .digest('base64');

console.log(encData);
encData = crypto.createHash('sha512')
                .update(data)
                .digest('hex'); //digest함수 : 파라미터로 어떤 인코딩 방식으로 암호화된 문자열을 표시할지를 전달

console.log(encData);

const createSalt = () =>{
return new Promise((resolve, reject)=>{
    crypto.randomBytes(64, (err, buf)=>{
        if(err) reject(err);
        resolve(buf.toString('base64')); //toString : 인코딩 기준 방식으로 넣음 단순 문자열 변환 x 
    })
})

}

const createCryptoPassword = async(plainPassword)=>{
    const salt = await createSalt();

    return new Promise((resolve, reject)=>{
        crypto.pbkdf2(plainPassword, salt, 9999, 64, "sha512", (err,key)=>{
            if(err) reject(err);
            resolve({password : key.toString("base64"), salt})
        })
    })
}

const cryptoPassword = async()=>{
    encData = await createCryptoPassword(data);
    console.log(encData);

}

cryptoPassword();
