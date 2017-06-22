const url = "https://api.github.com/repos/edacook/exercice_prog/contents/board.html?ref=master"

loadCoopNumber = () =>
    fetch(url)
    .then(response => response.json())
    .then(data =>
        printCooperatorNumber(data.size)
    )

printCooperatorNumber = number =>
    document.querySelector("#coop-number").innerText = number

document.addEventListener("DOMContentLoaded", () => 
    loadCoopNumber(url)
)
