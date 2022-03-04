var Clicks = 0;

function AddClick() {
    Clicks = Clicks + 1;
    document.getElementById('CountedClicks').innerHTML = Clicks;
}

var Clicks1 = 0;

function AddClick1() {
    Clicks1 = Clicks1 + 1;
    document.getElementById('CountedClicks1').innerHTML = Clicks1;
}

function Comments() {
    var x = document.getElementById("cm");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function Comments1() {
    var x = document.getElementById("cm1");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}