module.exports = function (app) {

    // home page
    app.get('/', function (req, res) {
        res.render('index', { 
          title: 'Home Page.  ',
          activeMenu: 'home'
        })
    });
    // nexus page
    app.get('/nexus', function (req, res) {
      res.render('nexus/nexus', {
        activeMenu: 'nexus'
      });
    });
    // about page
    app.get('/about', function (req, res) {
        res.render('about', { title: 'About Me.  ' })
    });
}
