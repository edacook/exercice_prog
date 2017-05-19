
ulWording = [
    "Plan d'amménagements",
    "Cartes magnétiques",
    "Dossier ESSOR"
]

toLis = wording =>
    wording.map(
        liItem => `<li>${liItem}</li>`
    ).join('')

document.write(`<ul>${toLis(ulWording)}</ul>`)