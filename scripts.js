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
        { id: `${weapon}SlateProgress`, requiredKills: 100, canvasId: `${weapon}SlateCanvas`},
        { id: `${weapon}DesertProgress`, requiredKills: 200, canvasId: `${weapon}DesertCanvas`},
        { id: `${weapon}EvergreenProgress`, requiredKills: 300, canvasId: `${weapon}EvergreenCanvas`},
        { id: `${weapon}RuggedProgress`, requiredKills: 400, canvasId: `${weapon}RuggedCanvas`},
        { id: `${weapon}GrimProgress`, requiredKills: 600, canvasId: `${weapon}GrimCanvas`},
        { id: `${weapon}StripeProgress`, requiredKills: 800, canvasId: `${weapon}StripeCanvas`},
        { id: `${weapon}OceanicProgress`, requiredKills: 1000, canvasId: `${weapon}OceanicCanvas`},
        { id: `${weapon}WhiteoutProgress`, requiredKills: 1500, canvasId: `${weapon}WhiteoutCanvas`},
        { id: `${weapon}PurpleTigerProgress`, requiredKills: 2000, canvasId: `${weapon}PurpleTigerCanvas`},
    ];
    // Update Military Camo Progress
    militaryCamoRequirements.forEach(camo => {
        const progressElement = document.getElementById(camo.id);
        const canvas = document.getElementById(camo.canvasId);
        if (completedKills >= camo.requiredKills) {
            progressElement.textContent = ` - Progress: Completed`;
        } else {
            progressElement.textContent = ` - Progress: ${completedKills} / ${camo.requiredKills}`;
        }
        createProgressChart(canvas, completedKills, camo.requiredKills);
    });
}

