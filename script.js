let players = [
    {
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
        position: "RW",
        nationality: "Argentina",
        flag: "https://cdn.sofifa.net/flags/ar.png",
        club: "Inter Miami",
        logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
        rating: 93,
        pace: 85,
        shooting: 92,
        passing: 91,
        dribbling: 95,
        defending: 35,
        physical: 65,
    },
    {
        name: "Cristiano Ronaldo",
        photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
        position: "ST",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Al Nassr",
        logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
        rating: 91,
        pace: 84,
        shooting: 94,
        passing: 82,
        dribbling: 87,
        defending: 34,
        physical: 77,
    },
    {
        name: "Kevin De Bruyne",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        position: "CM",
        nationality: "Belgium",
        flag: "https://cdn.sofifa.net/flags/be.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        rating: 91,
        pace: 74,
        shooting: 86,
        passing: 93,
        dribbling: 88,
        defending: 64,
        physical: 78,
    },
    {
        name: "Kylian Mbappé",
        photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
        position: "ST",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 92,
        pace: 97,
        shooting: 89,
        passing: 80,
        dribbling: 92,
        defending: 39,
        physical: 77,
    },
    {
        name: "Virgil van Dijk",
        photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
        position: "CB",
        nationality: "Netherlands",
        flag: "https://cdn.sofifa.net/flags/nl.png",
        club: "Liverpool",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 90,
        pace: 75,
        shooting: 60,
        passing: 70,
        dribbling: 72,
        defending: 92,
        physical: 86,
    },
    {
        name: "Antonio Rudiger",
        photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
        position: "CB",
        nationality: "Germany",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "Real Madrid",
        logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
        rating: 88,
        pace: 82,
        shooting: 55,
        passing: 73,
        dribbling: 70,
        defending: 86,
        physical: 86,
    },
    {
        name: "Neymar Jr",
        photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
        position: "LW",
        nationality: "Brazil",
        flag: "https://cdn.sofifa.net/flags/br.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 90,
        pace: 91,
        shooting: 83,
        passing: 86,
        dribbling: 94,
        defending: 37,
        physical: 61,
    },
    {
        name: "Mohamed Salah",
        photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
        position: "RW",
        nationality: "Egypt",
        flag: "https://cdn.sofifa.net/flags/eg.png",
        club: "Liverpool",
        logo: "https://cdn.sofifa.net/meta/team/8/120.png",
        rating: 89,
        pace: 93,
        shooting: 87,
        passing: 81,
        dribbling: 90,
        defending: 45,
        physical: 75,
    },
    {
        name: "Joshua Kimmich",
        photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
        position: "CM",
        nationality: "Germany",
        flag: "https://cdn.sofifa.net/flags/de.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 89,
        pace: 70,
        shooting: 75,
        passing: 88,
        dribbling: 84,
        defending: 84,
        physical: 81,
    },
    {
        name: "Jan Oblak",
        photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
        position: "GK",
        nationality: "Slovenia",
        flag: "https://cdn.sofifa.net/flags/si.png",
        club: "Atletico Madrid",
        logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
        rating: 91,
        diving: 89,
        handling: 90,
        kicking: 78,
        reflexes: 92,
        speed: 50,
        positioning: 88,
    },

    {
        name: "Erling Haaland",
        photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        position: "ST",
        nationality: "Norway",
        flag: "https://cdn.sofifa.net/flags/no.png",
        club: "Manchester City",
        logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
        rating: 91,
        pace: 89,
        shooting: 94,
        passing: 65,
        dribbling: 80,
        defending: 45,
        physical: 88,
    },
    {
        name: "NGolo Kante",
        photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
        position: "CM",
        nationality: "France",
        flag: "https://cdn.sofifa.net/flags/fr.png",
        club: "Al-Ittihad",
        logo: "https://cdn.sofifa.net/meta/team/476/120.png",
        rating: 87,
        pace: 77,
        shooting: 66,
        passing: 75,
        dribbling: 82,
        defending: 88,
        physical: 82,
    },
    {
        name: "Alphonso Davies",
        photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
        position: "LB",
        nationality: "Canada",
        flag: "https://cdn.sofifa.net/flags/ca.png",
        club: "Bayern Munich",
        logo: "https://cdn.sofifa.net/meta/team/503/120.png",
        rating: 84,
        pace: 96,
        shooting: 68,
        passing: 77,
        dribbling: 82,
        defending: 76,
        physical: 77,
    },
    {
        name: "Yassine Bounou",
        photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
        position: "GK",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 84,
        diving: 81,
        handling: 82,
        kicking: 77,
        reflexes: 86,
        speed: 38,
        positioning: 83,
    },
    {
        name: "Bruno Fernandes",
        photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
        position: "CM",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 88,
        pace: 75,
        shooting: 85,
        passing: 89,
        dribbling: 84,
        defending: 69,
        physical: 77,
    },
    {
        name: "Jadon Sancho",
        photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
        position: "LW",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Manchester United",
        logo: "https://cdn.sofifa.net/meta/team/14/120.png",
        rating: 84,
        pace: 85,
        shooting: 74,
        passing: 78,
        dribbling: 88,
        defending: 34,
        physical: 63,
    },
    {
        name: "Trent Alexander-Arnold",
        photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
        position: "RB",
        nationality: "England",
        flag: "https://cdn.sofifa.net/flags/gb-eng.png",
        club: "Liverpool",
        rating: 87,
        pace: 76,
        shooting: 66,
        passing: 89,
        dribbling: 80,
        defending: 79,
        physical: 71,
    },
    {
        name: "Achraf Hakimi",
        photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
        position: "RB",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Paris Saint-Germain",
        logo: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 84,
        pace: 91,
        shooting: 76,
        passing: 80,
        dribbling: 80,
        defending: 75,
        physical: 78,
    },


];




