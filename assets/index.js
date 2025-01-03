
document.querySelector(".go").addEventListener('click', () => {

    var empty = [];
    var params = new URLSearchParams();

    var imageLinkInput = document.getElementById("imageLink");
    if (isEmpty(imageLinkInput.value)) {
        empty.push(imageLinkInput);
        imageLinkInput.parentElement.classList.add("error_shown");
    } else {
        params.append("image", imageLinkInput.value);
    }

    document.querySelectorAll(".input_holder").forEach((element) => {
        var input = element.querySelector(".input");
        params.append(input.id, input.value);

        if (isEmpty(input.value)) {
            empty.push(element);
            element.classList.add("error_shown");
        }
    });

    if (empty.length != 0) {
        empty[0].scrollIntoView();
    } else {
        forwardToId(params);
    }
});

function isEmpty(value) {
    let pattern = /^\s*$/;
    return pattern.test(value);
}

function forwardToId(params) {
    location.href = "/yObywatel/id?" + params;
}


document.querySelector(".go").addEventListener('click', () => {

    var empty = [];

    var params = new URLSearchParams();

    if (!upload.hasAttribute("selected")){
        empty.push(upload);
        upload.classList.add("error_shown")
    }else{
        params.append("image", upload.getAttribute("selected"));
    }

    document.querySelectorAll(".input_holder").forEach((element) => {

        var input = element.querySelector(".input");
        params.append(input.id, input.value);

        if (isEmpty(input.value)){
            empty.push(element);
            element.classList.add("error_shown");
        }

    })

    if (empty.length != 0){
        empty[0].scrollIntoView();
    }else{
        forwardToId(params);
    }

});

function isEmpty(value){

    let pattern = /^\s*$/
    return pattern.test(value);

}

function forwardToId(params){

    location.href = "/yObywatel/id?" + params

}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})