//Special Camo Requirements
const specialCamoRequirements = {
    xm4: [
        { id: 'xm4Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `xm4Special1Canvas`},
        { id: 'xm4Special2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `xm4Special2Canvas`},
    ],
    ak74: [
        { id: 'ak74Special1Progress', requiredKills: 15, specialKey: 'special1Kills', canvasId: `ak74Special1Canvas`},
        { id: 'ak74Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `ak74Special2Canvas`},
    ],
    ames85: [
        { id: 'ames85Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `ames85Special1Canvas`},
        { id: 'ames85Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `ames85Special2Canvas`},
    ],
    gpr91: [
        { id: 'gpr91Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `gpr91Special1Canvas`},
        { id: 'gpr91Special2Progress', requiredKills: 100, specialKey: 'special2Kills', canvasId: `gpr91Special2Canvas`},
    ],
    modell: [
        { id: 'modellSpecial1Progress', requiredKills: 75, specialKey: 'special1Kills', canvasId: `modellSpecial1Canvas`},
        { id: 'modellSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `modellSpecial2Canvas`},
    ],
    goblinmk2: [
        { id: 'goblinmk2Special1Progress', requiredKills: 10, specialKey: 'special1Kills', canvasId: `goblinmk2Special1Canvas`},
        { id: 'goblinmk2Special2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `goblinmk2Special2Canvas`},
    ],
    asval: [
        { id: 'asvalSpecial1Progress', requiredKills: 30, specialKey: 'special1Kills', canvasId: `asvalSpecial1Canvas`},
        { id: 'asvalSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `asvalSpecial2Canvas`},
    ],
    krigc: [
        { id: 'krigcSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `krigcSpecial1Canvas`},
        { id: 'krigcSpecial2Progress', requiredKills: 100, specialKey: 'special2Kills', canvasId: `krigcSpecial2Canvas`},
    ],
    c9: [
        { id: 'c9Special1Progress', requiredKills: 30, specialKey: 'special1Kills', canvasId: `c9Special1Canvas`},
        { id: 'c9Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `c9Special2Canvas`},
    ],
    ksv: [
        { id: 'ksvSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `ksvSpecial1Canvas`},
        { id: 'ksvSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `ksvSpecial2Canvas`},
    ],
    tanto22: [
        { id: 'tanto22Special1Progress', requiredKills: 15, specialKey: 'special1Kills', canvasId: `tanto22Special1Canvas`},
        { id: 'tanto22Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `tanto22Special2Canvas`},
    ],
    pp919: [
        { id: 'pp919Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `pp919Special1Canvas`},
        { id: 'pp919Special2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `pp919Special2Canvas`},
    ],
    jackalpdw: [
        { id: 'jackalpdwSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `jackalpdwSpecial1Canvas`},
        { id: 'jackalpdwSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `jackalpdwSpecial2Canvas`},
    ],
    kompakt92: [
        { id: 'kompakt92Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `kompakt92Special1Canvas`},
        { id: 'kompakt92Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `kompakt92Special2Canvas`},
    ],
    saug: [
        { id: 'saugSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `saugSpecial1Canvas`},
        { id: 'saugSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `saugSpecial2Canvas`},
    ],
    marinesp: [
        { id: 'marinespSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `marinespSpecial1Canvas`},
        { id: 'marinespSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `marinespSpecial2Canvas`},
    ],
    asg89: [
        { id: 'asg89Special1Progress', requiredKills: 100, specialKey: 'special1Kills', canvasId: `asg89Special1Canvas`},
        { id: 'asg89Special2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `asg89Special2Canvas`},
    ],
    pu21: [
        { id: 'pu21Special1Progress', requiredKills: 10, specialKey: 'special1Kills', canvasId: `pu21Special1Canvas`},
        { id: 'pu21Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `pu21Special2Canvas`},
    ],
    xmg: [
        { id: 'xmgSpecial1Progress', requiredKills: 15, specialKey: 'special1Kills', canvasId: `xmgSpecial1Canvas`},
        { id: 'xmgSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `xmgSpecial2Canvas`},
    ],
    gpmg7: [
        { id: 'gpmg7Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `gpmg7Special1Canvas`},
        { id: 'gpmg7Special2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `gpmg7Special2Canvas`},
    ],
    swat556: [
        { id: 'swat556Special1Progress', requiredKills: 100, specialKey: 'special1Kills', canvasId: `swat556Special1Canvas`},
        { id: 'swat556Special2Progress', requiredKills: 75, specialKey: 'special2Kills', canvasId: `swat556Special2Canvas`},
    ],
    tsarkov762: [
        { id: 'tsarkov762Special1Progress', requiredKills: 100, specialKey: 'special1Kills', canvasId: `tsarkov762Special1Canvas`},
        { id: 'tsarkov762Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `tsarkov762Special2Canvas`},
    ],
    aek973: [
        { id: 'aek973Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `aek973Special1Canvas`},
        { id: 'aek973Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `aek973Special2Canvas`},
    ],
    dm10: [
        { id: 'dm10Special1Progress', requiredKills: 15, specialKey: 'special1Kills', canvasId: `dm10Special1Canvas`},
        { id: 'dm10Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `dm10Special2Canvas`},
    ],
    lw3a1frostline: [
        { id: 'lw3a1frostlineSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `lw3a1frostlineSpecial1Canvas`},
        { id: 'lw3a1frostlineSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `lw3a1frostlineSpecial2Canvas`},
    ],
    svd: [
        { id: 'svdSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `svdSpecial1Canvas`},
        { id: 'svdSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `svdSpecial2Canvas`},
    ],
    lr762: [
        { id: 'lr762Special1Progress', requiredKills: 10, specialKey: 'special1Kills', canvasId: `lr762Special1Canvas`},
        { id: 'lr762Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `lr762Special2Canvas`},
    ],
    mmpm: [
        { id: 'mmpmSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `mmpmSpecial1Canvas`},
        { id: 'mmpmSpecial2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `mmpmSpecial2Canvas`},
    ],
    grekhova: [
        { id: 'grekhovaSpecial1Progress', requiredKills: 10, specialKey: 'special1Kills', canvasId: `grekhovaSpecial1Canvas`},
        { id: 'grekhovaSpecial2Progress', requiredKills: 15, specialKey: 'special2Kills', canvasId: `grekhovaSpecial2Canvas`},
    ],
    gs45: [
        { id: 'gs45Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `gs45Special1Canvas`},
        { id: 'gs45Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `gs45Special2Canvas`},
    ],
    stryder22: [
        { id: 'stryder22Special1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `stryder22Special1Canvas`},
        { id: 'stryder22Special2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `stryder22Special2Canvas`},
    ],
    cigma2b: [
        { id: 'cigma2bSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `cigma2bSpecial1Canvas`},
        { id: 'cigma2bSpecial2Progress', requiredKills: 75, specialKey: 'special2Kills', canvasId: `cigma2bSpecial2Canvas`},
    ],
    he1: [
        { id: 'he1Special1Progress', requiredKills: 30, specialKey: 'special1Kills', canvasId: `he1Special1Canvas`},
        { id: 'he1Special2Progress', requiredKills: 300, specialKey: 'special2Kills', canvasId: `he1Special2Canvas`},
    ],
    sirin9mm: [
        { id: 'sirin9mmSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `sirin9mmSpecial1Canvas`},
        { id: 'sirin9mmSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `sirin9mmSpecial2Canvas`},
    ],
    knife: [
        { id: 'knifeSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `knifeSpecial1Canvas`},
        { id: 'knifeSpecial2Progress', requiredKills: 75, specialKey: 'special2Kills', canvasId: `knifeSpecial2Canvas`},
    ],
    baseballbat: [
        { id: 'baseballbatSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `baseballbatSpecial1Canvas`},
        { id: 'baseballbatSpecial2Progress', requiredKills: 30, specialKey: 'special2Kills', canvasId: `baseballbatSpecial2Canvas`},
    ],
    powerdrill: [
        { id: 'powerdrillSpecial1Progress', requiredKills: 300, specialKey: 'special1Kills', canvasId: `powerdrillSpecial1Canvas`},
        { id: 'powerdrillSpecial2Progress', requiredKills: 10, specialKey: 'special2Kills', canvasId: `powerdrillSpecial2Canvas`},
    ],
}


//Function to Update Camo Progress for Specials
function updateSpecialCamoProgress(weapon, specialCamoNum, completedKills) {
    const specialCamo = specialCamoRequirements[weapon][specialCamoNum-1];
    const progressElement = document.getElementById(specialCamo.id);
    const canvas = document.getElementById(specialCamo.canvasId);
    if (completedKills >= specialCamo.requiredKills) {
        progressElement.textContent = ` - Progress: Completed`;
    } else {
        progressElement.textContent = ` - Progress: ${completedKills} / ${specialCamo.requiredKills}`;
    }
    createProgressChart(canvas, completedKills, specialCamo.requiredKills);
}

// Function to Update Camo Progress for Mastery Camos
function updateMasteryCamoProgress(weapon, camoNum, completedKills) {
    const masteryCamoRequirements = [
        { id: `${weapon}Mastery1Progress`, requiredKills: 15, canvasId: `${weapon}Mastery1Canvas`},
        { id: `${weapon}Mastery2Progress`, requiredKills: 30, canvasId: `${weapon}Mastery2Canvas`},
        { id: `${weapon}Mastery3Progress`, requiredKills: 10, canvasId: `${weapon}Mastery3Canvas`},
        { id: `${weapon}Mastery4Progress`, requiredKills: 10, canvasId: `${weapon}Mastery4Canvas`},
    ];

    // Update Mastery Camo Progress
    const camo = masteryCamoRequirements[camoNum - 1];
    const progressElement = document.getElementById(camo.id);
    const canvas = document.getElementById(camo.canvasId);
    if (completedKills >= camo.requiredKills) {
        progressElement.textContent = ` - Progress: Completed`;
    } else {
        progressElement.textContent = ` - Progress: ${completedKills} / ${camo.requiredKills}`;
    }
    createProgressChart(canvas, completedKills, camo.requiredKills);
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
        updateSpecialCamoProgress(weapon, specialCamoNum, parseInt(savedKills));
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

//Weapons
const weapons = [
    'xm4', 'ak74', 'ames85', 'gpr91', 'modell', 'goblinmk2', 'asval', 'krigc', 
    'c9', 'ksv', 'tanto22', 'pp919', 'jackalpdw', 'kompakt92', 'saug', 
    'marinesp', 'asg89',
    'pu21', 'xmg', 'gpmg7',
    'swat556', 'tsarkov762', 'aek973', 'dm10',
    'lw3a1frostline', 'svd', 'lr762',
    'mmpm', 'grekhova', 'gs45', 'stryder22',
    'cigma2b', 'he1', 
    'sirin9mm', 
    'knife', 'baseballbat', 'powerdrill'
];

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

//Create Progress Chart
function createProgressChart(canvas, completedKills, requiredKills) {
    canvas.width = 50;
    canvas.height = 50;
    
    const percentageComplete = Math.min((completedKills / requiredKills) * 100, 100);
    
    const existingChart = Chart.getChart(canvas);
    if (existingChart) {
        existingChart.destroy();
    }
    
    return new Chart(canvas, {
        type: 'pie',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [percentageComplete, 100 - percentageComplete],
                backgroundColor: ['#4cbb17', '#a45a52'],
                borderColor: '#000000',
                borderWidth: 1,
            }]
        },
        options: {
            responsive: false,
            plugins: {
                legend: {
                    position: 'hidden'
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
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

//Onload retrieve localStorage
window.onload = () => {
    weapons.forEach(weapon => loadAll(weapon));
}