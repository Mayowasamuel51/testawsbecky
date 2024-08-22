const app = require('express');
const router = app()


router.get('/',(req,res)=>{
    console.log('hello becky')
})


app.listen(3000,()=>{
    console.log('........')
})