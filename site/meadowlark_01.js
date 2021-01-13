/** 1 Chamando o Expresss */
const express = require('express')

// 2 Gerando APP
const app = express()

// 3 Definindo a porta Padrao do APP
const port = process.env.PORT || 3000

// 4 Rota Pagina 404 personalizada
app.use((req,res) => {
    // Definindo o tipo de DADO
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found!!!')
})

/** 5 Rota Pagina 500 personalizada */
app.use((err,req,res,next) => {
    console.log(err.message)
    res.type('text/plain')
    res.status(505)
    res.send('500 - Erro Interno no Servidor!!!')
})

/** 6 Escutando a porta 3000 */
app.listen(port,() => console.log(`\nExpress iniciado em http://localhost:${port};` + '\nPressione CRTL+C para sair.'))