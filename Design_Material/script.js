if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    var updateProgressButton = document.getElementsByClassName('UpdateProgressButton')
    for (var i = 0; i < updateProgressButton.length; i++) {
        var button = updateProgressButton[i]
        button.addEventListener('click', UpdateProgress)
    }
}

var image = ""
function getimage(input){
  if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#showImg')
                        .attr('src', e.target.result);
                        image = e.target.result
                };

                reader.readAsDataURL(input.files[0]);
}}

function UpdateProgress() {
    var title = document.getElementById("ProgressTitle");
    var information = document.getElementById("ProgressInformation").value;
    
    var update = document.createElement('div')
    update.classList.add('ProgressInput')
    var AllProgress = document.getElementsByClassName('ProgressItems')[0]

    var content = `
    <br><br>
    <div class="row justify-content-center">
        <div class="col-2">
            <img class="d-block w-100" src="Progress.png">
        </div>
        <div class="col-9">
            <div class="container Box">
                <div class="row">
                    <div class="col-12">
                        <img class="d-block w-100" src="${image}" id="showImg">
                    </div>
                </div>
                <div class="row ProgressColor">
                    <div class="col">
                        <br>
                        <h4 class="ProgressFontColor">${title.value}</h4>
                    </div>
                </div>
                <div class="row ProgressColor">
                    <div class="col">
                        <br>
                        <p class="ProgressFontColor ProgressFont ProgressColor">${information}</p>
                    </div>
                </div>
                <div class="row ProgressColor">
                    <div class="col-4">
                        <br>
                        <i class="fa fa-user-circle fa-2x IconColor"></i>
                    </div>
                    <div class="col-5"></div>
                    <div class="col-3">
                        <br>
                        <p class="ProgressFontColor ProgressFont">17/08/2564 11.07 น.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1"></div>
    </div>
    `
    update.innerHTML = content
    AllProgress.append(update)
}