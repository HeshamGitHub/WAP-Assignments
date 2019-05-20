function test4() {
    x = 1;
    var a = 5;
    var b = 10;
    var c = function (a, b, c) {
        console.log(x);  //undefined
        console.log(a);  //8
        var f = function (a, b, c) {
            b = a;
            console.log(b);  // 8
            b = c;  //10
            var x = 5;
        }
        f(a, b, c);
        console.log(b);  //9
        var x = 10;
    }
    c(8, 9, 10);
    console.log(b);  //10
    console.log(x);  //1
}

function test5() {
    var x = 9;
    function myFunction() {
        return x * x;
    }
    console.log(myFunction()); //81
    x = 5;
    console.log(myFunction());  //25
}

function test6() {
    var foo = 1;
    function bar() {
        if (!foo) {
            var foo = 10;
        }
        alert(foo); // it will alert the value of 10;
    }
    bar();
}

function test7() {
    var add = (function () {
        var counter = 0;
        return {
            add: function () {
                counter += 1;
            },
            reset: function () {
                counter = 0;
            }
        };
    })();
}

function test8() {
    var make_adder = (function (num) {
        var counter = 0;
        return function () {
            counter += num;
            return counter;
        }
    });
}

function test9() {
    // ordinary Module
    var employee = (function () {
        var name;
        var age;
        var salary;

        var setName = function (newName) {
            name = newName;
        };
        var setAge = function (newAge) {
            age = newAge;
        };
        var setSalary = function (newSalary) {
            salary = newSalary;
        };

        var getAge = function () {
            return age;
        };
        var getName = function () {
            return name;
        };
        var getSalary = function () {
            return salary;
        };

        var increaseSalary = function (percentage) {
            salary = getSalary() * percentage;
        };

        var incrementAge = function () {
            age = getAge() + 1;
        };

        return {
            setAge: setAge,
            setSalary: setSalary,
            setName: setName,
            increaseSalary: increaseSalary,
            incrementAge: incrementAge
        };
    })();

    //Anonymous Object Literal Return
    var employee = (function () {
        var name;
        var age;
        var salary;

        var getAge = function () {
            return age;
        };
        var getName = function () {
            return name;
        };
        var getSalary = function () {
            return salary;
        };

        return {
            setName: function (newName) {
                name = newName;
            },
            setSalary: function (newSalary) {
                salary = newSalary;
            },
            setAge: function (newAge) {
                age = newAge;
            },
            increaseSalary: function (percentage) {
                salary = getSalary() * percentage;
            },
            incrementAge: function () {
                age = getAge() + 1;
            }
        };
    })();


    //Stacked Locally Scoped Object Literal
    var employee = (function () {
        var name;
        var age;
        var salary;

        var getAge = function () {
            return age;
        };
        var getName = function () {
            return name;
        };
        var getSalary = function () {
            return salary;
        };

        var myEmp = {
            setName: function (newName) {
                name = newName;
            },
            setSalary: function (newSalary) {
                salary = newSalary;
            },
            setAge: function (newAge) {
                age = newAge;
            },
            increaseSalary: function (percentage) {
                salary = getSalary() * percentage;
            },
            incrementAge: function () {
                age = getAge() + 1;
            }
        };
        return myEmp;
    })();

    employee.extension = function () {
        var address;

        var getAdddress = function () {
            return adderss;
        }
        var setAddress = function (newAddress) {
            address = newAddress;
        }

        return {
            getAdddress: getAdddress,
            setAddress: setAddress
        };
    };

    


}
// Scope A 
function XFunc() {
    // Scope B 
    function YFunc() {
        // Scope C 
    };
};

var func = (function XxxX(){
    return function(){
        console.log("Hello World");
    }
})();
func();



