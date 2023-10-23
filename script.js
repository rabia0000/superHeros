let info = document.querySelector("#info")

class personnage {

    constructor(logo, nom, photo, lieu, pouvoir, identite, equipe) {
        this.logo = logo
        this.nom = nom
        this.photo = photo
        this.lieu = lieu
        this.pouvoir = pouvoir
        this.identite = identite
        this.equipe = equipe
    }

}
let ironMan = new personnage('images/logoMarvel.png', 'IRON MAN', 'images/iron.png', 'New-York', 'Armure surpuissante', 'Tony Stark', 'Avenger')
let batman = new personnage('images/logoDc.png', 'BATMAN', 'images/batman.png', 'Gotham', 'Supers Gadgets', 'Bruce Wayne', 'League des justiciers')
let thor = new personnage('images/logoMarvel.png', 'THOR', ' images/thor.jpg', 'Asgar', 'Eclair', 'Thor', 'Avenger')
let cyclope = new personnage('images/logoMarvel.png', 'CYCLOPE', 'images/cyclope.png', 'New York', 'Super Rayon', 'Scott Summers', 'X-Men')
let spiderMan = new personnage('images/logoMarvel.png', 'SPIDER-MAN', 'images/spiderMan.png', 'New York', 'Araignée Humaine', 'Peter Parker', 'Avenger')
let green = new personnage('images/logoDc.png', 'GREEN LANTERNE', 'images/greenLanterne.png', 'New York', 'Aura verte', 'Thor', 'Avenger')
let superGirl = new personnage('images/logoDc.png', 'SUPERGIRL', 'images/superGirl.png', 'New York', 'Super Forte', 'Linda Lang', 'inconnu')
let wonderWoman = new personnage('images/logoDc.png', 'WONDER WOMAN', 'images/ww.jpg', 'Themyscira', 'Force surhumaine', 'Diane Themyscira ', 'League des justiciers')
let captainA = new personnage('images/logoMarvel.png', 'CAPTAIN AMERICA', 'images/captain.jpg', 'New-York', 'Force Surhumaine', 'Steeve Rogers', 'Avenger')
let superMan = new personnage('images/logoDc.png', 'SUPERMAN', 'images/sm.png', 'Krypton', 'Super Fort', 'Clark Kent ou Kal-El', 'League des justiciers')
let blackWindow = new personnage('images/logoMarvel.png', 'BLACK WINDOW', 'images/bw.png', 'New York', 'Super Forte', 'Natacha Romanoff', 'Avenger')
let shazam = new personnage('images/logoDc.png', 'SHAZAM', 'images/shazam.png', 'Philadelphie', 'Super Fort', 'Billy Batson ', 'League des justiciers')


const arrayPersonnages = [ironMan, batman, cyclope, green, spiderMan, superGirl, thor, wonderWoman, captainA, superMan, blackWindow, shazam]

for (perso of arrayPersonnages) {
    // console.log(personnages[perso])

    info.innerHTML += `
        
<div class=" col-lg-3 col-sm-12 shadow border border-light border-5 text-center text-light bg-dark py-2 mt-3 ">
<div class="justify-content-center text-center ">
<div id = "size" >
    <img  id='logo' class="" src="${perso.logo}" alt="logo">
</div>
<div id = "size" >
    <p class=" fs-3 mt-4 mb-0">${perso.nom}</p>
</div>
</div>
<img class="w-75" src="${perso.photo}" alt="image de batman">
<div class="text-start ">
    <ul class="my-3">
        <li class="">Lieu : ${perso.lieu} </li>
        <li class="">Super Pouvoir : ${perso.pouvoir} </li>
        <li class="">Identitée : ${perso.identite} </li>
        <li class="">Equipe : ${perso.equipe} </li>

    </ul>

</div>
</div>
    
    `
    //      ` 
    //     <h1 id="lastName"> Nom :  ${perso.lastname} </h1>
    //     <p id="nom">prenom : ${perso.name}</p>
    //     <img id ="image"  src="${perso.picture}" alt="image de Ryu">
    //     <p id="nationality"> nationality : ${perso.nationality} </p>
    //     <p id="genre">sexe : ${perso.sexe}</p>
    //     <button>cri de guerre <button>

    // `
}
console.log(info)