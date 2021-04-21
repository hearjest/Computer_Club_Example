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
  }

  function darkLightModeToggle(){
    document.body.classList.toggle("darkMode");
    document.getElementById("darkModeButton").classList.toggle("darkMode");
    var toggleDropDowns =document.getElementsByClassName("dropDownButton");
    var temp = document.getElementsByClassName("link");
    for(var i=0;i<temp.length;i++){
      if(temp[i].classList.contains("darkMode")){
        temp[i].classList.remove("darkMode");
      }else{
        temp[i].classList.add("darkMode");
      }
    }

    for(var i=0;i<toggleDropDowns.length;i++){
      if(toggleDropDowns[i].classList.contains("darkMode")){
        toggleDropDowns[i].classList.remove("darkMode");
      }else{
        toggleDropDowns[i].classList.add("darkMode");
      }
    }
  }