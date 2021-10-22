$(document).ready(function(){
  $("#quiz").submit(function(event){
    event.preventdefault();
    $("#hide-quiz").hide().
    const startrek=$("input:radio[name=startrek]:checked").val();
    const food=$("input:radio[name=food]:checked").val();
    const transport=$("input:radio[name=transport]:checked").val();
    const siblings=$("input:radio[name=sibings]:checked").val();
    const lofi=("input:radio[name=lofi]:checked").val();
    let total=0;

    if (startrek === "theog"){
      total += 1;
    } else if (startrek === "TNG"){
      total += 2;
    }else if (startrek === "voy"){
      total += 3;
    }else if (startrek === "Ds9"){
      total += 4;
    }else if (startrek === "discovery"){
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

    if (lofi === "jazz"){
      total += 1;
    }else if (lofi === "coffee"){
      total += 2;
    }else if (lofi === "hiphop"){
      total += 3;
    }else if (lofi === "game"){
      total += 4;
    }else if (lofi === "ghibli"){
      total += 5;
    };

  });
});