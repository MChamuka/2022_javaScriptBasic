const original= document.querySelector(".buy_allblock");
const first_content=original.innerHTML;

const cart_list=[];
const trash_list=[];

handgun = document.querySelector("#id1");
rifle= document.querySelector("#id2");
smg= document.querySelector("#id3");
lmg= document.querySelector("#id4");
sniper= document.querySelector("#id5");

id2a = document.querySelector("#id2a");
id2b = document.querySelector("#id2b");

id3a = document.querySelector("#id3a");
id3b = document.querySelector("#id3b");

id4a = document.querySelector("#id4a");
id4b = document.querySelector("#id4b");

id5a = document.querySelector("#id5a");
id5b = document.querySelector("#id5b");

cart = document.querySelector(".check_block ol");

const add_handgun= function(){
    original.innerHTML='<div class="buy_block" id="id1a"><img src="coltpython.jpg"></br> Colt python</div> <div class="buy_block" id="id1b"><img src="ruger.jpg"></br> Ruger LCR</div> <br> <button id="button_prev"> << previous </button>';
    
    id1a = document.querySelector("#id1a");
    id1b = document.querySelector("#id1b");
    
    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);

    id1a.addEventListener("click",id1a_func);
    id1b.addEventListener("click",id1b_func);
}
const add_rifle=function(){
    original.innerHTML='<div class="buy_block" id="id2a"><img src="ak47.jpg"></br> AK 47</div> <div class="buy_block" id="id2b"><img src="akm.jpg"></br> AKM</div><br> <button id="button_prev"> << previous </button>';

    id2a = document.querySelector("#id2a");
    id2b = document.querySelector("#id2b");

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);

    id2a.addEventListener("click",id2a_func);
    id2b.addEventListener("click",id2b_func);
}
const add_smg=function(){
    original.innerHTML='<div class="buy_block" id="id3a"><img src="uzi.jpg"></br> UZI</div><div class="buy_block" id="id3b"><img src="mp40.jpg"></br> MP 40</div> <br> <button id="button_prev"> << previous </button>';

    id3a = document.querySelector("#id3a");
    id3b = document.querySelector("#id3b");

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);

    id3a.addEventListener("click",id3a_func);
    id3b.addEventListener("click",id3b_func);
}
const add_lmg=function(){
    original.innerHTML='<div class="buy_block" id="id4a"><img src="lewis.jpg"></br> Lewis </div><div class="buy_block" id="id4b"><img src="stoner63.jpg"></br> Stoner 63</div> <br> <button id="button_prev"> << previous </button>';

    id4a = document.querySelector("#id4a");
    id4b = document.querySelector("#id4b");

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);

    id4a.addEventListener("click",id4a_func);
    id4b.addEventListener("click",id4b_func);
}
const add_sniper=function(){
    original.innerHTML='<div class="buy_block" id="id5a"><img src="svd.jpg"></br> SVD</div> <div class="buy_block" id="id5b"><img src="sr25.jpg"></br> SR 25</div><br> <button id="button_prev"> << previous </button>';

    id5a = document.querySelector("#id5a");
    id5b = document.querySelector("#id5b");

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);

    id5a.addEventListener("click",id5a_func);
    id5b.addEventListener("click",id5b_func);
}
const id1a_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("Colt Python" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("Colt Python");
        trash_list.push("<div id='trash1a'><img src='trash.png'></div>");
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+ "</li>"
    } 
    cart.innerHTML=cart_content;
    select_trash1a=document.querySelector("#trash1a");
    }
    select_trash1a.addEventListener("click",trash1a_func);
}
const id1b_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("Ruger LCR" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("Ruger LCR");
        trash_list.push("<div id='trash1b'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash1b=document.querySelector("#trash1b");
    }
    select_trash1b.addEventListener("click",trash1b_func);
}
const id2a_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("AK 47" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("AK 47");
        trash_list.push("<div id='trash2a'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash1b=document.querySelector("#trash2a");
    }
    select_trash1b.addEventListener("click",trash2a_func);
}
const id2b_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("AKM" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("AKM");
        trash_list.push("<div id='trash2b'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash2b=document.querySelector("#trash2b");
    }
    select_trash2b.addEventListener("click",trash2b_func);
}
const id3a_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("UZI" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("UZI");
        trash_list.push("<div id='trash3a'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash3a=document.querySelector("#trash3a");
    }
    select_trash3a.addEventListener("click",trash3a_func);
}
const id3b_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("MP 40" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("MP 40");
        trash_list.push("<div id='trash3b'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash3b=document.querySelector("#trash3b");
    }
    select_trash3b.addEventListener("click",trash3b_func);
}
const id4a_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("Lewis" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("Lewis");
        trash_list.push("<div id='trash4a'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash4a=document.querySelector("#trash4a");
    }
    select_trash4a.addEventListener("click",trash4a_func);
}
const id4b_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("Stoner 63" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("Stoner 63");
        trash_list.push("<div id='trash4b'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash4b=document.querySelector("#trash4b");
    }
    select_trash4b.addEventListener("click",trash4b_func);
}
const id5a_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("SVD" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("SVD");
        trash_list.push("<div id='trash5a'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash5a=document.querySelector("#trash5a");
    }
    select_trash5a.addEventListener("click",trash5a_func);
}
const id5b_func =function(){
    x=0;
    for(i=0; i<cart_list.length;i++ ){
        if("SR 25" == cart_list[i]){
            x=1;
        }
    }
    if(x==0){
        cart_list.push("SR 25");
        trash_list.push("<div id='trash5b'><img src='trash.png'></div>")
        cart_content="";

        for(i=0;i<cart_list.length;i++){
            cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
        cart.innerHTML=cart_content;
        select_trash5b=document.querySelector("#trash5b");
    }
    select_trash5b.addEventListener("click",trash5b_func);
}
const prev_click=function(){
    original.innerHTML=first_content;

    handgun = document.querySelector("#id1");
    rifle = document.querySelector("#id2");
    smg = document.querySelector("#id3");
    lmg = document.querySelector("#id4");
    sniper = document.querySelector("#id5");
    
    handgun.addEventListener("click", add_handgun);
    rifle.addEventListener("click",add_rifle);
    smg.addEventListener("click",add_smg);
    lmg.addEventListener("click",add_lmg);
    sniper.addEventListener("click",add_sniper);
}
const trash1a_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="Colt Python"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash1b_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="Ruger LCR"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash2a_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="AK 47"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash2b_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="AKM"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash3a_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="UZI"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash3b_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="MP 40"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash4a_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="Lewis"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash4b_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="Stoner 63"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash5a_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="SVD"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
const trash5b_func=function(){
    for(i=0;i<cart_list.length;i++){
        if(cart_list[i]=="SR 25"){
            cart_list.splice(i,1);
            trash_list.splice(i,1);
        }
    }
    cart_content="";
    for(i=0;i<cart_list.length;i++){
        cart_content+= "<li>"+cart_list[i]+trash_list[i]+"</li>"
    } 
    cart.innerHTML=cart_content;
}
handgun.addEventListener("click",add_handgun);
rifle.addEventListener("click",add_rifle);
smg.addEventListener("click",add_smg);
lmg.addEventListener("click",add_lmg);
sniper.addEventListener("click",add_sniper);