// fonction qui faire la creation de carte de joueur (fonction principale)

function crationCarte(joueur) {
    let carte = document.createElement('div');
    const placedafichage = document.getElementById('placeAfichageToutLesJoueurs');
    carte.className = ' m-2 ';
    if (joueur.position != "GK") {
        carte.innerHTML = `
       
    
    <div class=" bg-white  rounded-lg shadow text-center ">
    <img src="${joueur.photo}" alt="" class="w-full rounded-lg">
    <h3 class="text-xl font-semibold">${joueur.name}</h3>
    <p class="text-sm text-gray-600">${joueur.position}</p>
    <p class="text-sm text-gray-600">${joueur.club}</p>
    <p class="font-bold text-lg">${joueur.rating}</p>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between">
<div class="flex flex-col">
    <span>PAC</span>
    <span>${joueur.pace}</span>
</div>
<div class="flex flex-col">
    <span>SHO</span>
    <span>${joueur.shooting}</span>
</div>
<div class="flex flex-col">
    <span>PAS</span>
    <span>${joueur.passing}</span>
</div>
<div class="flex flex-col">
    <span>DRI</span>
    <span>${joueur.dribbling}</span>
</div>
<div class="flex flex-col">
    <span>DEF</span>
    <span>${joueur.defending}</span>
</div>
<div class="flex flex-col">
    <span>PHY</span>
    <span>${joueur.physical}</span>
</div>


        </div>
        <div class="flex flex-row gap-2 justify-center items-center">
            <img src="${joueur.flag}" class="w-10 h-7" alt="">
            <img src="${joueur.logo}" class="w-10 h-10" alt="">
        
    </div>
    </div>
    <div class="flex space-x-2 justify-center">
        <button id="modifierJoueur${joueur.name}" onclick ="Modifier('${joueur.name}')" class="bg-black text-white px-4 py-2 rounded hover:bg-yellow-600")">
            Modifier
        </button>
 <button onclick="del('${joueur.name}')" class="bg-black text-white px-4 py-2 rounded hover:bg-red-600">
    Supprimer
</button>

    </div>
</div> 
 
`
    }

    else {

        carte.innerHTML = `
    <div class=" bg-white  rounded-lg shadow text-center">
    <img src="${joueur.photo}" alt="" class="w-full rounded-lg">
    <h3 class="text-xl font-semibold">${joueur.name}</h3>
    <p class="text-sm text-gray-600">${joueur.position}</p>
    <p class="text-sm text-gray-600">${joueur.club}</p>
    <p class="font-bold text-lg">${joueur.rating}</p>
    <div class="flex flex-col">
        <div class="flex flex-row justify-between">
<div class="flex flex-col">
    <span>DI</span>
    <span>${joueur.diving}</span>
</div>
<div class="flex flex-col">
    <span>HA</span>
    <span>${joueur.handling}</span>
</div>
<div class="flex flex-col">
    <span>KI</span>
    <span>${joueur.kicking}</span>
</div>
<div class="flex flex-col">
    <span>RE</span>
    <span>${joueur.reflexes}</span>
</div>
<div class="flex flex-col">
    <span>SP</span>
    <span>${joueur.speed}</span>
</div>
<div class="flex flex-col">
    <span>PO</span>
    <span>${joueur.positioning}</span>
</div>


        </div>
        <div class="flex flex-row gap-2 justify-center items-center">
            <img src="${joueur.flag}" class="w-10 h-7" alt="">
            <img src="${joueur.logo}" class="w-10 h-10" alt="">
        
    </div>
    </div>
    <div class="flex space-x-2 justify-center">
        <button id="modifier${joueur.name}" onclick ="Modifier('${joueur.name}')"  class="bg-black text-white px-4 py-2 rounded hover:bg-orange-600")">
            Modifier
        </button>
        <button onclick="del('${joueur.name}')" class="bg-black text-white px-4 py-2 rounded hover:bg-red-600">
    Supprimer
</button>

    </div>
</div> 
`
    }

    placedafichage.appendChild(carte);

}

