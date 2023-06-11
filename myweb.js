changeData = document.querySelector("button");

const quizList =["Question 1 <br><br>First fire-arm invented country ?<br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 2 <br><br> In which era gun powder were discovered ?<br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 3 <br><br> In which country was the AK-47 designed ?<br><br> <input type= 'radio' name= 'quiz'  value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 4 <br><br>Who invented most firearms? <br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>","Question 5 <br><br> What is the oldest gun in the world? <br><br> <input type= 'radio' name= 'quiz' value='a'> answer a <br><input type= 'radio' name= 'quiz' value='b'> answer b <br><input type= 'radio' name= 'quiz' value='c'> answer c <br><input type= 'radio' name= 'quiz' value='d'> answer d <br><br>"]

const buttonFunc =function(){

    for( let i=0; i<5; i++){
        let x= i+1;
        let y= i+2;
        if (changeData.classList.contains("b"+x)){
            document.querySelector(".texts").innerHTML= quizList[i];
            document.querySelector(".b"+x).innerHTML="Next";
            changeData.classList.add("b"+y)
            changeData.classList.remove("b"+x)
            return;
        }
    }
}
changeData.addEventListener("click",buttonFunc);
