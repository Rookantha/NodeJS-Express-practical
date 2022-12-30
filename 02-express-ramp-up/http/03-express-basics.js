const express = require('express');
const app = express() // server instance 

// callback function invork every tim user performing the request
app.get('/', (req, res)=> {
    console.log('user hit the browser');
    res.send('Home Page')
})

app.get('/about', (req, res)=> {
    res.send('about page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
  })

app.listen(5000, ()=>{
    console.log('server listining on port 5000');
})






// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen