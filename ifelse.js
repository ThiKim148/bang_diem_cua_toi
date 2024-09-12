function myFunction() {
    var today = parseInt(document.getElementById("day").value);
    // var greeting;
    // if (number == 0) {
    //     greeting = "ban duoc 0 diem";
    //     document.getElementById("demo").style.color="red";

    // } else if (number > 0) {
    //     greeting = "la so duong";
    //     document.getElementById("demo").style.color="green";
    
    // }else {
    //     greeting = "la so am";
    //     document.getElementById("demo").style.color="yellow";
    // }
    // document.getElementById("demo").innerHTML=greeting;


    var day;
        switch(today) {
            case 1:
                day = "Monday"
                break;
            case 2:
                day = "Tuesday"
                break;
            case 3:
                day = "Wed"
                break;
            case 4:
                day = "Thus"
                break;
            case 5:
                day = "Fri"
                break;
            case 6:
                day = "Sat"
                break;
            case 7:
                day = "Sun"
                break;
        }
        document.getElementById("today").innerHTML=day;

    
    }

