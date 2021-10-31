// After form loads focus will go to User id field.
function firstfocus()
{
    var uid = document.getElementById("fname").focus();
    return true;
}

// This function will validate Name.
function fname_validation()
{ 
    var uname = document.getElementById("fname");
    var letters = /^[A-Za-z ]+$/;
    if(uname.value.match(letters)) {
        // Clear error message and focus goes to next field i.e. Address.
        document.getElementById("fname_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("fname_error").innerHTML = ' ** First name must have alphabet characters only';
        return false;
    }
}

function lname_validation()
{ 
    var uname = document.getElementById("lname");
    var letters = /^[A-Za-z ]+$/;
    if(uname.value.match(letters)) {
        // Clear error message and focus goes to next field i.e. Address.
        document.getElementById("lname_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("lname_error").innerHTML = ' ** First name must have alphabet characters only';
        return false;
    }
}

// This function will validate Address.
function address_validation()
{ 
    var uadd = document.getElementById("address");
    var letters = /^[0-9a-zA-Z ]+$/;
    if(uadd.value.match(letters)) {
        // Clear error field and focus goes to next field i.e. Country.
        document.getElementById("address_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("address_error").innerHTML = ' ** Address must have alphanumeric characters only';
        return false;
    }
}

// city
function city_validation()
{ 
    var uname = document.getElementById("city");
    var letters = /^[A-Za-z ]+$/;
    if(uname.value.match(letters)) {
        // Clear error message and focus goes to next field i.e. Address.
        document.getElementById("city_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("city_error").innerHTML = ' ** City name must have alphabet characters only';
        return false;
    }
}

// state
function state_validation(mx)
{
    var state = document.getElementById("state");
    var state_len = state.value.length;
    if (state_len == mx)
    {
        //Not sure if this is the best way to do this but it works
        var state = document.getElementById("state");
        var letters = /^[A-Za-z ]+$/;
        if(state.value.match(letters)) {
            // Clear error message and focus goes to next field i.e. Address.
            document.getElementById("state_error").innerHTML = '';
            return true;
        }
        else {
            document.getElementById("state_error").innerHTML = ' ** State name must have alphabet characters only AND be two letters';
            return false;
        }
    }
    else {
    document.getElementById("state_error").innerHTML = ' ** State name must have alphabet characters only AND be two letters';
    return false;
    }
}

// This function will validate ZIP Code.
function zip_validation()
{ 
    var uzip = document.getElementById("zip");
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)) {
        // Clear error message and focus goes to next field i.e. email.
        document.getElementById("zip_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("zip_error").innerHTML = ' ** ZIP code must have numeric characters only';
        return false;
    }
}

// This function will validate Email.
function email_validation()
{
    var uemail = document.getElementById("email");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)) {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("email_error").innerHTML = " ** Please enter a valid email address";
        return false;
    }
} 

// This function will validate Password.
function passid_validation(mx,my)
{
    var passid = document.getElementById("password");
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx)
    {
        document.getElementById("password_error").innerHTML = " ** Password should not be empty / length must be at least 6 characters";
        passid.focus();
        return false;
    }
    else {
    var letters = /^[0-9a-zA-Z ]+$/;
    if(passid.value.match(letters)) {
        // Clear error message and focus goes to next field i.e. Address.
        document.getElementById("password_error").innerHTML = '';
        return true;
    }
    else {
        document.getElementById("password_error").innerHTML = ' ** Password must have numbers and letters characters only';
        return false;
    }
    // Clear error div and focus goes to next field i.e. Name.
    document.getElementById("passid_error").innerHTML = "";
    return true;
    }
}

// This function will validate all fields.
function ValidateForm()
{
    var formPassed = true;
    if(!fname_validation()) formPassed=false;
    if(!lname_validation()) formPassed=false;
    if(!address_validation()) formPassed=false;
    if(!city_validation()) formPassed=false;
    if(!state_validation(2)) formPassed=false;
    if(!zip_validation()) formPassed=false;
    if(!email_validation()) formPassed=false;
    if(!passid_validation(6,99)) formPassed=false;

    if(formPassed) {
        alert('Form submitted successfully');
        document.getElementById("submit_error").innerHTML = "";
    }
    else {
        document.getElementById("submit_error").innerHTML = "Please fill out all fields correctly before submitting";
    }

} 