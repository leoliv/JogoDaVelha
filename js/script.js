const boxs = document.querySelectorAll(".box")
let caixas = []
let led = {
  id: 1,
  box: undefined,
}
for (const box of boxs) {
  caixas.push({
    id: led.id++,
    box: box,
    game: "",
    value: true,
  })
}

function vencedor() {
  const vitoria = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
  let playerX = []
  let playerO = []
  for (let i = 0; i < caixas.length; i++) {
    if (caixas[i].game === "X") {
      playerX.push(caixas[i].id)
    }

    if (caixas[i].game === "O") {
      playerO.push(caixas[i].id)
    }
    return playerX === vitoria[i].toString() ? true : false
    // console.log('playerX',playerX)
    // console.log('playerO',playerO)
  }
}

let verificarValor = true
for (let i = 0; i < caixas.length; i++) {
  caixas[i].box.onclick = () => {
    if (caixas[i].value) {
      caixas[i].box.innerText = verificarValor ? "X" : "O"
      verificarValor = verificarValor ? false : true
      caixas[i].value = false
      caixas[i].game = caixas[i].box.innerText
      vencedor()
      console.log(vencedor())
      console.log(caixas[i].id, caixas[i].game)
      // if (vencedor()) {
      //     break;
      // } else {
      //     continue
      // }
    }
  }
}
