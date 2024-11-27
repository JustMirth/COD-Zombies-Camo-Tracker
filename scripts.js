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
    ],kompakt92: [
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

//Save Progress buttons for Militaries Camos
document.getElementById('savexm4ProgressButton').addEventListener('click', () => saveWeaponProgress('xm4'));
document.getElementById('saveak74ProgressButton').addEventListener('click', () => saveWeaponProgress('ak74'));
document.getElementById('saveames85ProgressButton').addEventListener('click', () => saveWeaponProgress('ames85'));
document.getElementById('savegpr91ProgressButton').addEventListener('click', () => saveWeaponProgress('gpr91'));
document.getElementById('savemodellProgressButton').addEventListener('click', () => saveWeaponProgress('modell'));
document.getElementById('savegoblinmk2ProgressButton').addEventListener('click', () => saveWeaponProgress('goblinmk2'));
document.getElementById('saveasvalProgressButton').addEventListener('click', () => saveWeaponProgress('asval'));
document.getElementById('savekrigcProgressButton').addEventListener('click', () => saveWeaponProgress('krigc'));
document.getElementById('savec9ProgressButton').addEventListener('click', () => saveWeaponProgress('c9'));
document.getElementById('saveksvProgressButton').addEventListener('click', () => saveWeaponProgress('ksv'));
document.getElementById('savetanto22ProgressButton').addEventListener('click', () => saveWeaponProgress('tanto22'));
document.getElementById('savepp919ProgressButton').addEventListener('click', () => saveWeaponProgress('pp919'));
document.getElementById('savejackalpdwProgressButton').addEventListener('click', () => saveWeaponProgress('jackalpdw'));
document.getElementById('savekompakt92ProgressButton').addEventListener('click', () => saveWeaponProgress('kompakt92'));
document.getElementById('savesaugProgressButton').addEventListener('click', () => saveWeaponProgress('saug'));

//Save Progress buttons for Special Camos
document.getElementById('savexm4Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('xm4', 1));
document.getElementById('savexm4Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('xm4', 2));

document.getElementById('saveak74Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ak74', 1));
document.getElementById('saveak74Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ak74', 2));

document.getElementById('saveames85Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ames85', 1));
document.getElementById('saveames85Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ames85', 2));

