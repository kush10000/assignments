let count = 0;

function increase(){
    console.log(++count)
    setTimeout(increase,1000);
}

increase();