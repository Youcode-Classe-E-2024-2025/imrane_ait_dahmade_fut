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
        name: "N'Golo Kanté",
        photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
        position: "CDM",
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
console.log(players.length)
let playersGK = players.filter(({ position }) => position === "GK");
let playersLB = players.filter(({ position }) => position === "LB");
let playersRB = players.filter(({ position }) => position === "RB");
let playersCB = players.filter(({ position }) => position === "CB");
let playersCM = players.filter(({ position }) => position === "CM");
let playersST = players.filter(({ position }) => position === "ST");
let playersRW = players.filter(({ position }) => position === "RW");
let playersLW = players.filter(({ position }) => position === "LW");

const boxafichage = document.getElementById('PlaceAffichageToutPlayers');

function affichage(playerst) {
    // Vider l'affichage avant de recréer la liste
    boxafichage.innerHTML = '';

    playerst.forEach((plr, index) => {
        let box = document.createElement('div');
        box.classList = "bg-white p-4 rounded-lg shadow text-center space-y-2";

        // Add data-index to buttons for later use
        if (plr.position == "GK") {
            box.innerHTML = `
            <img src="${plr.photo}" alt="${plr.name}" class="rounded-lg">
            <h3 class="text-xl font-semibold">${plr.name}</h3>
            <p class="text-sm text-gray-600">${plr.position}</p>
            <p class="text-sm text-gray-600">${plr.club}</p>
            <p class="font-bold text-lg">${plr.rating}</p>
            <div class="flex flex-col">
                <div class="flex flex-row justify-between gap-3">
                    <div class="flex flex-col">
                        <span>PAC</span>
                        <span>${plr.diving}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>SHO</span>
                        <span>${plr.handling}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PAS</span>
                        <span>${plr.kicking}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DRI</span>
                        <span>${plr.speed}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DEF</span>
                        <span>${plr.positioning}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PHY</span>
                        <span>${plr.reflexes}</span>
                    </div>
                </div>
                <div class="flex flex-row gap-2 justify-center items-center mt-2">
                    <img src="${plr.flag}" class="w-10 h-7" alt="Flag of ${plr.nationality}">
                    <img src="${plr.logo}" class="w-10 h-10" alt="${plr.flag}">
                </div>
            </div>
            <div class="flex space-x-2 justify-center mt-4">
                <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" data-index="${index}">
                    Modifier
                </button>
                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" data-index="${index}">
                    Supprimer
                </button>
            </div>
            `;
        } else {
            box.innerHTML = `
            <img src="${plr.photo}" alt="${plr.name}" class="rounded-lg">
            <h3 class="text-xl font-semibold">${plr.name}</h3>
            <p class="text-sm text-gray-600">${plr.position}</p>
            <p class="text-sm text-gray-600">${plr.club}</p>
            <p class="font-bold text-lg">${plr.rating}</p>
            <div class="flex flex-col">
                <div class="flex flex-row justify-between gap-3">
                    <div class="flex flex-col">
                        <span>PAC</span>
                        <span>${plr.pace}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>SHO</span>
                        <span>${plr.shooting}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PAS</span>
                        <span>${plr.passing}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DRI</span>
                        <span>${plr.dribbling}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>DEF</span>
                        <span>${plr.defending}</span>
                    </div>
                    <div class="flex flex-col">
                        <span>PHY</span>
                        <span>${plr.physical}</span>
                    </div>
                </div>
                <div class="flex flex-row gap-2 justify-center items-center mt-2">
                    <img src="${plr.flag}" class="w-10 h-7" alt="Flag of ${plr.nationality}">
                    <img src="https://via.placeholder.com/50" class="w-10 h-10" alt="${plr.club}">
                </div>
            </div>
            <div class="flex space-x-2 justify-center mt-4">
                <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" data-index="${index}">
                    Modifier
                </button>
                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" data-index="${index}">
                    Supprimer
                </button>
            </div>
            `;
        }

        boxafichage.appendChild(box);
    });

    // Event delegation for the dynamically created buttons
    boxafichage.addEventListener('click', function (event) {
        // Check if the clicked element is a 'Modifier' button
        if (event.target && event.target.matches('button.bg-yellow-500')) {
            const index = event.target.dataset.index;
            editPlayer(index);
        }

        // Check if the clicked element is a 'Supprimer' button
        if (event.target && event.target.matches('button.bg-red-500')) {
            const index = event.target.dataset.index;
            deletePlayer(index);
        }
    });

    function deletePlayer(index) {
        // Supprimer le joueur de la liste
        playerst.splice(index, 1);
    
        // Mettre à jour l'affichage
        affichage(playerst);
    }

    function editPlayer(index) {
        // Your logic to edit player goes here
        console.log("Editing player at index: " + index);
    }
}


