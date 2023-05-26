let correct = [1, 0]
let input = [0, 0]
let sum = 0
const res = document.getElementById('res')

function tap(x) {
    input = [0, 0]
    if (input[x] == 1) {
        input.splice(x, 1, 0)
        console.log(input)
        sum += 1
    }
    else {
        input.splice(x, 1, 1)
        console.log(input)
    }
}
function n() {
    res.innerHTML = `Ваш результат: ${sum}`
}

