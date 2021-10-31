$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventDefault();
    $("#quiz-hide").hide();
    const starTrek=$("input:radio[name=startrek]:checked").val();
    const food=$("input:radio[name=food]:checked").val();
    const transport=$("input:radio[name=transport]:checked").val();
    const siblings=$("input:radio[name=siblings]:checked").val();
    const music=$("input:radio[name=lofi]:checked").val();
    let total=0;

    if (starTrek === "theog"){
      total += 1;
    } else if (starTrek === "TNG"){
      total += 2;
    }else if (starTrek === "voy"){
      total += 3;
    }else if (starTrek === "Ds9"){
      total += 4;
    }else if (starTrek === "disco"){
      total += 5;
    };

    if (food === "hotdog"){
      total += 1;
    }else if (food === "spaghetti"){
      total += 2;
    }else if (food === "sandwich"){
      total += 3;
    }else if (food === "ramen"){
      total += 4;
    }else if (food === "fish"){
      total += 5;
    };

    if (transport === "bus"){
      total += 1;
    }else if (transport=== "car"){
      total += 2;
    }else if (transport === "walk"){
      total += 3;
    }else if (transport === "bike"){
      total += 4;
    }else if (transport === "horse"){
      total += 5;
    };

    if (siblings === "zero"){
      total += 1;
    }else if (siblings === "one"){
      total += 2;
    }else if (siblings === "two"){
      total += 3;
    }else if (siblings === "three"){
      total += 4;
    }else if (siblings === "four"){
      total += 5;
    };

    if (music === "jazz"){
      total += 1;
    }else if (music === "coffee"){
      total += 2;
    }else if (music === "hiphop"){
      total += 3;
    }else if (music === "game"){
      total += 4;
    }else if (music === "ghibli"){
      total += 5;
    };

    if (total <= 6) {
      $("#c").show();
    }else if (total <= 11) {
      $("#javascript").show();
    }else if (total <= 16) {
      $("#python").show();
    }else if (total <= 21) {
      $("#html").show();
    }else {
      $("#ruby").show();
    };
  });
});