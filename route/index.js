const feathers = require('feathers');
const path = require('path');
const rootPath = path.normalize(__dirname + '/../');
const router = feathers.Router();

router.get('/', function(req, res, next){
  res.sendFile(rootPath + 'public/index.html');
  
});

router.get('/login', function(req, res, next){
  res.sendFile(rootPath + 'public/login.html');
});

router.get('/register', function(req, res, next){
  res.sendFile(rootPath + 'public/register.html');
});

router.get('/forgetpassword', function(req, res, next){
  res.sendFile(rootPath + 'public/forgetpassword.html');
});


module.exports = router;
