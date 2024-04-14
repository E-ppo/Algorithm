const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');
let [W, H, X, Y, P] = input[0].split(' ').map(n=>parseInt(n));
let r = H/2;
let cnt = 0;

for(let i=1; i<=P; i++){
    let coordArr = input[i].split(' ');
    let coordX = parseInt(coordArr[0]);
    let coordY = parseInt(coordArr[1]);
    let rX = X-coordX;
    let rrX = X+W-coordX;
    let rY = Y+r-coordY;
    
    if(coordX>=X && coordX<=(X+W) && coordY>=Y && coordY<=(Y+H)){
        cnt++
    }else if(coordX<X && r>=Math.sqrt(rX*rX+rY*rY)){
        cnt++
    }else if(coordX>X+W && r>=Math.sqrt(rrX*rrX+rY*rY)){
        cnt++
    }
}
console.log(cnt);
