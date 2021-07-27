function openCloseDropDown(){
    document.getElementById("JapaneseRelatedLinks").classList.toggle("showContent");
  }

  window.onclick=function(event){
    if(!event.target.matches(".dropDownButton")){
      var dropDownLinks=document.getElementsByClassName("dropDownContent");
      for(var i=0;i<dropDownLinks.length;i++){
        if(dropDownLinks[i].classList.contains('showContent')){
          dropDownLinks[i].classList.remove('showContent');
        }
      }
    }
  };

 function lightLightModeToggle(){
   if(document.body.classList.contains("lightMode")){
     document.body.classList.remove("lightMode");
   }else{
    document.body.classList.add("lightMode");
   }
  }
  document.getElementById("submitButton").onclick=function(){
    calculateTip();
};