affichage(players);
document.getElementById('addJoueur').addEventListener('click', (e) => {
    // e.preventDefault();
    const nameplayer = document.getElementById('name').value.trim();
    const positionplayer = document.getElementById('position').value.trim();
    const nationalityplayer = document.getElementById('nationality').value.trim();
    const clubplayer = document.getElementById('club').value.trim();
    const ratingplayer = parseInt(document.getElementById('rating').value.trim());
    const paceplayer = parseInt(document.getElementById('pace').value.trim());
    const shootingplayer = parseInt(document.getElementById('shooting').value.trim());
    const passingplayer = parseInt(document.getElementById('passing').value.trim());
    const dribblingplayer = parseInt(document.getElementById('dribbling').value.trim());
    const defendingplayer = parseInt(document.getElementById('defending').value.trim());
    const physicalplayer = parseInt(document.getElementById('physical').value.trim());
    const photoplayer = document.getElementById('photo').value.trim();

    // Création de l'objet joueur
    let player = {
        name: nameplayer,
        position: positionplayer,
        nationality: nationalityplayer,
        club: clubplayer,
        rating: ratingplayer,
        pace: paceplayer,
        shooting: shootingplayer,
        passing: passingplayer,
        dribbling: dribblingplayer,
        defending: defendingplayer,
        physical: physicalplayer,
        photo: photoplayer,
    };
    players.push(player);
    affichage(players);

    // affichageDansTerrain(ST,playersST);
})
const LW = document.getElementById('LW');
const ST = document.getElementById('ST');
const RW = document.getElementById('RW');
const CM1 = document.getElementById('CM1');
const CM2 = document.getElementById('CM2');
const CM3 = document.getElementById('CM3');
const LB = document.getElementById('LB');
const CB1 = document.getElementById('CB1');
const CB2 = document.getElementById('CB2');
const RB = document.getElementById('RB');
const GK = document.getElementById('GK');

function affichageDansTerrain(position, playersposition) {
    const partie = document.getElementById('partie');

    // Affiche ou masque le conteneur
    partie.classList.toggle('hidden');

    // Nettoie le contenu existant
    partie.innerHTML = '';



    // Affiche les joueurs filtrés
    playersposition.forEach((plr, index) => {
        let box = document.createElement('div');
        box.classList = "bg-white p-4 rounded-lg shadow text-center space-y-2";
        if (plr.position == "GK") {
            box.innerHTML = `
                <img src="${plr.photo}" alt="${plr.name}" class=" rounded-lg">
                <h3 class="text-xl font-semibold">${plr.name}</h3>
                <p class="text-sm text-gray-600">${plr.position}</p>
                <p class="text-sm text-gray-600">${plr.club}</p>
                <p class="font-bold text-lg">${plr.rating}</p>
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <span>PAC</span>
                            <span>${plr.diving}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SHO</span>
                            <span>${plr.handling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PAS</span>
                            <span>${plr.kicking}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DRI</span>
                            <span>${plr.speed}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DEF</span>
                            <span>${plr.positioning}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PHY</span>
                            <span>${plr.reflexes}</span>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 justify-center items-center mt-2">
                        <img src="${plr.flag}" class="w-10 h-7" alt="Flag of ${plr.nationality}">
                        <img src="${plr.logo}" class="w-10 h-10" alt="${plr.flag}">
                    </div>
                </div>
                <div class="flex space-x-2 justify-center mt-4">
                    <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onclick="addPlayer(${index})">
                        ajouter au terrain
                    </button>              
                </div>
            `;
        }
        else {
            box.innerHTML = `
                <img src="${plr.photo}" alt="${plr.name}" class=" rounded-lg">
                <h3 class="text-xl font-semibold">${plr.name}</h3>
                <p class="text-sm text-gray-600">${plr.position}</p>
                <p class="text-sm text-gray-600">${plr.club}</p>
                <p class="font-bold text-lg">${plr.rating}</p>
                <div class="flex flex-col">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <span>PAC</span>
                            <span>${plr.pace}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SHO</span>
                            <span>${plr.shooting}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PAS</span>
                            <span>${plr.passing}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DRI</span>
                            <span>${plr.dribbling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DEF</span>
                            <span>${plr.defending}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PHY</span>
                            <span>${plr.physical}</span>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 justify-center items-center mt-2">
                        <img src="${plr.flag}" class="w-10 h-7" alt="Flag of ${plr.nationality}">
                        <img src="https://via.placeholder.com/50" class="w-10 h-10" alt="${plr.club}">
                    </div>
                </div>
                   <div class="flex space-x-2 justify-center mt-4">
                    <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" onclick="addPlayer(${index})">
                        ajouter au terrain
                    </button>              
                </div>
            `;

        }

        partie.appendChild(box);
        
       
    });
  
        console.log(position);
   


    if (playersposition.length === 0) {
        let message = document.createElement('p');
        message.classList = "text-center text-gray-600";
        message.innerText = "Aucun joueur disponible pour cette position.";
        partie.appendChild(message);
    }


}

function hello(position) {
    position.classList.remove('hidden');
}
function outmove(position) {
    position.classList.add('hidden');
}
