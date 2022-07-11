const mongoose= require('mongoose')


mongoose.connect('process.env.MONGODB_URL',{
     useNewParser:true,
     useCreateIndex:true,
     useFindAndModify:false
})


