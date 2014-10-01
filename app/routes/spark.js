var https = require('https');
var querystring = require('querystring');

exports.readLED1 = function(req, res){

  var options = {
    host: 'api.spark.io',
    path: '/v1/devices/55ff6d064989495320292587/led1?access_token=b6f9c0464e5592684e631f8c76c78f28f58ae039'
  };

  https.get(options, function(proxyRes) {
    var bodyChunks = [];
    proxyRes.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
      res.send(Buffer.concat(bodyChunks));
    })
  });

};

exports.readLED2 = function(req, res){

  var options = {
    host: 'api.spark.io',
    path: '/v1/devices/55ff6d064989495320292587/led2?access_token=b6f9c0464e5592684e631f8c76c78f28f58ae039'
  };

  https.get(options, function(proxyRes) {
    var bodyChunks = [];
    proxyRes.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
      res.send(Buffer.concat(bodyChunks));
    })
  });

};

exports.readAnalog1 = function(req, res){

  var options = {
    host: 'api.spark.io',
    path: '/v1/devices/55ff6d064989495320292587/analog1?access_token=b6f9c0464e5592684e631f8c76c78f28f58ae039'
  };

  https.get(options, function(proxyRes) {
    var bodyChunks = [];
    proxyRes.on('data', function(chunk) {
      bodyChunks.push(chunk);
    }).on('end', function() {
      res.send(Buffer.concat(bodyChunks));
    })
  });

};

exports.writeLED1 = function(req, res){

  var post_data = querystring.stringify({
      'access_token' : 'b6f9c0464e5592684e631f8c76c78f28f58ae039',
      'params': 'l1,' + req.param('value')
  });

  var options = {
    host: 'api.spark.io',
    path: '/v1/devices/55ff6d064989495320292587/led',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
    }
  };


  // Set up the request
  var post_req = https.request(options, function(pRes) {
      pRes.setEncoding('utf8');
      pRes.on('data', function (chunk) {
          console.log('Response: ' + chunk);
          res.send({result: "success"})
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();
};

exports.writeLED2 = function(req, res){

  var post_data = querystring.stringify({
      'access_token' : 'b6f9c0464e5592684e631f8c76c78f28f58ae039',
      'params': 'l2,' + req.param('value')
  });

  var options = {
    host: 'api.spark.io',
    path: '/v1/devices/55ff6d064989495320292587/led',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_data.length
    }
  };

  // Set up the request
  var post_req = https.request(options, function(pRes) {
      pRes.setEncoding('utf8');
      pRes.on('data', function (chunk) {
          console.log('Response: ' + chunk);
          res.send({result: "success"})
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();
};