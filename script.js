function myfunction(){
    var divmain0 =document.createElement("div");
    divmain0.style= "display: flex; height: 150px;align-items: center; width:100%;justify-content: center;flex-direction: column;"
    var h = document.createElement("h1");
    h.innerHTML = 'TIC TAC TOE'
    divmain0.appendChild(h);
    var p1 = document.createElement("p");
    p1.innerHTML = 'Player 1  === X'
    divmain0.appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerHTML = 'Player 2  === O'
    divmain0.appendChild(p2);
    document.body.appendChild(divmain0)
    
    var divmain1 = document.createElement("div");
    divmain1.style= "display: flex; height: 150px;align-items: center; width:100%;justify-content: center;"
    for(i=1;i<=3;i++){
    var div  = document.createElement("div");
    div.id = i ;
    div.setAttribute("onclick","game("+i+")")
    div.style= "display: flex; height: 150px;align-items: center; width :150px;justify-content: center; background-color: burlywood; border: solid black 2px;font-size: 50px;"
    divmain1.appendChild(div)
    }
    document.body.appendChild(divmain1)

    var divmain2 = document.createElement("div");
    divmain2.style= "display: flex; height: 150px;align-items: center;width:100%;justify-content: center;"
    for(i=4;i<=6;i++){
    var div  = document.createElement("div");
    div.id = i ;
    div.setAttribute("onclick","game("+i+")")
    div.style= "display: flex; height: 150px;align-items: center; width :150px;justify-content: center;background-color:brown; border: solid black 2px;font-size: 50px;"
    divmain2.appendChild(div)
    }
    document.body.appendChild(divmain2)
    var divmain3 = document.createElement("div");
    divmain3.style= "display: flex; height: 150px;align-items: center;width:100%;justify-content: center;"
    for(i=7;i<=9;i++){
    var div  = document.createElement("div");
    div.style= "display: flex; height: 150px;align-items: center; width :150px;justify-content: center; background-color: burlywood; border: 2px solid black ;font-size: 50px;"
    div.id = i ;
    div.setAttribute("onclick","game("+i+")")
    divmain3.appendChild(div)
    }
    document.body.appendChild(divmain3)
    
}



var clickCount = 1;
//var array= {1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:}
var array= [];
function checkwinner(){
    
     if (array[1] == 'O'&& array[2]== 'O' && array[3]== 'O'){
         alert("Game Over!! \n Player2  Won");
        return 1}
    else if (array[1] == 'X'&& array[2]== 'X' && array[3]== 'X'){
        alert("Game Over!! \n Player1  Won");
       return 1}
    else if (array[4] == 'O'&& array[5]== 'O' && array[6]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[4] == 'X'&& array[5]== 'X' && array[6]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1}
    else if (array[7] == 'O'&& array[8]== 'O' && array[9]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[7] == 'X'&& array[8]== 'X' && array[9]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1}
    else if (array[1] == 'O'&& array[4]== 'O' && array[7]== 'O'){
                alert("Game Over!! \n Player2 Won")
                return 1;}
    else if (array[1] == 'X'&& array[4]== 'X' && array[7]== 'X'){
                alert("Game Over!! \n Player1  Won");
                return 1}
    else if (array[2] == 'O'&& array[5]== 'O' && array[8]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[2] == 'X'&& array[5]== 'X' && array[8]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1}  
    else if (array[3] == 'O'&& array[6]== 'O' && array[9]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[3] == 'X'&& array[6]== 'X' && array[9]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1} 
    else if (array[1] == 'O'&& array[5]== 'O' && array[9]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[1] == 'X'&& array[5]== 'X' && array[9]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1} 
    else if (array[7] == 'O'&& array[5]== 'O' && array[3]== 'O'){
            alert("Game Over!! \n Player2 Won")
            return 1;}
    else if (array[7] == 'X'&& array[5]== 'X' && array[3]== 'X'){
            alert("Game Over!! \n Player1  Won");
            return 1}            
    else{return 0;}
}

function game(click){
if (clickCount%2==0){
    document.getElementById(click).innerHTML = 'O';
    document.getElementById(click).setAttribute('onclick','false')
    array[click]= 'O'
}
else{
    document.getElementById(click).innerHTML = 'X';
    document.getElementById(click).setAttribute('onclick','false')
    array[click]= 'X'
}
var a = checkwinner()
    
if (a==0){
    if (clickCount<9){
        clickCount +=1;}
    else { 
        alert("Game Over!! \n Match draw");
        window.location.reload();}
}
else {
   window.location.reload()
}
}




