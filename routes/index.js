var express = require('express');
var router = express.Router();
var controller = require('../controller/dataController');
var mongoose = require('mongoose');
/* GET home page. */
router.get('/', getDetail, async function (req, res, next) {
  var code = req.query.code;
  var message = req.query.message;
  //var data = req.data;
  console.log('hello');
  return res.render('index', { title: 'CRUD with mongodb', code: code, message: message, data: null });
});
router.post('/', (req, res) => {
  controller.create(req.body, (err, re) => {
    if (err) {
      res.redirect('/?code=' + 0 + '&message=' + err);
    } else {
      res.redirect('/?code=' + 1 + '&message=Successfully created.');
    }
  });
});
router.post('/delete/:id', (req, res) => {
  controller.remove({ '_id': mongoose.Types.ObjectId(req.params.id) }, (err, re) => {
    if (err) {
      res.redirect('/?code=' + 0 + '&message=' + err);
    } else {
      if (re.n) {
        res.redirect('/?code=' + 1 + '&message=Successfully Deleted');
      } else {
        res.redirect('/?code=' + 0 + '&message=Can not Deleted');
      }
    }
  });
});
router.get('/edit/:id', (req, res) => {
  controller.find({ '_id': mongoose.Types.ObjectId(req.params.id) }, {}, {}, (err, re) => {
    if (err) {
      res.redirect('/?code=' + 0 + '&message=' + err);
    } else {
      return res.render('edit', { title: 'Edit', data: re[0], message: null });
    }
  });
});
router.post('/edit/:id', (req, res) => {
  const {name,password,gender,age,info}=req.body;
  controller.updateOne({ '_id': mongoose.Types.ObjectId(req.params.id) },
    {
      name,      password,      gender,      age,      info
    }, {}, (err, re) => {
      if (err) {
        res.redirect('/?code=' + 0 + '&message=' + err);
      } else {
        if (re.nModified == 1) {
          return res.redirect('/?code=1&message=Updated Successfully.');
        } else {
          return res.redirect('/?code=0&message=not updated.');
        }
      }
    });
});
function getDetail(req, res, next) {
  controller.find({}, {}, {}, (err, r) => {
    if (err) {
      req.data = err;
      next();
    } else {
      req.data = r;
      next()
    }
  });
 var r = await controller.find({},{},{});
  req.data = r;
  next()
}

module.exports = router;
