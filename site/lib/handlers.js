/** Importando FORTUNE */
const fortune = require('./fortune')

// Rota HOME
exports.home = (req.res) => res.render('home')


// Rota ABOUT 
exports.about = (req.res) => res.render('about', {fortune: fortune.getFortune()})

// Rota NOT FOUND - 404
exports.notFound = (req.res) => res.render('404')

// Rota SERVER ERROR - 500
exports.serverError = (err,req,res,next) => res.render('500')