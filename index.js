 //import your http
 const http = require ("http")

 // Create server with HTTP
 const server = http. createServer((req, res)=> {
        console.log("Server is Created")
 })

 //initial a port 
 const PORT = 5000;

 // listen to server(
server.listen(PORT, ()=> console.log('Server is running on port ' + PORT))
