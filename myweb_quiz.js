changeData = document.querySelector("button");

const quizList=['Question 1 <br><br>First fire-arm invented country ?<br><br> <input type= "radio" name= "quiz" id="a1" value="a1"> America <br><input type= "radio" name= "quiz" id="a2" value="a2"> China <br><input type= "radio" name= "quiz" id="a3" value="a3"> Congo <br><input type= "radio" name= "quiz" id="a4" value="a4"> Lanka <br><br>','Question 2 <br><br>In which era gun powder were discovered?<br><br> <input type= "radio" name= "quiz" id="a1" value="a1"> 2nd c <br><input type= "radio" name= "quiz" id="a2" value="a2"> 4th c <br><input type= "radio" name= "quiz" id="a3" value="a3"> 10th c <br><input type= "radio" name= "quiz" id="a4" value="a4"> 9th c <br><br>','Question 3 <br><br> In which country was the AK-47 designed ?<br><br> <input type= "radio" name= "quiz" id="a1" value="a1"> Russia <br><input type= "radio" name= "quiz" id="a2" value="a2"> India <br><input type= "radio" name= "quiz" id="a3" value="a3"> Somalia <br><input type= "radio" name= "quiz" id="a4" value="a4"> China <br><br','Question 4 <br><br>Who invented most firearms? <br><br> <input type= "radio" name= "quiz" id="a1" value="a1"> Logan Paul <br><input type= "radio" name= "quiz" id="a2" value="a2"> Samuel Colt <br><input type= "radio" name= "quiz" id="a3" value="a3"> Samuel Kelly <br><input type= "radio" name= "quiz" id="a4" value="a4"> Tupac Shakur <br><br>','Question 5 <br><br> What is the oldest gun in the world? <br><br> <input type= "radio" name= "quiz" id="a1" value="a1"> Sniper <br><input type= "radio" name= "quiz" id="a2" value="a2"> Revolver <br><input type= "radio" name= "quiz" id="a3" value="a3"> Heilongjiang hand cannon <br><input type= "radio" name= "quiz" id="a4" value="a4"> Shotgun <br><br>']
const quizans=["begin","a2","a4","a1","a2","a3"];
const userlist=[];
const final=[]

const buttonFunc =function(){  
    

    for( let i=1; i<7; i++){        
        let x= i+1;
       
        if (changeData.classList.contains("b"+i)){
            
            if(document.querySelector(".b"+i).innerText=="Start")
                var userans = "beginning";       
            else if(document.getElementById("a1").checked)
                var userans = "a1";
            else if(document.getElementById("a2").checked)
                var userans = "a2";
            else if(document.getElementById("a3").checked)
                var userans = "a3";     
            else if(document.getElementById("a4").checked)
                var userans = "a4";
            else
                var userans= "n/a";


            userlist.push(userans);
                
            document.querySelector(".texts").innerHTML= quizList[i-1];
            document.querySelector(".b"+i).innerHTML="next";     
            changeData.classList.add("b"+x);
            changeData.classList.remove("b"+i);

            console.log(userlist)
            if(i==6){
                for(let j=1;j<6;j++){
                    if(quizans[j]==userlist[j]){
                        final.push("Question "+j+" is correct")
                        
                    }
                    else{
                        final.push("Question "+j+" is wrong")
                        
                    }
                }
                document.querySelector(".texts").innerHTML=(final[0] +"<br>" +final[1]+ "<br>" +final[2] +"<br>" +final[3]+ "<br>"+ final[4]);
                
            }
            return;
            }
        }
}
    
changeData.addEventListener("click",buttonFunc);