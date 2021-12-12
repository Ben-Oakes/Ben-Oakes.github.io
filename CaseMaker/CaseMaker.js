function Generate() {
    /* needed to initialize the clipboard.JS script */
    new ClipboardJS('.btn');
    var ClaimantWorkedAs = document.getElementById("WorkedAsField").value;
    var ClaimantWorkedWith = document.getElementById("WorkedWithField").value;
    var ClaimantWorkTime = document.getElementById("HowLongField").value;
    var ClaimantCity = document.getElementById("CityField").value;
    var ClaimantDocuments = document.getElementById("DocumentsCheckbox");
    var ClaimantDocumentsProper = '';
    var ClaimantStatus = document.getElementById("StatusSelect").value;
    var ClaimantReason = document.getElementById("DueToSelect").value;
    var ALJDecision = document.getElementById('DecisionSelect').value;
    var EligibilityStatus = document.getElementById('EligibilitySelect').value;

    /* Check if due to select is set to attendance, if so, add several blurbs about the attendance policy (can't just make it part of the value bc html won't let me multline that */
    if (ClaimantReason == ' due to tardiness') {
        ClaimantReason = ` due to tardiness.

        The employer has a point system attendance policy. An employee is issued one point due to an absence. The employee is issued one half point for being tardy or leaving early. Three points are issued for absent without notification. When an employee accrues eight points they are subject to termination. Employees are made aware of the policy upon hire.

        The claimant was struggling with attendance.

        The claimant exceeded the eight points allowed under the employer's policy.
        
        The employer has a known and reasonable attendance policy. The claimant was made aware of the policy. The claimant did violate the policy. Therefore, the employer discharged the claimant due to reasons which do constitute misconduct connected with the work as defined by law. The determination of the Mississippi Department of Employment Security is in order.`
    }

    /* Check if Documents checkbox is checked */
    if (ClaimantDocuments.checked) {
        ClaimantDocumentsProper = ' and certain documents of evidence, '
    }

    /* Ending date */
    var ClaimantEndDate = new Date(document.getElementById("EndingField").value);
    console.log(ClaimantEndDate);
    /* Unfortunately because javascript is amazing, the day will be 1 day behind, because JS starts days of the month at 0, so we gotta fix that */
    ClaimantEndDate.setDate(ClaimantEndDate.getDate() + 1);
    console.log(ClaimantEndDate)

    /* Generate output */
    document.getElementById("FinalOutput").innerHTML = 'Based upon the testimony ' + ClaimantDocumentsProper + `the Administrative Law Judge finds as follows: 
    
    The claimant worked as a ` + ClaimantWorkedAs + ' with ' + ClaimantWorkedWith + ' for approximately ' + ClaimantWorkTime + ' in ' + ClaimantCity + ' ending on ' + ClaimantEndDate.toDateString() + '. The claimant ' + ClaimantStatus + ClaimantReason + `
    
    ` + ALJDecision + EligibilityStatus;

    /* un-hide output */
    document.getElementById("output").style.display = "block";
}

function CopyGenerated() {
    /* We don't need to actually do any special functions to copy the text because we're using clipboard.JS, this function is purely to give off an alert */
    alert("Copied to clipboard!");
}