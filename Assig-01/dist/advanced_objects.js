"use strict";
const config = {
    apiKey: "12345-ABCDE",
    appName: "MyCoolApp",
    version: "1.0.0"
};
const settings = {
    theme: "dark",
    fontSize: "16px"
};
console.log("Initial settings:", settings);
settings.language = "en-US";
console.log("Updated settings:", settings);
const myCar = {
    brand: "Toyota",
    numberOfDoors: 4,
    startEngine() {
        console.log(`${this.brand} car engine started.`);
    }
};
const myMotorcycle = {
    brand: "Harley-Davidson",
    hasSidecar: true,
    startEngine() {
        console.log(`${this.brand} motorcycle engine started.`);
    }
};
function displayVehicleInfo(vehicle) {
    console.log(`Brand: ${vehicle.brand}`);
    vehicle.startEngine();
}
displayVehicleInfo(myCar);
displayVehicleInfo(myMotorcycle);
