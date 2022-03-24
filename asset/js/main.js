/*Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.

Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.*/

//creazione array con i dati dei dipendenti 

let datiDipendenti = [{
        "nome": "Wayne Barnett",
        "ruolo": "Founder e CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroll",
        "ruolo": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "img": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    },

]

//stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.

for (i = 0; i < datiDipendenti.length; i++) {
    for (let key in datiDipendenti[i]) {
        console.log(key)
        console.log(datiDipendenti[i][key])

    }
}

// stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.

//BONUS: stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.

for (i = 0; i < datiDipendenti.length; i++) {

    document.getElementById("box").innerHTML += `
        <div class="card mb-5 border-0" style="width: 18rem;">
            <img src="./asset/img/${datiDipendenti[i]["img"]}"  class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center f_family fs-4 c_brown">${datiDipendenti[i]["nome"]}</h5>
                <p class="card-text text-center c_brown">${datiDipendenti[i]["ruolo"]}</p>
            </div>
        </div>
  `
}