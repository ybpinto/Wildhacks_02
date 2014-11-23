$(document).ready(function() {

  counter = 1;
  obj = "#opt" + counter + "id";

   $(obj).keyup(function(e) {
    
    console.log(e);
    console.log("#opt" + counter + "id");

    if (e.which == 13) { // if enter is pressed
      
      console.log("etr fired");
      counter++; 

      str = "<div class=\"option-entry\"id=\"opt" + counter + "\"><input class=\"option-field\" type=\"text\" id=\"opt" + counter + "id\"></input></div>";
      $("#main-content").append(str); //add another text box, shortcut instead of having an add button
      $("#opt" + counter + "id").focus();

      obj = "#opt" + counter + "id";
    } 
    else if (e.which == 8 && $("#opt" + counter + "id").text() == "") { // if backspace is pressed and last box is empty
    
      console.log("bs fired");

      $("#opt" + counter).remove(); // remove box
      counter--; // decrement counter

      obj = "#opt" + counter + "id";
    }

  })

})