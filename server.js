const {conn, syncAndSeed} = require('./db')
const express = require('express')
const app = express();


app.get('/', (req, res, next)=> {
  //do something here
});
app.get('/bookmarks', (req, res, next)=> {
  //make your database call and render html with res.send
});

const init = async() => {
    try {
        await conn.authenticate();
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> {`listening on port ${port}`});
    }
    catch(error) {
        console.log(error);
    }
}

init();

