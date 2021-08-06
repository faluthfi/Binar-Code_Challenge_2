
const result=["Draw","Player 1<br>Win","COM<br>Win","VS"]
let counter=0

class suit{
    constructor(playerSuit){
    this.playerSuit =playerSuit;
    this.comResult;
    this.numberResult;
    this.suitResult;
    this.playerChoice;
    this.comChoice;
    }
    // Mengubah input ke variabel
    getElementPlayer(){
        if(this.playerSuit=="Rock"){
            return this.playerChoice=document.getElementById('playerRock').parentElement
        }else if(this.playerSuit=="Paper"){
            return this.playerChoice=document.getElementById('playerPaper').parentElement
        }
            return this.playerChoice=document.getElementById('playerScissor').parentElement
    }
    // Acak Angka
    rng(){
        this.numberResult=Math.floor(Math.random() * 3);
        if (this.numberResult==0) {
            return this.comResult="Rock"
        }
        if (this.numberResult==1) {
            return this.comResult="Paper"
        }
        if (this.numberResult==2) {
            return this.comResult="Scissor"
        }
    }
    // Mengubah Angka yang diacak ke R/P/S
    getElementCom(){
        if(this.comResult=="Rock"){
            return this.comChoice=document.getElementById('comRock').parentElement
        }else if(this.comResult=="Paper"){
            return this.comChoice=document.getElementById('comPaper').parentElement
        }
            return this.comChoice=document.getElementById('comScissor').parentElement
    }
    //Mengecek hasil suit
    suitCheck(){
        if (this.comResult==this.playerSuit) {
            return this.suitResult=result[0];
        }
        if (this.comResult=="Scissor" && this.playerSuit =="Paper" || this.comResult=="Paper" && this.playerSuit=="Rock" || this.comResult=="Rock" && this.playerSuit=="Scissor"){
            return this.suitResult=result[2];
        }
        return this.suitResult=result[1]
    }
    //DOM mengubah mid display
    changeMidDisplay(){ 
        document.getElementById("result-text").innerHTML=`${this.suitResult}`;
        document.getElementById("result-text").style.color='white';
        document.getElementById("result-text").style.fontSize='80px';
        document.getElementById("result-container").style.transform='rotate(-20deg)';
        if(this.suitResult===result[0]){
            return document.getElementById("result-container").style.backgroundColor="green";
        }   return document.getElementById("result-container").style.backgroundColor="#4c9653";
    }
    //DOM mengubah background
    turnBackground(){
        this.playerChoice.classList.toggle('grey');
        this.comChoice.classList.toggle('grey');
    }
    //DOM menghapus on click event
    removeOnClick(){
        document.getElementById('playerScissor').removeAttribute("onclick")
        document.getElementById('playerRock').removeAttribute("onclick")
        document.getElementById('playerPaper').removeAttribute("onclick")
    }
    //DOM menghapus event on hover
    removeHover(){
        document.getElementById('playerScissor').parentElement.classList.toggle("hover")
        document.getElementById('playerRock').parentElement.classList.toggle("hover")
        document.getElementById('playerPaper').parentElement.classList.toggle("hover")
    }
    //console log hasil
    displayLog(){
        console.log(`Random number: ${this.numberResult}`)
        console.log(`COM Choosed: ${this.comResult}`)
        console.log(`Player Choosed : ${this.playerSuit}`)
        console.log(this.suitResult)
    }
    //execute semua fungsi diatas
    runAll(){
    this.getElementPlayer()
    this.rng()
    this.getElementCom()
    this.suitCheck()
    this.changeMidDisplay()
    this.turnBackground()
    this.removeOnClick()
    this.removeHover()
    this.displayLog()
    counter=1
    }
}

class reset{
    //mengubah mid display ke awal
    undoMidDisplay=()=>{
    document.getElementById("result-text").innerHTML=`${result[3]}`;
    document.getElementById("result-text").style.color='#bd0000';
    document.getElementById("result-text").style.fontSize='8rem';
    document.getElementById("result-container").style.transform='rotate(0deg)';
    document.getElementById("result-container").style.backgroundColor="";
    }
    //mengubah background ke awal
    undoBackground=()=>{
    document.getElementById('playerScissor').parentElement.style.backgroundColor='';
    document.getElementById('playerRock').parentElement.style.backgroundColor='';
    document.getElementById('playerPaper').parentElement.style.backgroundColor='';
    document.getElementById('comPaper').parentElement.style.backgroundColor='';
    document.getElementById('comRock').parentElement.style.backgroundColor='';
    document.getElementById('comScissor').parentElement.style.backgroundColor='';
    }
    //mengubah onclick ke awal
    undoOnClick=()=>{
    document.getElementById('playerScissor').setAttribute("onclick","scissor.runAll()")
    document.getElementById('playerRock').setAttribute("onclick","rock.runAll()")
    document.getElementById('playerPaper').setAttribute("onclick","paper.runAll()")
    }
    //mengubah hover css ke awal
    undoHover=()=>{
    document.getElementById('playerScissor').parentElement.classList.toggle("hover")
    document.getElementById('playerRock').parentElement.classList.toggle("hover")
    document.getElementById('playerPaper').parentElement.classList.toggle("hover")
    }
    //execute semua kode diatas
    undoAll=()=>{
    if(counter===0){
        return console.log(counter);
    } else {
        this.undoMidDisplay()
        this.undoBackground()
        this.undoOnClick()
        this.undoHover()
        return counter=0;
    }
    }
}
goback=()=>{
    window.history.go(0)
}

const rock=new suit("Rock")
const paper=new suit("Paper")
const scissor=new suit("Scissor")
const refresh=new reset()
