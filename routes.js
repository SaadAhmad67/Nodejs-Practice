const fs = require("fs");

const {htmlGenerator} = require("./utils.js");


function requestHandler(req, res) {
    const {url , method} = req;

    res.setHeader("Content-Type", "text/html");
    if(url =='/' && method === "GET"){
        res.end(htmlGenerator("Home", "<h1>Welcome to Node js Bootcamp</h1>"));
    }else if(url === "/stop"){
        res.end(htmlGenerator("Stopped", "<h1>Server is Stopped</h1>"));
        console.log(process);
        process.exit();
    }else if(url === "/signup" && method === "GET"){
        res.end(htmlGenerator("Sign Up", "<h1>Registration Form</h1><form action='/signup' method='POST'><input type='text' name='fullName' placeholder='Enter your full name'><button>Submit</button></form>"));
    }else if(url === "/signup" && method === "POST"){
        const body = [];
        req.on("data", function(chunk){
            body.push(chunk);
        });
        req.on("end", function(){
            const data = Buffer.concat(body).toString();
            const result = data.split("=")[1];
            fs.writeFile("user.txt", result, function(err){
                if(err){
                    console.log(err);
                }
            });
            res.end(htmlGenerator("Sign Up Completed", `<h1>${result}</h1>`));
        });
    }else {
        res.end(htmlGenerator("Error 404", "<h1>Error 404, Page Not Found</h1>"));
    }
}

module.exports = requestHandler;