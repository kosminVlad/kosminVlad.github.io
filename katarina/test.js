let correct = [1, 3, 2, 1] 
let input = [0, 0, 0, 0] 
let sum = 0 
function tap(x, y) { 
        input.splice(x , 1 , y) 
} 
function n() { 
        sum = 0 
        for( i = 0; i < correct.length; i++) {  
        if(input[i] == correct[i]){ 
            console.log(i)
            console.log(correct.length)
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
            res.innerHTML = `Ваш результат: ${sum} <br> Всё правильно!!`
        }
        
    } 
    // res.innerHTML = `Ваш результат: ${sum}`; 
    } 
