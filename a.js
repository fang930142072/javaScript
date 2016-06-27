/**
 * Created by 我就是我 on 2016/6/25.
 */
'use strict';
var http = require('http');
var url = require('url');

var server = http.createServer(function (request,response) {
    var info = url.parse(request.url,false);

    console.log(info);
    

    response.end();
})
server.listen(3000, function (error) {
    console.log("启动成功：http://localhost:3000");
})