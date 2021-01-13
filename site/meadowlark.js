/** 1 Chamando o Expresss */
const express = require('express')

// 8 Chamando Handlebars
const expressHandlebars = require('express-handlebars')

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

// 11 Declarando caminho dos arquivos estaticos
app.use(express.static(__dirname + '/public'))

/** 7 Rotas Novas */
// Rota GET Home
app.get('/',(req,res) => {
    // 10 Rota nova com Handlebars
    res.render('home')
})

// Rota GET About
app.get('/about',(req,res) => {
   // 10_1 Rota nova com Handlebars
   res.render('about')
})

// 4 Rota Pagina 404 personalizada
app.use((req,res) => {
    // 10_2 Rota nova com Handlebars
    res.status(404)
    res.render('404')
})

/** 5 Rota Pagina 500 personalizada */
app.use((err,req,res,next) => {
    console.log(err.message)
    // 10_3 Rota nova com Handlebars
    res.status(500)
    res.render('500')
})

/** 6 Escutando a porta 3000 */
app.listen(port,() => console.log(`\nExpress iniciado em http://localhost:${port};` + '\nPressione CRTL+C para sair.'))