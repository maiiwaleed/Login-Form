let name1 = document.getElementById("nameInput");
let email = document.getElementById("emailInput");
let password1 = document.getElementById("passInput");
let password2 = document.getElementById("repassInput");
let overlay = document.querySelector(".overlay");
let nameLabel= document.getElementById("nameLabel");
let pass2Label= document.getElementById("pass2Label");
let upMsg= document.getElementById("upMsg");
let inMsg= document.getElementById("inMsg");

let logOut=document.getElementById("logOut");

let correctUp = document.getElementById("correctSignUp");
let repeatedtUp = document.getElementById("repeatedSignUp");
let wrongIn = document.getElementById("wrongSignIn");

let signIn = document.querySelector(".inLink");
let signUp = document.querySelector("button");
let signUp2 = document.querySelector(".upLink");

let content=document.querySelector(".content");
let loginMsg=document.querySelector(".content1");
let warn=document.getElementsByClassName("alert");
let inputs=document.querySelectorAll("input");
let submit = document.querySelector(".submit");

let userInfo = [];


if(JSON.parse(localStorage.getItem("usersData"))!=null){
    userInfo = JSON.parse(localStorage.getItem("usersData"));
}

//==============validation=====================

function checkValidName(){
    var val=name1.value;
    let flag1;
    var regEx=/^[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)$/;
    if(!regEx.test(val) ||val==""){
        warn[0].classList.remove("d-none");
        name1.classList.add("is-invalid")
        name1.classList.remove("is-valid")
        //submit.classList.add("disabled");
        flag1=1;
    }
    else{
        warn[0].classList.add("d-none");
        name1.classList.add("is-valid")
        name1.classList.remove("is-invalid")
                    submit.disabled = true;

        flag1=0;
    }
    return flag1;
}

//==================================================
function checkEmail(){
    var val=email.value;
    let flag4
    var regEx=/^([a-zA-Z0-9\-]+\@((gmail\.com)|(yahoo\.com)|(msn\.com)))$/;

    //^[a-zA-Z0-9_\-\.]+\@[a-z.]+(\.com)?$

    if(!regEx.test(val) ||val==""){
        warn[1].classList.remove("d-none");
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        //submit.classList.add("disabled");
        flag4=1;
    }
    else{
        warn[1].classList.add("d-none");
        email.classList.add("is-valid")
        email.classList.remove("is-invalid")
                    submit.disabled = true;

        flag4=0;
    }

   
    return flag4;
}

//=====================================================
let passCheck;

    function checkValidPass(){
        var val=password1.value;
        let flag2;
        passCheck=password1.value;
        var regEx=/.{8,20}/;
        if(!regEx.test(val) ||val==""){
            warn[2].classList.remove("d-none");
            password1.classList.add("is-invalid")
            password1.classList.remove("is-valid")
            //submit.classList.add("disabled");
            flag2=1;
        }
        else{
            warn[2].classList.add("d-none");
            password1.classList.add("is-valid")
            password1.classList.remove("is-invalid")
                        submit.disabled = true;

            flag2=0;
        }
        return flag2;
    }

    //============================
    function checkValidPass2(){
        var val=password2.value; 
        let flag3;
        var regEx=passCheck;
        if(! (regEx==val) ||val=="" ){
            warn[3].classList.remove("d-none");
            password2.classList.add("is-invalid")
            password2.classList.remove("is-valid")
            //submit.classList.add("disabled");
            flag3=1;
        }
        else{
            warn[3].classList.add("d-none");
            password2.classList.add("is-valid")
            password2.classList.remove("is-invalid")
                        submit.disabled = true;

            flag3=0;
        }
        return flag3;
    }   


