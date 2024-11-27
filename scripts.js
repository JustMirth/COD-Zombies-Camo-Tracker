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
            progressElement.textContent = ` - Progress: Completed`;
        } else {
            progressElement.textContent = ` - Progress: ${completedKills} / ${camo.requiredKills}`;
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
}


//Function to Update Camo Progress for Specials
function updateSpecialCamoProgress(weapon, specialCamoNum, completedKills) {
    const specialCamo = specialCamoRequirements[weapon][specialCamoNum-1];
    const progressElement = document.getElementById(specialCamo.id);

    if (completedKills >= specialCamo.requiredKills) {
        progressElement.textContent = ` - Progress: Completed`;
    } else {
        progressElement.textContent = ` - Progress: ${completedKills} / ${specialCamo.requiredKills}`;
    }
}

// Function to Update Camo Progress for Mastery Camos
function updateMasteryCamoProgress(weapon, camoNum, completedKills) {
    const masteryCamoRequirements = [
        { id: `${weapon}Mastery1Progress`, requiredKills: 15},
        { id: `${weapon}Mastery2Progress`, requiredKills: 30},
        { id: `${weapon}Mastery3Progress`, requiredKills: 10},
        { id: `${weapon}Mastery4Progress`, requiredKills: 10},
    ];

    // Update Mastery Camo Progress
    const camo = masteryCamoRequirements[camoNum - 1];
    const progressElement = document.getElementById(camo.id);
    if (completedKills >= camo.requiredKills) {
        progressElement.textContent = ` - Progress: Completed (${completedKills} / ${camo.requiredKills})`;
    } else {
        progressElement.textContent = ` - Progress: ${completedKills} / ${camo.requiredKills}`;
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

// Function to Save Progress for Mastery
function saveMasteryCamoProgress(weapon, camoNum) {
    const completedKillsInput = document.getElementById(`${weapon}Mastery${camoNum}Kills`);
    const completedKills = completedKillsInput.value;
    if (completedKills && completedKills >= 0) {
        const key = `${weapon}Mastery${camoNum}Kills`;
        localStorage.setItem(key, completedKills);
        updateMasteryCamoProgress(weapon, camoNum, parseInt(completedKills));
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

//Load Stored Progress from localStorage for Mastery
function loadMasteryCamoProgress(weapon, camoNum) {
    const key = `${weapon}Mastery${camoNum}Kills`;
    const savedKills = localStorage.getItem(key);
    if (savedKills) {
        const completedKillsInput = document.getElementById(`${weapon}Mastery${camoNum}Kills`);
        completedKillsInput.value = savedKills;
        updateMasteryCamoProgress(weapon, camoNum, parseInt(savedKills));
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

//Save Progress buttons for Mastery Camos
document.getElementById('savexm4Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 1));
document.getElementById('savexm4Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 2));
document.getElementById('savexm4Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 3));
document.getElementById('savexm4Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 4));

document.getElementById('saveak74Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 1));
document.getElementById('saveak74Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 2));
document.getElementById('saveak74Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 3));
document.getElementById('saveak74Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 4));

//Load progress for Military
window.onload = () => {
    loadWeaponProgress('xm4');
    loadWeaponProgress('ak74');
}

//Load progress for Specials
window.onload = () => {
    loadSpecialCamoProgress('xm4', 1);
    loadSpecialCamoProgress('xm4', 2);
    
    loadSpecialCamoProgress('ak74', 1);
    loadSpecialCamoProgress('ak74', 2);
}

//Load progress for Mastery
window.onload = () => {
    loadMasteryCamoProgress('xm4', 1);
    loadMasteryCamoProgress('xm4', 2);
    loadMasteryCamoProgress('xm4', 3);
    loadMasteryCamoProgress('xm4', 4);
    
    loadMasteryCamoProgress('ak74', 1);
    loadMasteryCamoProgress('ak74', 2);
    loadMasteryCamoProgress('ak74', 3);
    loadMasteryCamoProgress('ak74', 4);
}