if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var CreateProjectButton = document.getElementsByClassName('CreateProjectButton')
    for (var i = 0; i < CreateProjectButton.length; i++) {
        var button = CreateProjectButton[i]
        button.addEventListener('click', CreateProject)
    }

}

function CreateProject() {
    var title = document.getElementById("ProjectTitle").value;
    var purpose = document.getElementById("ProjectPurpose").value;
    var plan = document.getElementById("ProjectPlan").value;
    var benefits = document.getElementById("ProjectBenefits").value;
    var banktype = document.getElementById("banktype").value;
    var banknumber = document.getElementById("BankNumber").value;
    var endDate = document.getElementById("start").value;
    var facebook = document.getElementById("Facebook").value;
    var twitter = document.getElementById("Twitter").value;
    var ig = document.getElementById("Instagram").value;
    
    var pjownertype = document.getElementById("pjownertype").value;
    var ownerName = document.getElementById("OwnerName").value;
    var ownerEmail = document.getElementById("OwnerEmail").value;

    var accountName = document.getElementById("AccountName").value;
    var accountLastname = document.getElementById("AccountLastname").value;
    var accountPhoneNumber = document.getElementById("AccountPhoneNumber").value;
    var accountEmail = document.getElementById("AccountEmail").value;
    var accountAddress = document.getElementById("AccountAddress").value;

    console.log(title);

    var link = title + "-" + purpose + "-" + plan + "-" + benefits + "-" + banktype + "-"+ banknumber + "-" + endDate + "-"+ facebook + "-"+ twitter + "-" + ig + "-" + pjownertype + "-" + ownerName + "-" + ownerEmail + "-" + accountName + "-" + accountLastname + "-" + accountPhoneNumber + "-" + accountEmail + "-" + accountAddress ; 

            console.log(link);

}

