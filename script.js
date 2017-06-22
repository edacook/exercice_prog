printCooperatorNumber = number =>
    document.querySelector("#coop-number").innerText = number

document.addEventListener("DOMContentLoaded", () => 
    printCooperatorNumber(23)
)

