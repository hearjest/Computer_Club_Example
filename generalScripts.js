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
    document.body.classList.toggle("lightMode");
    var toggleDropDowns =document.getElementsByClassName("dropDownButton");
    var temp = document.getElementsByClassName("link");
    for(var i=0;i<temp.length;i++){
      if(temp[i].classList.contains("lightMode")){
        temp[i].classList.remove("lightMode");
      }else{
        temp[i].classList.add("lightMode");
      }
    }

    for(i=0;i<toggleDropDowns.length;i++){
      if(toggleDropDowns[i].classList.contains("lightMode")){
        toggleDropDowns[i].classList.remove("lightMode");
      }else{
        toggleDropDowns[i].classList.add("lightMode");
      }
    }
  }