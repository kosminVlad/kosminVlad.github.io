<<<<<<< HEAD
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

=======
let correct = [1, 3, 2, 1] 
let input = [] 
let sum = 0 
function tap(x, y) { 
        input.splice(x , 1 , y) 
} 
function n() { 
        sum = 0 
        for( i = 0; i < correct.length; i++) {  
        if(input[i] == correct[i]){ 
            sum += 1 
        }  if (sum == 0) {
            res.innerHTML = `Ваш результат: ${sum} <br> нет слов...`;
        } else if (sum == 1) {
            res.innerHTML = `Ваш результат: ${sum} <br> отличный результат... 1 из 4...`
        } else if (sum == 2) {
            res.innerHTML = `Ваш результат: ${sum} <br> только половина, ну ладно...`
        } else if (sum == 3) {
            res.innerHTML = `Ваш результат: ${sum} <br> больше половины, молодец`
        } else if (sum == 4) {
            res.innerHTML = `Ваш результат: ${sum} <br> ЛЕГЕНДА!!!!!`
        }
        
    } 
    // res.innerHTML = `Ваш результат: ${sum}`; 
    } 
>>>>>>> d43adda228a11c685c68971b11adc3fc43a196a1
