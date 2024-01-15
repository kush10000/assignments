
let curr = new Date();

let hh = curr.getHours();

let mm = curr.getMinutes();

let ss = curr.getSeconds();

function increase(){
    ss+=1;
    if(ss > 59){
        ss = 0;
        mm+=1;
        if(mm > 59){
            mm=0;
            hh+=1;
            if(hh == 24){
                hh = 0;
            }
        }
    }
    console.log(hh+":"+mm+":"+ss);
}

console.log(hh+":"+mm+":"+ss);

setInterval(increase,1000)

