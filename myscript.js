$(document).ready(()=>{
  var a=0;
$("#incre").click(()=>{
  if(a<10){
    a=a+1;
    colorchange(a);
    $("#decre").prop('disabled', false);
  }else{
    $("#incre").prop('disabled', true);
  }
  $("#count").text(a)
})
$("#decre").click(()=>{
  if(a>0){
    a=a-1;
    colorchange(a);
      $("#incre").prop('disabled', false);
  }else{
    $("#decre").prop('disabled', true);
  }
  $("#count").text(a)
})
$("#reset").click(()=>{
  a=0;
  colorchange(a);
  $("#count").text(a)
})
})
function colorchange(b){
  if(b%2!=0){
    $("#mydiv").removeClass("bg-primary");
    $("#mydiv").addClass("bg-dark");
    $("#headings").removeClass("text-dark");
    $("#headings").addClass("text-light");
    $("#count").addClass("text-danger");
  }else{
    $("#mydiv").removeClass("bg-dark");
    $("#mydiv").addClass("bg-primary");
    $("#headings").removeClass("text-light");
    $("#headings").addClass("text-dark");
    $("#count").removeClass("text-danger");
  }
}
