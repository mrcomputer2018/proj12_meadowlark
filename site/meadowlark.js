/** Importando HANDLERS.JS */
const handlers = require('/lib/handlers')

/** 1 Chamando o Expresss */
const express = require('express')

// 8 Chamando Handlebars
const expressHandlebars = require('express-handlebars')

// Importando Fortunes
const fortune = require('./lib/fortune.js')

// 2 Gerando APP
const app = express()

// 9 Configuracao da view engine Handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))
// Setando a engine 
app.set('view engine', 'handlebars')

// 3 Definindo a porta Padrao do APP
const port = process.env.PORT || 3000

// 11 Declarando caminho dos arquivos estaticos - Middleware static
app.use(express.static(__dirname + '/public'))

/** 7 Rotas Novas */
// Rota GET Home
app.get('/', handlers.home)

// Rota GET About
app.get('/about', handlers.about)

// 4 Rota Pagina 404 personalizada
app.use(handlers.notFound)

/** 5 Rota Pagina 500 personalizada */
app.use(handlers.serverError)

/** 6 Escutando a porta 3000 */
app.listen(port,() => console.log(`\nExpress iniciado em http://localhost:${port};` + '\nPressione CRTL+C para sair.'))