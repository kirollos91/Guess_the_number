// handle  input values
    let userAnswer = document.getElementById("answer");
    userAnswer.focus();
    let computerAnswer = document.getElementById("com-answer");
// handle warning message
    let warningMsg = document.getElementById("warning-msg");
// handle label
    let label = document.getElementById("label");
// generate computer answer
    let computerAnswerRandom = Math.ceil(Math.random()*10);  // ارجاع رقم عشوائى مضروب فى عشرة وارجعاع الرقم العشرى الى اعلى قيمة صحيحة
// handle play functionality
    function play(){
        // userAnswer.value() // get user answer value
        // computerAnswerRandom  // get computer answer value
        
        if(userAnswer.value.trim() != ""){               // check if user answer is exist
           if(parseInt(userAnswer.value.trim()) === computerAnswerRandom){  // if exist compare user answer and computer answer
            label.setAttribute("class","text-success")
            label.innerText = "You Are Win...";         // if answer true type msg you win...
            computerAnswer.value =  computerAnswerRandom;    
           }else{
            setTimeout(()=>{window.location.reload();},500)
            label.setAttribute("class","text-danger")   
            label.innerText = "please, try again";
           }
        }else{                                              // if not exist ask user to add a number     
            warningMsg.innerText = "Please Add Number!";     // if answer false type msg try again and reset game
        }
    }
// handle reset functionality
    function reset(){
        window.location.reload();
    }