//console.log(warn)
function checkValid(){
    let f1;
    let f2;
    let f3;
    let f4;

 name1.onkeyup=function(){
        f1=checkValidName();
        console.log(f1)
        
        if( (f1==0)&&(f2==0)&&(f3==0)&&(f4==0) ){
            submit.removeAttribute("disabled")

        }
        else{
            submit.disabled = true;
            //console.log(f1)

        }
    }
    password1.onkeyup=function(){
        f2=checkValidPass();
        console.log(f2)
        
        if( (f1==0)&&(f2==0)&&(f3==0)&&(f4==0) ){
            submit.removeAttribute("disabled")

        }
        else{
            submit.disabled = true;
            //console.log(f1)

        }
    }
    password2.onkeyup=function(){
       f3= checkValidPass2();
       console.log(f3)
       
       if( (f1==0)&&(f2==0)&&(f3==0)&&(f4==0) ){
        submit.removeAttribute("disabled")

    }
    else{
        submit.disabled = true;
        //console.log(f1)

    }
    }
    email.onkeyup=function(){
        f4=checkEmail();
        console.log(f4)

         //repeated email
     for(let i=0;i<userInfo.length;i++){
        if(userInfo[i].email==email.value){  
                repeatedtUp.classList.replace("d-block","d-none");
                
                submit.disabled = true;  
            }
        //else flag=0;
    }
        
    if( (f1==0)&&(f2==0)&&(f3==0)&&(f4==0) ){
        submit.removeAttribute("disabled")

    }
    else{
        submit.disabled = true;
        //console.log(f1)

    }
    }

 
   

}

checkValid()



//=========================================================

signUp.addEventListener("click",check);

function check(){
    if(signUp.innerHTML=="log in"){

        logIn2()
        //valid login
    }
    else if(signUp.innerHTML=="sign-up"){
        register()
        //valid register
       
    }
}

function register(){

    let nameInput ;
    let emailInput ;
    let passInput ;
    let  repassInput;
    nameInput = name1.value;
    emailInput = email.value;
    passInput = password1.value;
    repassInput = password2.value;
    let user = {
        name:nameInput,
        email:emailInput,
        password:passInput,
        repass:repassInput
    };


    if(nameInput==""||emailInput==""||passInput==""||repassInput==""){
        submit.disabled = true; 
    }
    else{
   
           // correctUp.classList.replace("d-block","d-none");
            correctUp.classList.remove("d-none")
            correctUp.classList.add("d-block")
            //repeatedtUp.classList.replace("d-none","d-block");
   
            userInfo.push(user);

            localStorage.setItem("usersData",JSON.stringify(userInfo));
            clear()
            
            password2.classList.remove("is-valid")
            name1.classList.remove("is-valid")
            password1.classList.remove("is-valid")
            email.classList.remove("is-valid")
            submit.disabled = true; 

        }


    }
   

    



function clear(){
    name1.value='';
    email.value='';
    password2.value='';
    password1.value='';
}

//====================================================

signIn.addEventListener("click", logIn);

function logIn(){

    name1.classList.add("d-none");
    password2.classList.add("d-none");
    nameLabel.classList.add("d-none");
    pass2Label.classList.add("d-none");
    inMsg.classList.replace("d-block","d-none");
    upMsg.classList.replace("d-none","d-block");
    correctUp.classList.remove("d-block")
    correctUp.classList.add("d-none")

    signUp.innerHTML="log in";
   
}

function logIn2(){

    let emailInput ;
    let passInput ;
   
    emailInput = email.value;
    passInput = password1.value;
  
    for (let i=0; i<userInfo.length ; i++){

        if( (emailInput===userInfo[i].email)  &&  (passInput===userInfo[i].password))
        {
            overlay.classList.remove("d-flex")
            overlay.classList.add("d-none")
            content.style.cssText="filter: blur(0px);";
            wrongIn.classList.replace("d-block","d-none");

            loginMsg.innerHTML=`hi ${userInfo[i].name}`
            
            break;
        }
        else{
            wrongIn.classList.replace("d-none","d-block");
        }

    }
    clear();
    password1.classList.remove("is-valid")
    email.classList.remove("is-valid")
}

//======================================================

signUp2.addEventListener("click", signUpFun);

function signUpFun(){

    name1.classList.remove("d-none");
    password2.classList.remove("d-none");
    nameLabel.classList.remove("d-none");
    pass2Label.classList.remove("d-none");
    inMsg.classList.replace("d-none","d-block");
    upMsg.classList.replace("d-block","d-none");

    signUp.innerHTML="sign-up";

}
 
//========================================================

logOut.addEventListener("click",out);

function out(){
    overlay.classList.remove("d-none");
    overlay.classList.add("d-flex");
    content.style.cssText="filter: blur(5px);";
    loginMsg.innerHTML=``


}

//=========================AJAX=============================
