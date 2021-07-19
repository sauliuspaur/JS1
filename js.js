document.getElementById('krepselis').addEventListener("click", ikrepseli);

function ikrepseli() {

    var kiekis = document.getElementById('kiekis').value
    document.getElementById("messages").innerHTML= 'Jūs sėkmindai pridėjote ' + kiekis + 'vnt.'
}

document.getElementById('atnaujinti').addEventListener("click", atnaujinti);
function atnaujinti(){
    location.reload();
}

const duomenys = [
    {
        miestas: "Kaunas",
        adresas: "Jonavos 56",
        data: "2020-07-01",
        kiekis: "10"
    },
    {
        miestas: "Vilnius",
        adresas: "Gelezinio vilko 20",
        data: "2020-07-01",
        kiekis: "15"
    },
    {
        miestas: "Klaipeda",
        adresas: "Ligonines 20",
        data: "2020-07-01",
        kiekis: "25"
    }
]

duomenys[0]['miestas']='Utena';
console.log(duomenys);

for(let eile in duomenys){
    console.log(duomenys[eile])
}

function pakeisti(){
document.getElementById("tekstas").innerHTML = "Hello JavaScript!"
}

document.getElementById("btn").onclick=function (){
    console.log('veikia');
}

jQuery(document).ready(function(){
    jQuery('.naujasmygtukas').addClass('klase');
    jQuery('#naujasmygtukas').removeClass('klase');
    jQuery('.naujasmygtukas').click(function(){
        alert('paspaudimas')
    })
})
// Uzduotys
// 1.
const name = "Saulius"
const surname = "Paurazas"
const age = "1983"
document.getElementById("aboutMe").innerHTML = "Aš esu " +  name + " " + surname + " gimęs " + age +  "-aisiais"

// 2.
function myFunction() {
  document.getElementById("unequelNumber").innerHTML = Math.round(4.98);
}

//6.
function myFunction2() {
    document.getElementById("randomNumber").innerHTML = Math.random();
  }

//7.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;}