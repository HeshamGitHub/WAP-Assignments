window.onload = function() {
    document.getElementById("biggerBtn").onclick = fontTimer
    document.getElementById("blingBox").onchange = chechBoxHandler
    document.getElementById("malkovitchBtn").onclick = malkcheckHandler
    document.getElementById("igpayBtn").onclick = piggify

};



function fontTimer() {
    setInterval(btnHandler, 500);
}

var iterations = 5;

function btnHandler() {
    if (iterations > 0) {
        var txtArea = document.getElementById("txtArea");
        var style = window.getComputedStyle(txtArea, null).getPropertyValue('font-size');
        var fontSize = parseInt(style) + 2;
        document.getElementById("txtArea").style.fontSize = fontSize + "pt";
        iterations--;
    } else {
        clearInterval(timer)
    }
    //document.getElementById("txtArea").style.fontSize = "24pt";
    // alert("Hello, world!");
}

function chechBoxHandler() {
    var page = document.getElementById("page");
    var txtArea = document.getElementById("txtArea");
    var checkBox = document.getElementById("blingBox");
    if (checkBox.checked === true) {
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        page.style.backgroundImage = "url(\"http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg\")";
    } else {
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "";
        txtArea.style.textDecoration = "none";
        page.style.backgroundImage = "";
    }
}

function malkcheckHandler() {
    var txtArea = document.getElementById("txtArea");
    var str = txtArea.value.split(" ");
    var txtValue = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = "Malkovich";
            txtValue = str.join(" ");
        }
    }
    document.getElementById("txtArea").value = txtValue;
}

function piggify() {
    var txtArea = document.getElementById("txtArea");
    var str = txtArea.value.toLowerCase();
    var st = "";
    for (var j = 0; j < str.length; j++) {
        if ("aeiouAEIOU".indexOf(str.charAt(j)) !== -1) {
            st = st + str.substr(j, str.length);
            st = st + str.substr(0, j) + "ay";
            break;
        }
    }
    document.getElementById('txtArea').value = st;
}