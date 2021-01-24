console.log("Go Chuck !");
let recupDivimg = document.getElementsByTagName("div");
let imgChuck = recupDivimg[0];
console.log(imgChuck);
imgChuck.onmouseenter = function(){
	this.style.borderRadius = "0%";
    console.log(imgChuk);
};
imgChuck.onmouseout = function(){
    this.style.borderRadius = "50%";
    console.log(imgChuk);
}

let fleche = document.getElementsByClassName("picto");
let fleche0 = fleche[0];
let fleche1 = fleche[1];
let fleche2 = fleche[2];
fleche0.setAttribute("onclick", "develop0()");
fleche1.setAttribute("onclick", "develop1()");
fleche2.setAttribute("onclick", "develop2()");
let articleSelect = document.getElementsByTagName("article");
console.log(articleSelect);
let divContenue0 = articleSelect[0].getElementsByTagName("div")[0];
let divContenue1 = articleSelect[1].getElementsByTagName("div")[0];
let divContenue2 = articleSelect[2].getElementsByTagName("div")[0];
console.log(divContenue0);
function develop0() {
    if (divContenue0.style.visibility == "hidden"){
        divContenue0.style.visibility = "visible";
        divContenue0.style.display = "block";
    } else {
        divContenue0.style.visibility = "hidden";
        divContenue0.style.display = "flex";

    }
}
function develop1() {
    if (divContenue1.style.visibility == "hidden"){
        divContenue1.style.visibility = "visible";
    } else {
        divContenue1.style.visibility = "hidden";
    }
}
function develop2() {
    if (divContenue2.style.visibility == "hidden"){
        divContenue2.style.visibility = "visible";
    } else {
        divContenue2.style.visibility = "hidden";
    }
}

/* Je ne comprend pas comment faire pour régler le "bug"  */