function myFunction() {
    var s1 = parseFloat(document.getElementById("semester1").value);
    var s2 = parseFloat(document.getElementById("semester2").value);
    var year = parseInt(document.getElementById("year").value);
    var sum;
    var XL;

    switch(year) {
        case 1:
            sum = (s1+s2)/2;
            break;
        case 2:
            sum = (s1+s2) * 2 /4;
            break;
        case 3:
            sum = (s1+s2)*3 /7;
            break;
        default:
            sum = 0;
    }
    document.getElementById("sum").value = sum.toFixed(2);

    if(sum >= 8.5) {
        XL = "Hoc sinh gioi";
        document.getElementById("kq").style.color="red";
    }

    else if(sum >=6.5 ) {
        XL = "Hoc sinh kha";
        document.getElementById("kq").style.color="green";
    }

    else  {
        XL = "Hoc sinh trung binh";
        document.getElementById("kq").style.color="yellow";
        
    }

    document.getElementById("kq").innerHTML=XL;
    // document.getElementById("kq").style.fontSize="40px";
    
}