document.getElementById('savegpr91Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('gpr91', 1));
document.getElementById('savegpr91Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('gpr91', 2));

document.getElementById('savemodellSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('modell', 1));
document.getElementById('savemodellSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('modell', 2));

document.getElementById('savegoblinmk2Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('goblinmk2', 1));
document.getElementById('savegoblinmk2Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('goblinmk2', 2));

document.getElementById('saveasvalSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('asval', 1));
document.getElementById('saveasvalSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('asval', 2));

document.getElementById('savekrigcSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('krigc', 1));
document.getElementById('savekrigcSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('krigc', 2));

document.getElementById('savec9Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('c9', 1));
document.getElementById('savec9Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('c9', 2));

document.getElementById('saveksvSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ksv', 1));
document.getElementById('saveksvSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('ksv', 2));

document.getElementById('savetanto22Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('tanto22', 1));
document.getElementById('savetanto22Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('tanto22', 2));

document.getElementById('savepp919Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('pp919', 1));
document.getElementById('savepp919Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('pp919', 2));

document.getElementById('savejackalpdwSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('jackalpdw', 1));
document.getElementById('savejackalpdwSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('jackalpdw', 2));

document.getElementById('savekompakt92Special1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('kompakt92', 1));
document.getElementById('savekompakt92Special2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('kompakt92', 2));

document.getElementById('savesaugSpecial1ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('saug', 1));
document.getElementById('savesaugSpecial2ProgressButton').addEventListener('click', () => saveSpecialCamoProgress('saug', 2));

//Save Progress buttons for Mastery Camos
document.getElementById('savexm4Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 1));
document.getElementById('savexm4Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 2));
document.getElementById('savexm4Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 3));
document.getElementById('savexm4Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('xm4', 4));

document.getElementById('saveak74Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 1));
document.getElementById('saveak74Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 2));
document.getElementById('saveak74Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 3));
document.getElementById('saveak74Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ak74', 4));

document.getElementById('saveames85Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ames85', 1));
document.getElementById('saveames85Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ames85', 2));
document.getElementById('saveames85Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ames85', 3));
document.getElementById('saveames85Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ames85', 4));

document.getElementById('savegpr91Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('gpr91', 1));
document.getElementById('savegpr91Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('gpr91', 2));
document.getElementById('savegpr91Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('gpr91', 3));
document.getElementById('savegpr91Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('gpr91', 4));

document.getElementById('savemodellMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('modell', 1));
document.getElementById('savemodellMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('modell', 2));
document.getElementById('savemodellMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('modell', 3));
document.getElementById('savemodellMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('modell', 4));

document.getElementById('savegoblinmk2Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('goblinmk2', 1));
document.getElementById('savegoblinmk2Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('goblinmk2', 2));
document.getElementById('savegoblinmk2Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('goblinmk2', 3));
document.getElementById('savegoblinmk2Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('goblinmk2', 4));

document.getElementById('saveasvalMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('asval', 1));
document.getElementById('saveasvalMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('asval', 2));
document.getElementById('saveasvalMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('asval', 3));
document.getElementById('saveasvalMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('asval', 4));

document.getElementById('savekrigcMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('krigc', 1));
document.getElementById('savekrigcMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('krigc', 2));
document.getElementById('savekrigcMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('krigc', 3));
document.getElementById('savekrigcMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('krigc', 4));

document.getElementById('savec9Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('c9', 1));
document.getElementById('savec9Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('c9', 2));
document.getElementById('savec9Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('c9', 3));
document.getElementById('savec9Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('c9', 4));

document.getElementById('saveksvMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ksv', 1));
document.getElementById('saveksvMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ksv', 2));
document.getElementById('saveksvMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ksv', 3));
document.getElementById('saveksvMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('ksv', 4));

document.getElementById('savetanto22Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('tanto22', 1));
document.getElementById('savetanto22Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('tanto22', 2));
document.getElementById('savetanto22Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('tanto22', 3));
document.getElementById('savetanto22Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('tanto22', 4));

document.getElementById('savepp919Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('pp919', 1));
document.getElementById('savepp919Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('pp919', 2));
document.getElementById('savepp919Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('pp919', 3));
document.getElementById('savepp919Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('pp919', 4));

document.getElementById('savejackalpdwMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('jackalpdw', 1));
document.getElementById('savejackalpdwMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('jackalpdw', 2));
document.getElementById('savejackalpdwMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('jackalpdw', 3));
document.getElementById('savejackalpdwMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('jackalpdw', 4));

document.getElementById('savekompakt92Mastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('kompakt92', 1));
document.getElementById('savekompakt92Mastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('kompakt92', 2));
document.getElementById('savekompakt92Mastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('kompakt92', 3));
document.getElementById('savekompakt92Mastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('kompakt92', 4));

document.getElementById('savesaugMastery1ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('saug', 1));
document.getElementById('savesaugMastery2ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('saug', 2));
document.getElementById('savesaugMastery3ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('saug', 3));
document.getElementById('savesaugMastery4ProgressButton').addEventListener('click', () => saveMasteryCamoProgress('saug', 4));

//Onload retrieve localStorage
window.onload = () => {
    loadAll('xm4');
    loadAll('ak47');
    loadAll('ames85');
    loadAll('gpr91');
    loadAll('modell');
    loadAll('goblinmk2');
    loadAll('asval');
    loadAll('krigc');
    loadAll('c9');
    loadAll('ksv');
    loadAll('tanto22');
    loadAll('pp919');
    loadAll('jackalpdw');
    loadAll('kompakt92');
    loadAll('saug');
}