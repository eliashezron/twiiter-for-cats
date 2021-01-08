const express = require('express');

const cors = require('cors');
const monk = require('monk');

require('dotenv').config();

const port = process.env.PORT||2222;


const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

app.get('/',(req, res) => {
res.json({
    message: 'meower!'
 });
});

function isValidMew(mew){
    return mew.name && mew.name.toString().trim() !=='' &&
    mew.content && mew.content.toString().trim() !=='';
};
 


app.post('/mews',(req, res) =>{
if (isValidMew(req.body)){
    //insert into do...
    const mew={
        name: req.body.name.toString(),
        content: req.body.name.toString()
    };

    console.log(mew);

}else{
    res.status(422);
    res.json({
        message: 'hey! Name and Content are required!'
    });
}
});

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`);
});
