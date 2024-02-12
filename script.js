let user1 = prompt('1-ci oyuncunun adini qeyd edin');
let user2 = prompt('2-ci oyuncunun adini qeyd edin');
let user3 = prompt('3-ci oyuncunun adini qeyd edin');
let user4 = prompt('4-ci oyuncunun adini qeyd edin');
let user5 = prompt('5-ci oyuncunun adini qeyd edin');

function ad(){
    
let dc;
let player1;
let player2;
let random1 = Math.floor(Math.random() * 2) + 1;
let random2 = Math.floor(Math.random() * 5) + 1;
let random3 = Math.floor(Math.random() * 5) + 1;

if(random1 == 1){
    dc = `Dogruluq`;
}else {
    dc = `Cesaret`;
}

if(random2 == 1){
    player1 = user1;
} else if(random2 == 2){
    player1 = user2;
} else if(random2 == 3){
    player1 = user3;
} else if(random2 == 4){
    player1 = user4;
} else{
    player1 = user5;
}

if(random3 == 1){
    player2 = user1;
} else if(random3 == 2){
    player2 = user2;
} else if(random3 == 3){
    player2 = user3;
} else if(random3 == 4){
    player2 = user4;
} else{
    player2 = user5;
}

document.getElementById('ad').innerHTML = (`Bizim oyunumuzda ${user1}, ${user2}, ${user3}, ${user4} ve ${user5} istirak edir`);
document.getElementById('oyun').innerHTML = (`Oyuncu ${player1}, sizin qurbaniniz  ${player2} olacaq, ${dc} oyununda oynayacaq`);
}