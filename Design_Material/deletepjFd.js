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
    //var idProjectToDelete = stringProjectToDelete.options[stringProjectToDelete.selectedIndex].id;
    console.log(stringProjectToDelete.value)
    console.log(idProjectToDelete)

    //Demo
    var idProjectToDelete = 25;
    var link = "http://localhost:5000/deletepj_db/fdrequest/" + idProjectToDelete; 
    location.replace(link)
}