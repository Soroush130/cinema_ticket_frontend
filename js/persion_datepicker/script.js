jalaliDatepicker.startWatch({
  minDate: "attr",
  maxDate: "attr"
}); 

/* Below is a js demo | you don't need to use */
setTimeout(function(){
  var elm=document.getElementById("searchInputFilmDate");
  // elm.focus();
  jalaliDatepicker.hide();
  jalaliDatepicker.show(elm);
}, 1000);