const result=["Draw","Player 1<br>Win","COM<br>Win"]
const midDisplay= document.getElementById('result-text')
suit = (playerSuit) =>{
    let comResult;
    let numberResult;
    let suitResult;
    let playerChoice
    let comChoice
    function getElementPlayer(playerSuit){
        if(playerSuit=="Rock"){
            return playerChoice=document.getElementById('playerRock')
        }else if(playerSuit=="Paper"){
            return playerChoice=document.getElementById('playerPaper')
        }
            return playerChoice=document.getElementById('playerScissor')
    }
    function rng(){
        numberResult =Math.floor(Math.random() * 3);
        if (numberResult==0) {
            return comResult="Rock"
        }
        if (numberResult==1) {
            return comResult="Paper"
        }
        if (numberResult==2) {
            return comResult="Scissor"
        }
    }
    function getElementCom(comResult){
        if(comResult=="Rock"){
            return comChoice=document.getElementById('comRock')
        }else if(comResult=="Paper"){
            return comChoice=document.getElementById('comPaper')
        }
            return comChoice=document.getElementById('comScissor')
    }
    function suitCheck(playerSuit){
        if (comResult==playerSuit) {
            return suitResult=result[0];
        }
        if (comResult=="Scissor" && playerSuit =="Paper" || comResult=="Paper" && playerSuit=="Rock" || comResult=="Rock" && playerSuit=="Scissor"){
            return suitResult=result[2];
        }
        return suitResult=result[1]
    }
    function changeMidDisplay(suitResult){
        document.getElementById("result-text").innerHTML=`${suitResult}`;
        document.getElementById("result-text").style.color='white';
        document.getElementById("result-text").style.fontSize='80px';
        document.getElementById("result-container").style.transform='rotate(-20deg)';
        if(suitResult===result[0]){
            return document.getElementById("result-container").style.backgroundColor="green";
        }   return document.getElementById("result-container").style.backgroundColor="#4c9653";
    }
    function turnBackground(){
        playerChoice.parentElement.style.backgroundColor='#c4c4c4';
        comChoice.parentElement.style.backgroundColor='#c4c4c4';
    }
    function removeOnClick(){
        document.getElementById('playerScissor').removeAttribute("onclick")
        document.getElementById('playerRock').removeAttribute("onclick")
        document.getElementById('playerPaper').removeAttribute("onclick")
    }
    function removeHover(){
        document.getElementById('playerScissor').parentElement.classList.remove("hover")
        document.getElementById('playerRock').parentElement.classList.remove("hover")
        document.getElementById('playerPaper').parentElement.classList.remove("hover")
    }
    getElementPlayer(playerSuit)
    rng()
    getElementCom(comResult)
    suitCheck(playerSuit)
    changeMidDisplay(suitResult)
    turnBackground()
    removeOnClick()
    removeHover()
    console.log(`COM Choosed: ${comResult}`)
    console.log(`Player Choosed : ${playerSuit}`)
    console.log(suitResult)
}
// suit("Rock")
// suit("Paper")
// suit("Scissor")