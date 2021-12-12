function Generate() {
    /* needed to initialize the clipboard.JS script */
    new ClipboardJS('.btn');
    var ClaimantWorkedAs = document.getElementById("WorkedAsField").value;
    var ClaimantWorkedWith = document.getElementById("WorkedWithField").value;
    var ClaimantWorkTime = document.getElementById("HowLongField").value;
    var ClaimantCity = document.getElementById("CityField").value;
    /* End date */
    var ClaimantEndDate = new Date(document.getElementById("EndingField").value);
    console.log(ClaimantEndDate);
    /* Unfortunately because javascript is amazing, the day will be 1 day behind, because JS starts days of the month at 0, so we gotta fix that */
    ClaimantEndDate.setDate(ClaimantEndDate.getDate() + 1);
    console.log(ClaimantEndDate)
    /* Generate output */
    document.getElementById("FinalOutput").innerHTML = `Based upon the testimony the Administrative Law Judge finds as follows: 
    
    The claimant worked as a ` + ClaimantWorkedAs + ' with ' + ClaimantWorkedWith + ' for approximately ' + ClaimantWorkTime + ' in ' + ClaimantCity + ' ending on ' + ClaimantEndDate.toDateString();
    /* un-hide output */
    document.getElementById("output").style.display = "block";
}

function CopyGenerated() {
    /* We don't need to actually do any special functions to copy the text because we're using clipboard.JS, this function is purely to give off an alert */
    alert("Copied to clipboard!");
}