x = [];
async function getmovies() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`)
    let result = await response.json();
    x = result.results;
    display();
    local()


}

$(".localsearch").keyup(local);
async function local() {
    let c = document.querySelector(".localsearch").value;
    let cartoona = ``;
    for (let i = 0; i < x.length; i += 1) {
        if (x[i].original_title.toLowerCase().includes(c.toLowerCase())) {
            cartoona +=
                `<div class="col-lg-4 col-md-6 py-3  parent ">
        <div class="layer position-relative overflow-hidden text-center">
  <img src="https://image.tmdb.org/t/p/w500${x[i].poster_path}" class="w-100" alt="">
        <div class="hoverdiv d-flex flex-column justify-content-center h-100 position-absolute ">
        <h2>${x[i].original_title}</h2>
        <p>${x[i].overview}</p>
        <p>rate${x[i].vote_average}</p>
        <p>${x[i].release_date}</p>
    </div>
       </div> 
       
    </div>`;
        }

    }

    document.querySelector(".content").innerHTML = cartoona;

}

getmovies();

$(".apisearch").keyup(async function () {
    let search = document.querySelector(".apisearch").value;
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=z-ar&include_adult=false`)
    let result = await response.json();
    x = result.results;
    display();
})
//////////////////////////////////////
let z = ``;
let element = document.querySelectorAll(".getcertenmove");
for (let i = 0; i < element.length; i += 1) {


    element[i].addEventListener("click", async function () {
        switch (i) {
            case 0:
                z = `movie/now_playing`;
                break;
            case 1:
                z = `movie/popular`
                break;
            case 2:
                z = `movie/top_rated`
                break;
            case 3:
                z = `trending/all/day`
                break;
            case 4:
                z = `movie/upcoming`
                break;
        }
        let response = await fetch(`https://api.themoviedb.org/3/${z}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        let result = await response.json();
        x = result.results;
        display();
    })
}


/////////////////////////////////////
getmovies();


async function display() {

    let cartoona = ``;
    for (let i = 0; i < x.length; i += 1) {

        cartoona +=
            `<div class="col-lg-4 col-md-6 py-3  parent ">
        <div class="layer position-relative overflow-hidden text-center">
        <img src="https://image.tmdb.org/t/p/w500${x[i].poster_path}" class="w-100" alt="">
        <div class="hoverdiv d-flex flex-column justify-content-center h-100 position-absolute ">
        <h2>${x[i].original_title}</h2>
        <p>${x[i].overview}</p>
        <p>rate${x[i].vote_average}</p>
        <p>${x[i].release_date}</p>
    </div>
       </div> 
       
    </div>`;

    }

    document.querySelector(".content").innerHTML = cartoona;

}


$(".toogle").click(function () {
    let leftPro = $(".itemlayer").css("left");
    if (leftPro === "-250px") {
        $(".fa").removeClass('open').addClass('close');
        $(".itemlayer").animate({ left: "0px" }, 500);
        $(".1 a").animate({ opacity: "100%", paddingTop: "25px" }, 1000)
        $(".2 a").animate({ opacity: "100%", paddingTop: "25px" }, 1100)
        $(".3 a").animate({ opacity: "100%", paddingTop: "25px" }, 1200)
        $(".4 a").animate({ opacity: "100%", paddingTop: "25px" }, 1300)
        $(".5 a").animate({ opacity: "100%", paddingTop: "25px" }, 1400)
        $(".6 a").animate({ opacity: "100%", paddingTop: "25px" }, 1500)
        $(".toogle").addClass("fas fa-times");
    }

    else {

        $(".itemlayer").animate({ left: "-250px" }, 500);
        $(" a").animate({ opacity: "0", paddingTop: "500px" }, 1000)
        $(".toogle").removeClass("fas fa-times")
    }
});

$(window).resize(function () {
    let h = $(window).height();
    console.log(h)
    $("itemlayer").animate({ height: "600px" }, 1000)
});
////////////////////////////////////
let inputname = document.querySelector(".name");
let inputemai = document.querySelector(".email");
let inputphone = document.querySelector(".phone");
let inputage = document.querySelector(".age");
let inputpassword = document.querySelector(".password");
let inputrepassword = document.querySelector(".repassword");
let regexname = /^[a-z0-9]+$/;
let regexemail = /^[a-z0-9]+@(yahoo|gmail).com$/;
let regexphone = /^01[0125][0-9]{8}$/;
let regexage = /^([1-9][0-9]{0,1}|100)$/;
let regexpassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
inputname.addEventListener("keyup", function () {

    if (regexname.test(inputname.value)) {

        document.querySelector(".namealert").classList.remove("d-block");
        enable();
    }
    else {
        document.querySelector(".namealert").classList.add("d-block");
    }
});


inputemai.addEventListener("keyup", function () {
    if (regexemail.test(inputemai.value)) {

        document.querySelector(".emailalert").classList.remove("d-block");
        enable();
    }
    else {

        document.querySelector(".emailalert").classList.add("d-block")
        enable()
    }
});


inputphone.addEventListener("keyup", function () {
    if (regexphone.test(inputphone.value)) {

        document.querySelector(".phonealert").classList.remove("d-block");
        enable();
    }
    else {

        document.querySelector(".phonealert").classList.add("d-block");
        enable()
    }
});

inputage.addEventListener("keyup", function () {
    if (regexage.test(inputage.value)) {
        document.querySelector(".agealert").classList.remove("d-block");
        enable();
    }
    else {

        document.querySelector(".agealert").classList.add("d-block")
        enable()
    }
});


inputpassword.addEventListener("keyup", function () {
    if (regexpassword.test(inputpassword.value)) {

        document.querySelector(".passwordalert").classList.remove("d-block");
        enable();
    }
    else {

        document.querySelector(".passwordalert").classList.add("d-block")
        enable()
    }
});
inputrepassword.addEventListener("keyup", function () {
    if (inputrepassword.value == inputpassword.value) {

        document.querySelector(".repasswordalert").classList.remove("d-block");
        enable();
    }
    else {

        document.querySelector(".repasswordalert").classList.add("d-block")
        enable()
    }
});
function enable() {
    if (regexname.test(inputname.value) &&
        regexemail.test(inputemai.value) &&
        regexphone.test(inputphone.value) &&
        regexage.test(inputage.value) &&
        regexpassword.test(inputpassword.value) &&
        inputrepassword.value == inputpassword.value) {
        document.querySelector("#valid").classList.remove("disabled");
    }
    else {
        document.querySelector("#valid").classList.add("disabled");
    }
}


$(window).resize(function () {
    let h = $(window).height();
    $(".itemlayer").animate({ height: h }, 18)
})
$(window).click(function () {
    let h = $(window).height();
    $(".itemlayer").animate({ height: h }, 15)
})