// fonction qui retourne tout les joueurs (fonction principal)
function affichageToutLesJoueurs() {
    players.forEach((joueur) => crationCarte(joueur));
}



//fonction qui ajoute un joueur  (fonction principal)
function AjouteUnJoueur(event) {
    event.preventDefault();
    const inputName = document.getElementById('name').value.trim();
    const inputPhoto = document.getElementById('photo').value.trim();
    const inputPosition = document.getElementById('position').value.trim();
    const inputNationality = document.getElementById('nationality').value.trim();
    const inputFlag = document.getElementById('flag').value.trim();
    const inputClub = document.getElementById('club').value.trim();
    const inputLogo = document.getElementById('logo').value.trim();
    const inputRating = parseInt(document.getElementById('rating').value);
    const inputPace = parseInt(document.getElementById('pace').value);
    const inputShooting = parseInt(document.getElementById('shooting').value);
    const inputPassing = parseInt(document.getElementById('passing').value);
    const inputDribbling = parseInt(document.getElementById('dribbling').value);
    const inputDefending = parseInt(document.getElementById('defending').value);
    const inputPhysical = parseInt(document.getElementById('physical').value);


    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    const imageUrlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
    const statsRegex = /^(100|[1-9]?[0-9])$/;


    let nouveauJoueur = {
        name: inputName,
        photo: inputPhoto,
        position: inputPosition,
        nationality: inputNationality,
        flag: inputFlag,
        club: inputClub,
        logo: inputLogo,
        rating: inputRating,
        pace: inputPace,
        shooting: inputShooting,
        passing: inputPassing,
        dribbling: inputDribbling,
        defending: inputDefending,
        physical: inputPhysical,
    };


    let valid = true;


    clearErrors();


    if (players.find(player => player.name === inputName)) {
        showErrorMessage("Le joueur existe déjà.");
        valid = false;
    }
    if (!nameRegex.test(inputName)) {
        showErrorMessage("Nom invalide. Seuls les caractères alphabétiques, apostrophes et tirets sont autorisés.");
        valid = false;
    }

    if (!imageUrlRegex.test(inputPhoto)) {
        showErrorMessage("L'URL de la photo n'est pas valide.");
        valid = false;
    }

    if (!imageUrlRegex.test(inputFlag)) {
        showErrorMessage("L'URL de la flag n'est pas valide.");
        valid = false;
    }

    if (!imageUrlRegex.test(inputLogo)) {
        showErrorMessage("L'URL de la logo n'est pas valide.");
        valid = false;
    }

    if (!statsRegex.test(inputRating)) {
        showErrorMessage("La note (rating) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputPace)) {
        showErrorMessage("La statistique PAC (vitesse) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputShooting)) {
        showErrorMessage("La statistique SHO (tir) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputPassing)) {
        showErrorMessage("La statistique PAS (passes) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputDribbling)) {
        showErrorMessage("La statistique DRI (dribbles) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputDefending)) {
        showErrorMessage("La statistique DEF (défense) doit être entre 0 et 100.");
        valid = false;
    }

    if (!statsRegex.test(inputPhysical)) {
        showErrorMessage("La statistique PHY (physique) doit être entre 0 et 100.");
        valid = false;
    }


    if (valid) {

        players.push(nouveauJoueur);
        clearInputs();
        alert("Le joueur a été ajouté avec succès !");
        affichageToutLesJoueurs();
    }
}



// Fonction pour afficher un message d erreur (fonction secondaire)
function showErrorMessage(message) {
    const errorContainer = document.getElementById("errorMessages");
    if (errorContainer) {
        const error = document.createElement("p");
        error.className = "text-red-500";
        error.textContent = message;
        errorContainer.appendChild(error);
    } else {
        console.log("Erreur: Container pour les messages non trouvé.");
    }
}




// Fonction pour suprimer le message d error (fonction secondaire)
function clearErrors() {
    const errorContainer = document.getElementById("errorMessages");
    if (errorContainer) {
        errorContainer.innerHTML = "";
    }
}




// Fonction pour effacer les inputs après ajouter (fonction secondaire)
function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("position").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("flag").value = "";
    document.getElementById("club").value = "";
    document.getElementById("logo").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("pace").value = "";
    document.getElementById("shooting").value = "";
    document.getElementById("passing").value = "";
    document.getElementById("dribbling").value = "";
    document.getElementById("defending").value = "";
    document.getElementById("physical").value = "";
}


document.getElementById('addJoueur').addEventListener('click', AjouteUnJoueur);
affichageToutLesJoueurs();




// dans ce tableau ona les poste des 11 joueurs dans le terrain
let JoueursTerrain = [
    {
        position: 'RW',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'ST',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'LW',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
   
    {
        position: 'CM',
        id:'CM1',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'CM',
        id:'CM2',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'CM',
        id:'CM3',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'CB',
        id:'CB1',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'CB',
        id:'CB2',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'LB',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'RB',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        pace: 0,
        shooting: 0,
        passing: 0,
        dribbling: 0,
        defending: 0,
        physical: 0
    },
    {
        position: 'GK',
        name: '',
        photo: '',
        nationality: '',
        flag: '',
        club: '',
        logo: '',
        rating: 0,
        diving: 0,
        handling: 0,
        kicking: 0,
        reflexes: 0,
        speed: 0,
        positioning: 0
    }
];

// fonction qui afficher le formulaire de Modifier
function Modifier(joueurnamemod) {
    console.log(joueurnamemod);

    const mod = players.find(player => player.name === joueurnamemod);
    const placeFormulairedemodification = document.getElementById('formulairedemodification');
    let formulairemodifier = document.createElement('div');
    formulairemodifier.className = 'absolute z-10 top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center';

    formulairemodifier.innerHTML = `
        <div class="container mx-auto bg-white p-6 rounded-lg shadow-lg max-w-3xl">
            <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Modifier: ${mod.name}</h1>
            <form id="playerForm" class="space-y-6">
                <!-- Personal Information -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="name" class="block text-sm font-semibold text-gray-700">Nom</label>
                        <input type="text" id="nameup" value="${mod.name}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="position" class="block text-sm font-semibold text-gray-700">Position</label>
                    <select id="positionup" class="border border-gray-300 p-2 rounded w-full">
                             <option value="GK" ${mod.position === "GK" ? "selected" : ""}>GK</option>
                             <option value="CB" ${mod.position === "CB" ? "selected" : ""}>CB</option>
                             <option value="RB" ${mod.position === "RB" ? "selected" : ""}>RB</option>
                             <option value="LB" ${mod.position === "LB" ? "selected" : ""}>LB</option>
                             <option value="CM" ${mod.position === "CM" ? "selected" : ""}>CM</option>
                             <option value="ST" ${mod.position === "ST" ? "selected" : ""}>ST</option>
                             <option value="RW" ${mod.position === "RW" ? "selected" : ""}>RW</option>
                             <option value="LW" ${mod.position === "LW" ? "selected" : ""}>LW</option>
                    </select>
                    </div>
                </div>
                <!-- Club Information -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="nationality" class="block text-sm font-semibold text-gray-700">Nationalité</label>
                        <input type="text" id="nationalityup" value="${mod.nationality}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="club" class="block text-sm font-semibold text-gray-700">Club</label>
                        <input type="text" id="clubup" value="${mod.club}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="flag" class="block text-sm font-semibold text-gray-700">Drapeau (URL)</label>
                        <input type="url" id="flagup" value="${mod.flag}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="logo" class="block text-sm font-semibold text-gray-700">Logo (URL)</label>
                        <input type="url" id="logoup" value="${mod.logo}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="photo" class="block text-sm font-semibold text-gray-700">Photo (URL)</label>
                        <input type="url" id="photoup" value="${mod.photo}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                </div>
                <!-- Player Stats -->
                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label for="rating" class="block text-sm font-semibold text-gray-700">Note</label>
                        <input type="number" id="ratingup" value="${mod.rating}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="pace" class="block text-sm font-semibold text-gray-700">PAC</label>
                        <input type="number" id="paceup" value="${mod.pace}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="shooting" class="block text-sm font-semibold text-gray-700">SHO</label>
                        <input type="number" id="shootingup" value="${mod.shooting}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="passing" class="block text-sm font-semibold text-gray-700">PAS</label>
                        <input type="number" id="passingup" value="${mod.passing}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="dribbling" class="block text-sm font-semibold text-gray-700">DRI</label>
                        <input type="number" id="dribblingup" value="${mod.dribbling}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="defending" class="block text-sm font-semibold text-gray-700">DEF</label>
                        <input type="number" id="defendingup" value="${mod.defending}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label for="physical" class="block text-sm font-semibold text-gray-700">PHY</label>
                        <input type="number" id="physicalup" value="${mod.physical}" class="border border-gray-300 p-2 rounded w-full" />
                    </div>
                </div>
                <!-- Submit Button -->
                <button type="button" id="modifierJoueur" class="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Confirmer</button>
                <button type="button" id="cancel" class="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Annuler</button>
            </form>
        </div>
    `;


    placeFormulairedemodification.appendChild(formulairemodifier);

// fonction conferme le modification de joueurs
    document.getElementById('modifierJoueur').addEventListener('click', () => {
        const updatedName = document.getElementById('nameup').value;
        const updatedPosition = document.getElementById('positionup').value; 
        const updatedNationality = document.getElementById('nationalityup').value;
        const updatedClub = document.getElementById('clubup').value;
        const updatedFlag = document.getElementById('flagup').value;
        const updatedLogo = document.getElementById('logoup').value;
        const updatedPhoto = document.getElementById('photoup').value;
        const updatedRating = parseInt(document.getElementById('ratingup').value, 10);
        const updatedPace = parseInt(document.getElementById('paceup').value, 10);
        const updatedShooting = parseInt(document.getElementById('shootingup').value, 10);
        const updatedPassing = parseInt(document.getElementById('passingup').value, 10);
        const updatedDribbling = parseInt(document.getElementById('dribblingup').value, 10);
        const updatedDefending = parseInt(document.getElementById('defendingup').value, 10);
        const updatedPhysical = parseInt(document.getElementById('physicalup').value, 10);
console.log(mod.position);
        mod.name = updatedName;
        mod.position = updatedPosition;
        mod.nationality = updatedNationality;
        mod.club = updatedClub;
        mod.flag = updatedFlag;
        mod.logo = updatedLogo;
        mod.photo = updatedPhoto;
        mod.rating = updatedRating;
        mod.pace = updatedPace;
        mod.shooting = updatedShooting;
        mod.passing = updatedPassing;
        mod.dribbling = updatedDribbling;
        mod.defending = updatedDefending;
        mod.physical = updatedPhysical;

        console.log("Joueur modifié : ", mod);
        console.log("Position sélectionnée :", updatedPosition);
        suprimerLaffichageDeToutlesjoueurs();
        affichageToutLesJoueurs();

      
        formulairemodifier.remove();
    });

//  fonction cancel le formulaire de modification
    document.getElementById('cancel').addEventListener('click', () => {
        formulairemodifier.remove();
    });
}



// fonction qui afficher formulaire des joueurs pour ajouter au terrain
function affichageDeformulaireDeChoisir(btnChoisier, event) {
    target = event.currentTarget.querySelector('button');
    console.log(target);
    let placeterrain = document.getElementById(btnChoisier);
    let placeChoisissir = document.getElementById('formulairePourChoisir');
    placeChoisissir.classList.add('flex');

    let formulaireChoisir = document.createElement('div');
    formulaireChoisir.classList.add('bg-white', 'w-fit', 'h-fit', 'space-y-4', 'shadow-sm', 'shadow-white', 'text-white', 'flex', 'flex-row', 'gap-4');

    let filteredPlayerCards = '';


    function filtrerLesJoueurs(poste) {
        let posteOfPlayers = players.filter(player => player.position === poste);


        posteOfPlayers.forEach(player => {
            filteredPlayerCards += carteAvantAjouteDansLeTerrain(player);

        });

        return filteredPlayerCards;
    }


    formulaireChoisir.innerHTML = filtrerLesJoueurs(btnChoisier);

    placeChoisissir.appendChild(formulaireChoisir);
}


// fonction qui cree le carte dans le formulaire de choisir
function carteAvantAjouteDansLeTerrain(joueurfiltrer) {
    if (joueurfiltrer.position != 'GK') {
        let cartejoueur = `
      <div class="p-4 rounded-lg shadow text-center text-black space-y-2">
        <img src="${joueurfiltrer.photo}" alt="" class="w-full rounded-lg">
        <h3 class="text-xl font-semibold">${joueurfiltrer.name}</h3>
        <p class="text-sm text-gray-600">${joueurfiltrer.position}</p>
        <p class="text-sm text-gray-600">${joueurfiltrer.club}</p>
        <p class="font-bold text-lg">${joueurfiltrer.rating}</p>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between gap-2">
            <div class="flex flex-col">
              <span>PAC</span>
              <span>${joueurfiltrer.pace}</span>
            </div>
            <div class="flex flex-col">
              <span>SHO</span>
              <span>${joueurfiltrer.shooting}</span>
            </div>
            <div class="flex flex-col">
              <span>PAS</span>
              <span>${joueurfiltrer.passing}</span>
            </div>
            <div class="flex flex-col">
              <span>DRI</span>
              <span>${joueurfiltrer.dribbling}</span>
            </div>
            <div class="flex flex-col">
              <span>DEF</span>
              <span>${joueurfiltrer.defending}</span>
            </div>
            <div class="flex flex-col">
              <span>PHY</span>
              <span>${joueurfiltrer.physical}</span>
            </div>
          </div>
          <div class="flex flex-row gap-2 justify-center items-center">
            <img src="${joueurfiltrer.flag}" class="w-10 h-7" alt="flag">
            <img src="${joueurfiltrer.logo}" class="w-10 h-10" alt="club logo">
          </div>
        </div>
        <div class="flex space-x-2 justify-center">
          <button onclick="remplaceDansLeTerrain('${joueurfiltrer.name}')" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
    Ajouter un joueur
</button>
        </div>
      </div>`;
        return cartejoueur;
    }
    else {
        let cartejoueur = `
      <div class="p-4 rounded-lg shadow text-center text-black space-y-2">
        <img src="${joueurfiltrer.photo}" alt="" class="w-full rounded-lg">
        <h3 class="text-xl font-semibold">${joueurfiltrer.name}</h3>
        <p class="text-sm text-gray-600">${joueurfiltrer.position}</p>
        <p class="text-sm text-gray-600">${joueurfiltrer.club}</p>
        <p class="font-bold text-lg">${joueurfiltrer.rating}</p>
        <div class="flex flex-col">
          <div class="flex flex-row justify-between gap-2">
            <div class="flex flex-col">
              <span>PAC</span>
              <span>${joueurfiltrer.kicking}</span>
            </div>
            <div class="flex flex-col">
              <span>SHO</span>
              <span>${joueurfiltrer.diving}</span>
            </div>
            <div class="flex flex-col">
              <span>PAS</span>
              <span>${joueurfiltrer.positioning}</span>
            </div>
            <div class="flex flex-col">
              <span>DRI</span>
              <span>${joueurfiltrer.handling}</span>
            </div>
            <div class="flex flex-col">
              <span>DEF</span>
              <span>${joueurfiltrer.speed}</span>
            </div>
            <div class="flex flex-col">
              <span>PHY</span>
              <span>${joueurfiltrer.reflexes}</span>
            </div>
          </div>
          <div class="flex flex-row gap-2 justify-center items-center">
            <img src="${joueurfiltrer.flag}" class="w-10 h-7" alt="flag">
            <img src="${joueurfiltrer.logo}" class="w-10 h-10" alt="club logo">
          </div>
        </div>
        <div class="flex space-x-2 justify-center">
          <button onclick="remplaceDansLeTerrain('${joueurfiltrer.name}')" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
    Ajouter un joueur
</button>
        </div>
      </div>`;
        return cartejoueur;
    }


}


// fonction qui fait cancel de formulaire de choisir
function suprimerLeformulairePourChoisir() {
    const divs = document.querySelector('.bg-white.w-fit.h-fit.space-y-4.shadow-sm.shadow-white.text-white.flex.flex-row.gap-4');
    const formulaire = document.getElementById('formulairePourChoisir');


    if (formulaire) {
        formulaire.classList.remove('flex');
    } else {
        console.log("flase");
    }

    if (divs) {
        divs.remove();
    } else {
        alert("Aucun élément avec la classe spécifiée n'a été trouvé.");
    }
}


//fonction qui remplace le joueur dans le terrain 
function remplaceDansLeTerrain(namepourjouer) {
    const joueur = findLeJoueur(namepourjouer);
    remplaceDansLeTableauDeTerrain(joueur.position, joueur);
    console.log(JoueursTerrain);
    suprimerLeformulairePourChoisir();
}


// Fonction pour trouver un joueur dans le tableau
function findLeJoueur(nameJoueur) {
    const trouve = players.find(player => player.name === nameJoueur);
    console.log("Recherche du joueur :", nameJoueur);
    console.log(trouve);
    if (trouve) {
        return trouve;
    } else {
        console.log("Aucun joueur trouvé avec ce nom.");
        return null;
    }
}


// fonction qui remplace les joueurs dans le tabeau de joueurs qui va jouer
function remplaceDansLeTableauDeTerrain(ps, playerInfo) {
    const set = JoueursTerrain.find(locat => locat.position === ps);
    
    if (set) {
        if(set.position != 'GK'){
        set.name = playerInfo.name;
        set.photo = playerInfo.photo;
        set.nationality = playerInfo.nationality;
        set.flag = playerInfo.flag;
        set.club = playerInfo.club;
        set.logo = playerInfo.logo;
        set.rating = playerInfo.rating;
        set.pace = playerInfo.pace;
        set.shooting = playerInfo.shooting;
        set.passing = playerInfo.passing;
        set.dribbling = playerInfo.dribbling;
        set.defending = playerInfo.defending;
        set.physical = playerInfo.physical;
    }
    else {
        set.name = playerInfo.name;
        set.photo = playerInfo.photo;
        set.nationality = playerInfo.nationality;
        set.flag = playerInfo.flag;
        set.club = playerInfo.club;
        set.logo = playerInfo.logo;
        set.diving = playerInfo.diving;
        set.kicking= playerInfo.kicking;
        set.speed = playerInfo.speed;
        set.reflexes = playerInfo.reflexes;
        set.positioning = playerInfo.positioning;
        set.handling= playerInfo.handling;
        set.dribbling = playerInfo.dribbling;
    }
        createlejoueurdansleTerrain(ps,`btnajouter${ps}`,set);
    }
}


//fonction qui cree le joueur dans le terrain 
function createlejoueurdansleTerrain(psenterain, btnChoisierajoute, jr) {
    let placer = document.getElementById(`${btnChoisierajoute}`);


    let img = target.querySelector('img');
    if (img) {
        img.remove();
    }
    //     let rept = placer.querySelector('button .bg-white.h-14.w-14.rounded-full.shadow.text-center.space-y-2');
    // if(rept){
    //     rept.remove();
    // }


    let creationdediv = document.createElement('div');

    if (psenterain != 'GK') {
        creationdediv.innerHTML = `
        <div class="bg-white h-14 w-14 rounded-full shadow text-center space-y-2">
            <div>
                <img src="${jr.photo}" alt="${jr.name}" class="w-full rounded-full" 
                    onmouseover="hello('${jr.name}')" onmouseout="outmove('${jr.name}')">
            </div>
            <div id="helo${jr.name}" class="absolute hidden rounded-lg bg-white p-4 shadow text-center space-y-2">
                <h3 class="text-xl font-semibold">${jr.name}</h3>
                <p class="text-sm text-gray-600">${jr.position}</p>
                <p class="text-sm text-gray-600">${jr.club}</p>
                <p class="font-bold text-lg">${jr.rating}</p>
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between gap-2">
                        <div class="flex flex-col">
                            <span>PAC</span>
                            <span>${jr.pace}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SHO</span>
                            <span>${jr.shooting}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PAS</span>
                            <span>${jr.passing}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DRI</span>
                            <span>${jr.dribbling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DEF</span>
                            <span>${jr.defending}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PHY</span>
                            <span>${jr.physical}</span>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 justify-center items-center">
                        <img src="${jr.flag}" class="w-10 h-7" alt="">
                        <img src="${jr.logo}" class="w-10 h-10" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;
    }
    else {
        creationdediv.innerHTML = `
        <div class="bg-white h-14 w-14 rounded-full shadow text-center space-y-2">
            <div>
                <img src="${jr.photo}" alt="${jr.name}" class="w-full rounded-full" 
                    onmouseover="hello('${jr.name}')" onmouseout="outmove('${jr.name}')">
            </div>
            <div id="helo${jr.name}" class="absolute hidden rounded-lg bg-white p-4 shadow text-center space-y-2">
                <h3 class="text-xl font-semibold">${jr.name}</h3>
                <p class="text-sm text-gray-600">${jr.position}</p>
                <p class="text-sm text-gray-600">${jr.club}</p>
                <p class="font-bold text-lg">${jr.rating}</p>
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between gap-2">
                        <div class="flex flex-col">
                            <span>PAC</span>
                            <span>${jr.kicking}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SHO</span>
                            <span>${jr.positioning}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PAS</span>
                            <span>${jr.diving}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DRI</span>
                            <span>${jr.handling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DEF</span>
                            <span>${jr.reflexes}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PHY</span>
                            <span>${jr.dribbling}</span>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 justify-center items-center">
                        <img src="${jr.flag}" class="w-10 h-7" alt="">
                        <img src="${jr.logo}" class="w-10 h-10" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;
        console.log('hh')
    }


    target.innerHTML = '';

    target.appendChild(creationdediv);


    window.hello = function (name) {
        document.getElementById('helo' + name).classList.remove('hidden');
    };

    window.outmove = function (name) {
        document.getElementById('helo' + name).classList.add('hidden');
    };
}


// fonction suprimer un joueur
function del(delplayer) {

    let index = players.findIndex(player => player.name === delplayer);
    if (index !== -1) {
        suprimerLaffichageDeToutlesjoueurs();
        players.splice(index, 1);

        affichageToutLesJoueurs();

    }
}


// fonction actualiser l affichage de  formulaire de tout les joueurs exactement suprimer  l affichage de tout les joueurs 
function suprimerLaffichageDeToutlesjoueurs() {
    const placedafichage = document.getElementById('placeAfichageToutLesJoueurs');
    const supri = placedafichage.querySelectorAll('div');


    supri.forEach(element => {
        element.remove();
    });
}
