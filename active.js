counter = 0;
ENTER = 13;
BACKSPACE = 8;

$('body').on('keydown','.option-field', function(e) {
  console.log("within function.");
  console.log(counter);

  console.log($("#opt" + counter.toString() + "id").val());

  if (e.which == ENTER) { // if enter is pressed

    console.log("etr fired");

    counter++; 
    var counterString = counter.toString();
    console.log("counter increase");
    console.log(counter);

    myDiv = document.createElement("div");  
    $(myDiv).addClass("option-entry");
    $(myDiv).attr('id', 'opt' + counterString);

    inp = document.createElement("input");
    $(inp).addClass("option-field");
    $(inp).attr('id', "opt" + counterString + "id");

    $(myDiv).append(inp);
    $("#main-content").append(myDiv);

    $("#opt" + counterString + "id").focus();

  } 
  else if (counter > 0 && $("#opt" + counter.toString() + "id").val() == "" && e.which == BACKSPACE) { // if backspace is pressed and last box is empty
  
    console.log("bs fired");

    var counterString = counter.toString();

    $("#opt" + counterString).remove(); // remove box
    console.log("#opt" + counter.toString() + "id");
    console.log("remove fired");
    counter--; // decrement counter
    console.log("counter decrease");
    console.log(counter);

    $("#opt" + counter.toString() + "id").focus();

  }
});

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#decision").click(function() {
  var strs = new Array();

  for (var i = 0; i <= counter; i++) {
    var text = $("#opt" + i.toString() + "id").val();
    strs.push(text);
    console.log(text);
  };

  var rand = getRandomInt(0, strs.length-1);
  console.log("randno: " + rand);
  var res = strs[rand];
  console.log("result: " + res);

  console.log(strs);

  $(".option-entry").fadeOut(25);
  $("#decision").fadeOut(25);
  $("#logo").fadeOut(25);

  $("#result-text").append(res);

  $("#goback").fadeIn(1200);
  $("#result").fadeIn(1200);

});

$("#goback").click(function() {
  for (var i = 1; i <= counter; i++) {
    $("#opt" + i.toString()).remove();
  };
  counter = 0;
  strs = [];
  $("#result-text").empty();

  $("#opt0id").val("");
  $(".option-entry").fadeIn(1200);
  $("#decision").fadeIn(1200);
  $("#logo").fadeIn(1200);

  $("#goback").fadeOut(25);
  $("#result").fadeOut(25);
});