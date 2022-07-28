const server = require('./src/app');
server.listen( process.env.PORT || 3001,()=>{
    console.log("listening server in: ",process.env.PORT);
})