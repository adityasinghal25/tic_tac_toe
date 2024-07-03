let matrix = [];
let x = 3;
let y = 3;
for (var a=0;a<x;a++){
    matrix[a]= [];
    for (var b=0;b<y;b++){
        matrix[a][b]= -1;
    }
}
//  console.log(matrix);
function show(k,i,j){
    if(r1.checked){
        let s = "";
        s = "<img src=1.jpg height=200px width=200px>";
        m[k].innerHTML = s;
        matrix[i][j]=1;
    }
    else if(r2.checked){    
        let s = "";
        s = "<img src=2.jpg height=200px width=200px>";
        m[k].innerHTML = s;
        matrix[i][j]=0;
    }
}
function show1(){
   // console.log(matrix);
   if((matrix[0][0]==1 && matrix[0][1]==1 && matrix[0][2]==1) || (matrix[1][0]==1 && matrix[1][1]==1 && matrix[1][2]==1) || (matrix[2][0]==1 && matrix[2][1]==1 && matrix[2][2]==1) || (matrix[0][0]==1 && matrix[1][0]==1 && matrix[2][0]==1) || (matrix[0][1]==1 && matrix[1][1]==1 && matrix[2][1]==1) || (matrix[0][2]==1 && matrix[1][2]==1 && matrix[2][2]==1) || (matrix[0][0]==1 && matrix[1][1]==1 && matrix[2][2]==1) || (matrix[0][2]==1 && matrix[1][1]==1 && matrix[2][0]==1)){
        divlast.innerHTML = "Winner is PLAYER 1";
   }
   else if((matrix[0][0]==0 && matrix[0][1]==0 && matrix[0][2]==0) || (matrix[1][0]==0 && matrix[1][1]==0 && matrix[1][2]==0) || (matrix[2][0]==0 && matrix[2][1]==0 && matrix[2][2]==0) || (matrix[0][0]==0 && matrix[1][0]==0 && matrix[2][0]==0) || (matrix[0][1]==0 && matrix[1][1]==0 && matrix[2][1]==0) || (matrix[0][2]==0 && matrix[1][2]==0 && matrix[2][2]==0) || (matrix[0][0]==0 && matrix[1][1]==0 && matrix[2][2]==0) || (matrix[0][2]==0 && matrix[1][1]==0 && matrix[2][0]==0)){
    divlast.innerHTML = "Winner is PLAYER 2";
    }
}