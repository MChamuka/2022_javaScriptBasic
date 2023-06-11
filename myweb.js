changeData = document.querySelector("button");

const quizList =["Question 1 <br><br>First fire-arm invented country ?<br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 2 <br><br> In which era gun powder were discovered ?<br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 3 <br><br> In which country was the AK-47 designed ?<br><br> <input type= 'radio' name= 'quiz'  value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 4 <br><br>Who invented most firearms? <br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 5 <br><br> What is the oldest gun in the world? <br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>"]

const buttonFunc =function(){
    if (changeData.classList.contains("b1")){
        document.querySelector(".texts").innerHTML= quizList[0];
        document.querySelector(".b1").innerHTML="Next";
        changeData.classList.add("b2")
        changeData.classList.remove("b1")
        return;

    }
    if(changeData.classList.contains("b2")){
        document.querySelector(".texts").innerHTML=quizList[1];
        document.querySelector(".b2").innerHTML="Next";
        changeData.classList.add("b3")
        changeData.classList.remove("b2")
        return;
    }
    if(changeData.classList.contains("b3")){
        document.querySelector(".texts").innerHTML=quizList[2];
        document.querySelector(".b3").innerHTML="Next";
        changeData.classList.add("b4")
        changeData.classList.remove("b3")
        return;
    }
    if(changeData.classList.contains("b4")){
        document.querySelector(".texts").innerHTML=quizList[3];
        document.querySelector(".b4").innerHTML="Next";
        changeData.classList.add("b5")
        changeData.classList.remove("b4")
        return;
    }
    if(changeData.classList.contains("b5")){
        document.querySelector(".texts").innerHTML=quizList[4];
        document.querySelector(".b5").innerHTML="Next";
        changeData.classList.add("b6")
        changeData.classList.remove("b5")
        return;
    }
}

changeData.addEventListener("click",buttonFunc);
