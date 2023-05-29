let correct1 = [1,]
let correct2 = [2,]
let input = [0, 0]
let sum = 0
const res = document.getElementById('res')

function tap(x) {
    input = [0, 0]
    if (input[x] == 1) {
        input.splice(x, 1, 0)
        console.log(input)
    }
    else {
        input.splice(x, 1, 1)
        console.log(input)
    }
}
function n() {
    sum = 0
    for( i = 0; i < correct.length; i++) {
        if(input[i] == correct[i]){
            sum += 1
        }
    }
    res.innerHTML = `Ваш результат: ${sum}`
}

