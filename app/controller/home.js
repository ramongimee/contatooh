module.exports = function () {
  var controller = {};
  controller.index = function (req,res) {
    //retorna a pagina index.ejs
    res.render('index',{nome:"Express"});
  }
  return controller;
}
