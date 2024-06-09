let container = document.querySelector(".container");
let randomSorah = document.querySelector(".random-sorah");
let randomAya = document.querySelector(".random-aya");
let generateRandSorrah = document.querySelectorAll(".generate-r-sor");
let generateRandAya = document.querySelectorAll(".generate-r-aya");
let nameArr = document.querySelectorAll(".name-ar");
let nameEn = document.querySelectorAll(".name-en");
let sorrahNumms = document.querySelector(".sorrah-numbers");
let ayaText = document.querySelector(".aya-text");
let ayaNumb = document.querySelector(".aya-numb");
let SorrahLocation = document.querySelector(".location");
let backArrow = document.querySelectorAll(".back-arrow");

let min = 77 - 1 /* this one for indexing*/;
let max = 114 - 1 /* this one for indexing*/;


generateRandSorrah.forEach(button => {
    button.addEventListener('click', function () {
        fetchingSorrah();
    });
});

generateRandAya.forEach(button => {
    button.addEventListener('click', function () {
        fetchingAya();
    });
});


async function fetchingSorrah() {
    let randomIndex = Math.ceil(Math.random() * (max - min) + min);
    await fetch("Quran.json").then((res) => res.json())
        .then((res) => {
            nameArr[0].textContent = res[randomIndex]['name'];
            nameEn[0].textContent = res[randomIndex]['name_translation'];
            sorrahNumms.textContent = `${res[randomIndex]['array'].length} آيه`;
            SorrahLocation.textContent = `__${res[randomIndex]['type']}__`;
        });
    container.classList.add("hidden");
    randomSorah.classList.remove("hidden");
}
async function fetchingAya() {
    let randomIndex = Math.ceil(Math.random() * (max - min) + min);
    await fetch("Quran.json").then((res) => res.json())
        .then((res) => {
            let maxAyaIndex = res[randomIndex]['array'].length - 1;
            let randomAyaIndex = Math.ceil(Math.random() * maxAyaIndex);
            let randomAya = res[randomIndex]['array'][randomAyaIndex]['ar'];
            let randomAyaNumb = res[randomIndex]['array'][randomAyaIndex]['id'];
            ayaText.textContent = randomAya;
            ayaNumb.textContent = randomAyaNumb;
            nameArr[1].textContent = res[randomIndex]['name'];
            nameEn[1].textContent = res[randomIndex]['name_translation'];
        });
    container.classList.add("hidden");
    randomAya.classList.remove("hidden");
}

backArrow.forEach((el)=>{
    el.addEventListener('click',function(){
        el.parentElement.classList.add('hidden')
        container.classList.remove('hidden')
    })
})