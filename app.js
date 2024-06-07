// login page
let usertag = "Sakthi"
let pin = "1234"
let logintime
let list = document.getElementById("history")
let li

function check() {

    const user = "sakthi";
    const pass = "1234";
    const getuser = document.getElementById("username").value
    const getpass = document.getElementById("password").value

    if (user == getuser && pass == getpass) {

        alert("Login Sucessfully at" + Date())
        logintime = ("Login Sucessfully at " + Date())
        window.open('main-page.html')
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)

    }

    else if (user == getuser && pass != getpass) {

        alert("Incorrect Password" + "  " + Date())
        logintime = ("Incorrect Password " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)

    }

    else if (user != getuser && pass == getpass) {

        alert("Incorrect Username" + "  " + Date())
        logintime = ("Incorrect Username" + "  " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user != getuser && pass != getpass) {

        alert("username and Password are incorrect" + "  " + Date())
        logintime = ("username and Password are incorrect" + "  " + Date())
        li = document.createElement("li")
        li.textContent = logintime
        list.appendChild(li)
    }

    else if (user == null || pass == null) {
        alert("Enter a User name and Password to Login")
    }
}

// function history()
// {
//     window.open('login-history.html')
// }


// main-page.........>

document.getElementById("name-tag").textContent = "Hi," + usertag
let timings = new Date()
let ye = timings.getFullYear()
let mo = timings.getMonth() + 1
let da = timings.getDate()
let hr = timings.getHours()
let mi = timings.getMinutes()
let se = timings.getSeconds()
let maintime = da + "/" + mo + "/" + ye + " " + "[" + hr + ":" + mi + ":" + se + "]"
document.getElementById("time-tag").textContent = maintime


// Deposit............>

let amount = 50000
let deamount
let wiamount

function deposit() {
 
    deamount = parseInt(prompt("Enter a Amount to Deposit"))

    if(!deamount)
        {
            alert("Kindly Enter a Amount")
        }
        else{
            amount += deamount
            alert(" Amount " + "  " + deamount + "  " + "Sucessfully Deposited")
        }
    

}

//withdraw............>

function balance() {

    alert("Available Balance" + "  " + amount)

}

function withdrawl() {

    wiamount = parseInt(prompt("Enter a Amount to Withdrawl"))

    if (wiamount > amount) {
        alert("insufficient Balance")
    }
    else if(!wiamount) {
        alert("Enter an Amount")
    }
    else{
        amount -= wiamount
        alert("Amount" + "  " + wiamount + "  " + "Sucessfully Withdrawn")
    }


}

function exit() {
    window.close('main-page.html')
}

let oldpin
let newpin

function changepin() {

    oldpin = parseInt(prompt("Enter a Old pin to Verify"))

    if (oldpin == pin) {
        alert("Verify Completed")
        newpin = parseInt(prompt("Create a New Pin"))
        pin = newpin
    }
    else {
        alert("Enter a Correct old Pin verify")
    }
}

let tr
let ac

function transfer() {

    ac = parseInt(prompt("Enter a account number"))

    if (!ac) {
        alert("Please Enter account number")

    }
    else {

        tr = parseInt(prompt("Enter a Amount"))

        if (!tr) {
            alert("Please Enter a Amount")
        }
        else {
            amount -= tr
            alert("Entered Amount" + " " + tr + " " + "Successfully Transfered")
        }
    }
}
