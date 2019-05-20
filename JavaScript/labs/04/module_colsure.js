var timer = null;  // stores ID of interval timer

function delayMsg2() {
    if (timer == null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
}

var rubyTimer = (function () {
    if (timer == null) {
        timer = setInterval(rudy, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }

    function rudy() {   // called each time the timer goes off
        document.getElementById("output").innerHTML += " Rudy!";
    }
});


var accountModule = (function () {
    var accountName = "";
    var deposit = 1;

    function getName() {
        return accountName;
    }

    function getDeposit() {
        return deposit;
    }


    return {
        createAccount: function (accountName, deposit) {
            this.accountName = accountName;
            this.deposit = deposit;
        },
        print : function(){
            return "Account name : " + this.accountName + "    Balance : " + this.deposit;
        }
    };
    
});


window.onload = function () {
    var form = document.getElementById("form");
    var textArea = document.getElementById("textArea");
    var accountInfoList = [];
    var addAcc;

    form.onsubmit = submit;

    function submit() {
        var name = document.getElementById("accountName").value;
        var balance = document.getElementById("deposit").value;

        addAcc = accountModule();
        addAcc.createAccount(name , balance);
        accountInfoList.push(addAcc);

        var showAccs = "";
        for (var i = 0; i < accountInfoList.length; i++) {
            showAccs += accountInfoList[i].print() + "\n";
        }
        textArea.value = showAccs;
        form.reset();
        return false;
    }
};