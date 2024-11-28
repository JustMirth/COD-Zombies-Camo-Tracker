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
    ames85: [
        { id: 'ames85Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'ames85Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    gpr91: [
        { id: 'gpr91Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'gpr91Special2Progress', requiredKills: 100, specialKey: 'special2Kills' },
    ],
    modell: [
        { id: 'modellSpecial1Progress', requiredKills: 75, specialKey: 'special1Kills' },
        { id: 'modellSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    goblinmk2: [
        { id: 'goblinmk2Special1Progress', requiredKills: 10, specialKey: 'special1Kills' },
        { id: 'goblinmk2Special2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    asval: [
        { id: 'asvalSpecial1Progress', requiredKills: 30, specialKey: 'special1Kills' },
        { id: 'asvalSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    krigc: [
        { id: 'krigcSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'krigcSpecial2Progress', requiredKills: 100, specialKey: 'special2Kills' },
    ],
    c9: [
        { id: 'c9Special1Progress', requiredKills: 30, specialKey: 'special1Kills' },
        { id: 'c9Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    ksv: [
        { id: 'ksvSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'ksvSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    tanto22: [
        { id: 'tanto22Special1Progress', requiredKills: 15, specialKey: 'special1Kills' },
        { id: 'tanto22Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    pp919: [
        { id: 'pp919Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'pp919Special2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    jackalpdw: [
        { id: 'jackalpdwSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'jackalpdwSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    kompakt92: [
        { id: 'kompakt92Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'kompakt92Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    saug: [
        { id: 'saugSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'saugSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    marinesp: [
        { id: 'marinespSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'marinespSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    asg89: [
        { id: 'asg89Special1Progress', requiredKills: 100, specialKey: 'special1Kills' },
        { id: 'asg89Special2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    pu21: [
        { id: 'pu21Special1Progress', requiredKills: 10, specialKey: 'special1Kills' },
        { id: 'pu21Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    xmg: [
        { id: 'xmgSpecial1Progress', requiredKills: 15, specialKey: 'special1Kills' },
        { id: 'xmgSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    gpmg7: [
        { id: 'gpmg7Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'gpmg7Special2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    swat556: [
        { id: 'swat556Special1Progress', requiredKills: 100, specialKey: 'special1Kills' },
        { id: 'swat556Special2Progress', requiredKills: 75, specialKey: 'special2Kills' },
    ],
    tsarkov762: [
        { id: 'tsarkov762Special1Progress', requiredKills: 100, specialKey: 'special1Kills' },
        { id: 'tsarkov762Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    aek973: [
        { id: 'aek973Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'aek973Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    dm10: [
        { id: 'dm10Special1Progress', requiredKills: 15, specialKey: 'special1Kills' },
        { id: 'dm10Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    lw3a1frostline: [
        { id: 'lw3a1frostlineSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'lw3a1frostlineSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    svd: [
        { id: 'svdSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'svdSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    lr762: [
        { id: 'lr762Special1Progress', requiredKills: 10, specialKey: 'special1Kills' },
        { id: 'lr762Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    mmpm: [
        { id: 'mmpmSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'mmpmSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    grekhova: [
        { id: 'grekhovaSpecial1Progress', requiredKills: 10, specialKey: 'special1Kills' },
        { id: 'grekhovaSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills' },
    ],
    gs45: [
        { id: 'gs45Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'gs45Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    stryder22: [
        { id: 'stryder22Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'stryder22Special2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    cigma28: [
        { id: 'cigma28Special1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'cigma28Special2Progress', requiredKills: 75, specialKey: 'special2Kills' },
    ],
    he1: [
        { id: 'he1Special1Progress', requiredKills: 30, specialKey: 'special1Kills' },
        { id: 'he1Special2Progress', requiredKills: 300, specialKey: 'special2Kills' },
    ],
    sirin9mm: [
        { id: 'sirin9mmSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'sirin9mmSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    knife: [
        { id: 'knifeSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'knifeSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    baseballbat: [
        { id: 'baseballbatSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'baseballbatSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills' },
    ],
    powerdrill: [
        { id: 'powerdrillSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills' },
        { id: 'powerdrillSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills' },
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

//Weapons List
const weapons = [
    'xm4', 'ak74', 'ames85', 'gpr91', 'modell', 'goblinmk2', 'asval', 'krigc', 
    'c9', 'ksv', 'tanto22', 'pp919', 'jackalpdw', 'kompakt92', 'saug', 
    'marinesp', 'asg89',
    'pu21', 'xmg', 'gpmg7',
    'swat556', 'tsarkov762', 'aek973', 'dm10',
    'lw3a1frostline', 'svd', 'lr762',
    'mmpm', 'grekhova', 'gs45', 'stryder22',
    'cigma28', 'he1', 
    'sirin9mm', 
    'knife', 'baseballbat', 'powerdrill'
];

//Attach Buttons to Save Progress
function attachButtonListeners() {
    weapons.forEach(weapon => {
        // Military camo buttons
        document.getElementById(`save${weapon}ProgressButton`).addEventListener('click', () => saveWeaponProgress(weapon));
      
        // Special camo buttons (1 and 2)
        for (let i = 1; i <= 2; i++) {
            document.getElementById(`save${weapon}Special${i}ProgressButton`).addEventListener('click', () => saveSpecialCamoProgress(weapon, i));
        }
      
        // Mastery camo buttons (1 to 4)
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`save${weapon}Mastery${i}ProgressButton`).addEventListener('click', () => saveMasteryCamoProgress(weapon, i));
        }
    });
}
attachButtonListeners();

//On Page Load
function loadAll(weapon) {
    loadWeaponProgress(weapon); 
    loadSpecialCamoProgress(weapon, 1);
    loadSpecialCamoProgress(weapon, 2);
    loadMasteryCamoProgress(weapon, 1);
    loadMasteryCamoProgress(weapon, 2);
    loadMasteryCamoProgress(weapon, 3);
    loadMasteryCamoProgress(weapon, 4);
}

//Onload retrieve localStorage
window.onload = () => {
    weapons.forEach(weapon => loadAll(weapon));
}