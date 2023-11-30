const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express(); //express 인스턴스 생성

//npm install multer

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/');  //uploads 할 경우 중복되는 값이 80% 이상 발생한다.
    },
    filename : function(req, file, cb){
        cb(null, new Date().valueOf() + path.basename(file.originalname));
    }
});

const upload = multer({ storage : storage });

app.post('/profile', upload.single('avatar'), (req,res)=>{ //single : 단위값으로 어떤것을 받을것인지만 정해주면 됨.
    console.log(req.file);
    console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req, res)=>{  //array : 여러개를 받기때문에 몇개까지 받을것인지 정해줘야한다.
    for(let file of req.files){
        console.log(file);
    }
});

app.listen(5000,()=>{
    console.log('Server Start !!');
});

