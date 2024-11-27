//Function to Show hidden Camos
const expandButtons = document.querySelectorAll('.expandButton');
expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const camosDiv = button.nextElementSibling;
        camosDiv.classList.toggle('show');
    });
});

//Function to Update Camo Progress for Military
function updateWeaponCamoProgress(weapon, completedKills) {
    const militaryCamoRequirements = [
        { id: `${weapon}SlateProgress`, requiredKills: 100 },
        { id: `${weapon}DesertProgress`, requiredKills: 200 },
        { id: `${weapon}EvergreenProgress`, requiredKills: 300 },
        { id: `${weapon}RuggedProgress`, requiredKills: 400 },
        { id: `${weapon}GrimProgress`, requiredKills: 600 },
        { id: `${weapon}StripeProgress`, requiredKills: 800 },
        { id: `${weapon}OceanicProgress`, requiredKills: 1000 },
        { id: `${weapon}WhiteoutProgress`, requiredKills: 1500 },
        { id: `${weapon}PurpleTigerProgress`, requiredKills: 2000 },
    ];
    // Update Military Camo Progress
    militaryCamoRequirements.forEach(camo => {
        const progressElement = document.getElementById(camo.id);
        if (completedKills >= camo.requiredKills) {
            progressElement.textContent = `- Progress: Completed`;
        } else {
            progressElement.textContent = `- Progress: ${completedKills} / ${camo.requiredKills}`;
        }
    });
}

//Special Camo Requirements
const specialCamoRequirements = {
    xm4: [
        { id: 'xm4Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'xm4Special2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    ak74: [
        { id: 'ak74Special1Progress', requiredKills: 15, specialKey: 'special1Kills' },
        { id: 'ak74Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
};


//Function to Update Camo Progress for Specials
function updateSpecialCamoProgress(weapon, specialCamoNum, completedKills) {
    const specialCamo = specialCamoRequirements[weapon][specialCamoNum-1];
    const progressElement = document.getElementById(specialCamo.id);

    if (completedKills >= specialCamo.requiredKills) {
        progressElement.textContent = `- Progress: Completed`;
    } else {
        progressElement.textContent = `- Progress: ${completedKills} / ${specialCamo.requiredKills}`;
    }
}

//Save progress for Military
function saveWeaponProgress(weapon) {
    const completedKillsInput = document.getElementById(`${weapon}CompletedKills`);
    const completedKills = completedKillsInput.value;
    if (completedKills && completedKills >= 0) {
        localStorage.setItem(`${weapon}CompletedKills`, completedKills);
        updateWeaponCamoProgress(weapon, parseInt(completedKills));
    }
}

//Save progress for Specials
function saveSpecialCamoProgress(weapon, specialCamoNum) {
    const specialCamo = specialCamoRequirements[weapon][specialCamoNum-1];
    const completedKillsInput = document.getElementById(`${weapon}Special${specialCamoNum}Kills`);
    const completedKills = completedKillsInput.value;
    if (completedKills && completedKills >= 0) {
        localStorage.setItem(`${weapon}${specialCamo.specialKey}`, completedKills);
        updateSpecialCamoProgress(weapon, specialCamoNum, parseInt(completedKills));
    }
}

//Load stored progress from localStorage for Military
function loadWeaponProgress(weapon) {
    const savedKills = localStorage.getItem(`${weapon}CompletedKills`);
    if (savedKills) {
        const completedKillsInput = document.getElementById(`${weapon}CompletedKills`);
        completedKillsInput.value = savedKills;
        updateWeaponCamoProgress(weapon, parseInt(savedKills));
    }
}

//Load stored Progress from localStorage for Specials
function loadSpecialCamoProgress(weapon, specialCamoNum) {
    const specialCamo = specialCamoRequirements[weapon][specialCamoNum-1];
    const savedKills = localStorage.getItem(`${weapon}${specialCamo.specialKey}`);
    if (savedKills) {
        const completedKillsInput = document.getElementById(`${weapon}Special${specialCamoNum}Kills`);
        completedKillsInput.value = savedKills;
        updateSpecialCamoProgress(weapon, parseInt(localStorage.getItem(`${weapon}CompletedKills`)), specialKills);
    }
}


//Save Progress buttons for Militaries Camos
document.getElementById('savexm4ProgressButton').addEventListener('click', () => saveWeaponProgress('xm4'));
document.getElementById('saveak74ProgressButton').addEventListener('click', () => saveWeaponProgress('ak74'));

//Save Progress buttons for Special Camos
document.getElementById('savexm4Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('xm4', 1));
document.getElementById('saveak74Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ak74', 1));
document.getElementById('savexm4Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('xm4', 2));
document.getElementById('saveak74Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ak74', 2));

//Load progress for each weapon when the page is loaded
window.onload = () => {
    loadWeaponProgress('xm4');
    loadWeaponProgress('ak74');
    loadSpecialCamoProgress('xm4', 1);
    loadSpecialCamoProgress('xm4', 2);
    loadSpecialCamoProgress('ak74', 1);
    loadSpecialCamoProgress('ak74', 2);
}