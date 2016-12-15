/**
 * Created by vineetasharma on 17/10/16.
 */
var express=require('express');
var app=express();

var myLogger=function(req,res,abc){
    //res.end('Request terminated');
    console.log('req got--------now next is abc-------');
    throw new Error('gfhsdfgh');
    //abc();
};

var requestTime=function(req,res,next){
    console.log('Request Time Middleware-----------');
    req.requestTime=Date.now();
    next();
};

app.use(requestTime);
app.use(myLogger);
app.use(function(req, res) {
    console.log('Error callabck middleware-----');
    console.error(req.stack);
    //res.status(500).send('Something broke!');
    //next();
});

app.get('/',function(req,res){
    var strMsg='Hello World!<br>';
    strMsg+=' Requested at:::: '+req.requestTime;
    res.send(strMsg);
});

var userMiddleware=function(req,res,next){
    console.log('UserMiddleware-------------------',req.method);
    next();
};
app.use('/user',userMiddleware);
app.get('/user',function(req,res){
    console.log('get user request-----------------');
    res.send('User Requested!!!');
});
app.listen(7000);