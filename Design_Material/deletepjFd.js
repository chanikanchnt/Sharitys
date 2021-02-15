if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var DeleteProjectButton = document.getElementsByClassName('DeleteProjectButton')
    for (var i = 0; i < DeleteProjectButton.length; i++) {
        var button = DeleteProjectButton[i]
        button.addEventListener('click', DeleteProject)
    }    
}

function DeleteProject() {
    var stringProjectToDelete = document.getElementById("SelectProjectToDelete");
    //Demo var idProjectToDelete = 25;
    var idProjectToDelete = stringProjectToDelete.options[stringProjectToDelete.selectedIndex].id;
    var reqreason = document.getElementById("reason").value;

    console.log(stringProjectToDelete.value)
    console.log(idProjectToDelete)
    console.log(reqreason)

    var link = "http://localhost:5000/deletepj_db/fdrequest/" + idProjectToDelete; 
    location.replace(link)
}