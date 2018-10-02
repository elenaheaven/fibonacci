const n = parseInt(prompt('Enter number of Fibonacci'));

alert('With recursion: ' + fibRecursion(n));
alert('Array method: ' + fibArray(n));
alert('Loop method: ' + fibLoop(n));


//Loop
function fibLoop(n){
    let firstNum = 1,
    secondNum = 1;
    for (let i = 3; i <= n; i++){
        let nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
    }
        return secondNum;
}
        


//Array
function fibArray(n){
    let fibArray = [1, 1];
    for (let i = 2; i < n; i++ ){
        fibArray.push(fibArray[i-1] + fibArray[i-2])
    }
        return fibArray.pop();
}


//Recursion
function fibRecursion(n) {
    if (n <= 1) {
        return n;
	}
	    return fibRecursion(n - 1) + fibRecursion(n - 2);
}
