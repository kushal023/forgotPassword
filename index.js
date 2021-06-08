function myfun(){
    var a=document.getElementById("passwords").value;
    var b=document.getElementById("passwordss").value;
    if(a==""){
        document.getElementById("messages").innerHTML="Please Fill Password";
        return false;
    }
    if(a.length>8){
        document.getElementById("messages").innerHTML="Password length must be less than 8";
        return false;
    }
    if(a!=b){
        document.getElementById("messagess").innerHTML="Passwords do not match.";
        return false;
    }
    if(a==b){
        document.getElementById("resetpass").addEventListener("click", function(){
            document.getElementsByClassName("popup")[0].classList.add("active");
        });
    }
    
}

document.getElementById("open-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
   
  document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });
