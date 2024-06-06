document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityLevel = document.getElementById('activityLevel').value;

    const imc = calculateIMC(weight, height);
    const idealWeightRange = calculateIdealWeight(height);
    const calories = calculateCalories(weight, height, age, activityLevel);
    const waterIntake = calculateWaterIntake(weight);

    displayResults(name, imc, idealWeightRange, calories, waterIntake);
});

function calculateIMC(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function calculateIdealWeight(height) {
    const heightInMeters = height / 100;
    const minWeight = 18.5 * (heightInMeters * heightInMeters);
    const maxWeight = 24.9 * (heightInMeters * heightInMeters);
    return [minWeight.toFixed(2), maxWeight.toFixed(2)];
}

function calculateCalories(weight, height, age, activityLevel) {
    const TMB = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    return (TMB * activityLevel).toFixed(2);
}

function calculateWaterIntake(weight) {
    return (weight * 0.035).toFixed(2);
}

function displayResults(name, imc, idealWeightRange, calories, waterIntake) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Results for ${name}</h2>
        <p><strong>BMI:</strong> ${imc}</p>
        <p><strong>Ideal weight:</strong> ${idealWeightRange[0]} kg - ${idealWeightRange[1]} kg</p>
        <p><strong>Daily Calories:</strong> ${calories} kcal</p>
        <p><strong>Daily Water Intake:</strong> ${waterIntake} litros</p>
    `;
}
