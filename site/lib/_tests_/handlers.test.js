// Importando HANDLERS
const handlers = require('../handlers') 

// Teste da Rota HOME
test('home page renders', () => { 
    const req = {} 
    const res = { render: jest.fn() } 
    handlers.home(req, res) 
    expect(res.render.mock.calls[0][0]).toBe('home') 
})

// Teste da Rota ABOUT
test('about page renders with fortune', () => { 
    const req = {} 
    const res = { render: jest.fn() } 
    handlers.about(req, res) 
    expect(res.render.mock.calls.length).toBe(1) 
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({ fortune: expect.stringMatching(/\W/), 
    })) 
})

// Teste da Rota 404
test('404 handler renders', () => { 
    const req = {} 
    const res = { render: jest.fn() } 
    handlers.notFound(req, res) 
    expect(res.render.mock.calls.length).toBe(1) 
    expect(res.render.mock.calls[0][0]).toBe('404') }) 

// Teste da Rota 500
test('500 handler renders', () => { 
    const err = new Error('some error') 
    const req = {} 
    const res = { render: jest.fn() } 
    const next = jest.fn() 
    handlers.serverError(err, req, res, next) 
    expect(res.render.mock.calls.length).toBe(1) 
    expect(res.render.mock.calls[0][0]).toBe('500') 
})

