

  function substract(hours){
    var result=document.getElementById("value-show");
    var hours=hours.parentElement.parentElement.children[1].children[0].value;
    var total=18400
    var newResult=total-hours;
    result. innerHTML = newResult;
    }
  
let selection =document.querySelector('select');
selection.addEventListener('change',function(){
  var option= selection.options[selection.selectedIndex].text;
  // console.log(option);
  if (option != '*'){
    document.getElementById('column').style.backgroundColor = "#FFD8D8";
  }
  else{
    document.getElementById('column').style.backgroundColor = "#B6E0FF";
  }
})