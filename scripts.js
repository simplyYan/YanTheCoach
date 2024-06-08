alert("An app developed independently by @simplyYan (Wesley Yan Soares Brehmer), under a CC0-1.0 license.")

document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activityLevel').value;
    var result = calculateIdealWeight(height, weight);

    const imc = result.bmi;
    const idealWeightRange = result.idealWeight;
    const leanMass = calculateLeanMass(weight, imc);
    const fatMass = calculateFatMass(weight, leanMass);
    const calories = calculateCalories(weight, height, age, activityLevel);
    const waterIntake = calculateWaterIntake(weight);

    displayResults(name, imc, idealWeightRange, calories, waterIntake, leanMass, fatMass);
});

function calculateIMC(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function calculateIdealWeight(height, weight) {
    height = height / 100; 
    var bmi = weight / Math.pow(height, 2);
    var minIdealWeight = 18.5 * Math.pow(height, 2);
    var maxIdealWeight = 24.9 * Math.pow(height, 2);
    
    return { 
        bmi: bmi.toFixed(2),
        idealWeight: [minIdealWeight.toFixed(2), maxIdealWeight.toFixed(2)]
    };
}

function calculateCalories(weight, height, age, activityLevel) {
    const TMB = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    return (TMB * activityLevel).toFixed(2);
}

function calculateWaterIntake(weight) {
    return (weight * 0.035).toFixed(2);
}

function calculateLeanMass(weight, imc) {
    return (weight * (1 - (imc / 100))).toFixed(2);
}

function calculateFatMass(weight, leanMass) {
    return (weight - leanMass).toFixed(2);
}

function displayResults(name, imc, idealWeightRange, calories, waterIntake, leanMass, fatMass) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results for ${name}</h2>
        <p><strong>BMI:</strong> ${imc}</p>
        <p><strong>Ideal weight:</strong> ${idealWeightRange[0]} kg - ${idealWeightRange[1]} kg</p>
        <p><strong>Daily Calories:</strong> ${calories} kcal</p>
        <p><strong>Daily Water Intake:</strong> ${waterIntake} liters</p>
        <p><strong>Lean Mass:</strong> ${leanMass} kg</p>
        <p><strong>Fat Mass:</strong> ${fatMass} kg</p>
    `;
}
