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
    var projectToDelete = document.getElementById("SelectProjectToDelete").value;
    console.log(projectToDelete)

    var projectToDelete_id = 35; //Demo

    var link = "http://localhost:5000/deletepj_db/" + projectToDelete_id;
    //TODO: Change Link
    //location.replace("http://localhost:5000/createpj_db/addnw/11-'eleven'") //Redirect sucessfully
    location.replace(link)
}