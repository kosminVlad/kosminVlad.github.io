let correct = [1, 0]
let input = [0,0]
let sum = 0

function tap(x) {
    input = [0,0]
    if(input[x] == 1) {
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
        for(i = 0; i < correct.length; i++){
            if(input[i] == correct[i]) {
                sum += 1
            }
        }
        console.log(sum);
    }