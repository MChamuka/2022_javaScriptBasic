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

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);
}
const add_smg=function(){
    original.innerHTML='<div class="buy_block" id="id3a"><img src="uzi.jpg"></br> UZI</div><div class="buy_block" id="id3b"><img src="mp40.jpg"></br> MP 40</div> <br> <button id="button_prev"> << previous </button>';

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);
}
const add_lmg=function(){
    original.innerHTML='<div class="buy_block" id="id4a"><img src="lewis.jpg"></br> Lewis </div><div class="buy_block" id="id4b"><img src="stoner63.jpg"></br> Stoner 63</div> <br> <button id="button_prev"> << previous </button>';

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);
}
const add_sniper=function(){
    original.innerHTML='<div class="buy_block" id="id5a"><img src="svd.jpg"></br> SVD</div> <div class="buy_block" id="id5b"><img src="sr25.jpg"></br> SR 25</div><br> <button id="button_prev"> << previous </button>';

    const prev=document.querySelector("#button_prev");
    prev.addEventListener("click",prev_click);
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
handgun.addEventListener("click",add_handgun);
rifle.addEventListener("click",add_rifle);
smg.addEventListener("click",add_smg);
lmg.addEventListener("click",add_lmg);
sniper.addEventListener("click",add_sniper);