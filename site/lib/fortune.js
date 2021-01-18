// Modulo Fortunes
// Array fortunes
const fortuneCookies = [
    "...Vença seus medos ou eles vão te conquistar...",
    "...Os rios precisam de nascentes...",
    "...Não tenha medo do que você não conhece...",
    "...Você terá uma agradável surpresa...",
    "...Sempre que possível, mantenha as coisas simples....",
]

// Exportando Glbalmente Fortune
exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}