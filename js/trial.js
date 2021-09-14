



// //(checkValidName())&&(checkValidPass())&&(checkValidPass2())&&(checkEmail())

var flag=[];
var regexArr=[/^[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)$/,/^[a-zA-Z0-9_\-\.]+\@[a-z.]+(\.com)?$/,/.{8,20}/];
var pass=password1.value;
var val;
let sum=0;

function validReg(){

    for(let x=0;x<warn.length;x++){

        if(x==0){val=name1.value;}
        else if(x==1){val=email.value;}
        else if(x==2){val=password1.value;}
        else if(x==3){val=password2.value;}
    
        if(x==3){
            if(val!=pass || val==""){
                flag[3]=1;
                warn[x].classList.remove("d-none");
                inputs[x].classList.add("is-invalid");
                inputs[x].classList.remove("is-valid");
            }
            else{
                flag[3]=0;
                warn[x].classList.add("d-none");
                inputs[x].classList.add("is-valid");
                inputs[x].classList.remove("is-invalid");
            }
        }

        else if(x==0||x==1||x==2){
            if(!regexArr[x].test(val) || val==""){
                
                flag[x]=1;
                warn[x].classList.remove("d-none");
                inputs[x].classList.add("is-invalid");
                inputs[x].classList.remove("is-valid");
            }
            else{
                flag[x]=0;
                warn[x].classList.add("d-none");
                inputs[x].classList.add("is-valid");
                inputs[x].classList.remove("is-invalid");
                
            }
        }
            

    }

    for(let y=0;y<flag.length;y++){
        
        if(flag[y]==0){
            sum++;
        }
        
    }

    if (sum==flag.length){
        submit.removeAttribute("disabled");

    }
    else {
        submit.setAttribute("disabled","disabled");
        
    }

}

validReg();