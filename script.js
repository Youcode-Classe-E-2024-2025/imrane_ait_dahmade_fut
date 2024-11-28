

const boxafichage = document.getElementById('afichageToutJoueur');
function affichage(){
    players.forEach(plr => {
        
    let box = document.createElement('div');
    box.classList ="relative pb-3 bg-gray-800 w-32 h-40  rounded-lg shadow-lg overflow-hidden flex justify-center items-center";
    boxafichage.appendChild(box);
    box.innerHTML =`<div class="rounded-lg h-full flex flex-col items-center justify-center text-white">
                        <img class="w-16 h-16 rounded-full mb-2" src="${plr.photo}"
                            alt="Lionel Messi">
                        <span class="text-sm font-semibold">${plr.name}</span>
                        <div class="flex flex-row gap-2 mt-2">
                            <div
                                class="w-6 h-6 bg-slate-500 text-white rounded-full flex justify-center items-center text-xs">
                                ${plr.rating}</div>
                            <div
                                class="w-6 h-6 bg-slate-500 text-white rounded-full flex justify-center items-center text-xs">
                                ${plr.position} </div>
                        </div>
                    </div>`;
                    

    });


}





