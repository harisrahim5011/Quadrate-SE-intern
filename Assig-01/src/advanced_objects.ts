// Define the AppConfig interface
interface AppConfig {
    readonly apiKey: string;
    appName: string;
    version?: string;
}

// Create an instance of AppConfig
const config: AppConfig = {
    apiKey: "12345-ABCDE",
    appName: "MyCoolApp",
    version: "1.0.0"
};

// Try to modify the apiKey (this will cause a TypeScript error)
// config.apiKey = "NEW-KEY"; // Error: Cannot assign to 'apiKey' because it is a read-only property.

// Define the UserSettings interface with an index signature
interface UserSettings {
    [key: string]: string;
}

// Create an instance of UserSettings
const settings: UserSettings = {
    theme: "dark",
    fontSize: "16px"
};

console.log("Initial settings:", settings);

// Add a new setting dynamically
settings.language = "en-US";

console.log("Updated settings:", settings);

interface Vehicle {
    brand: string;
    startEngine(): void;
}

interface Car extends Vehicle {
    numberOfDoors: number;
}

interface Motorcycle extends Vehicle {
    hasSidecar: boolean;
}

const myCar: Car = {
    brand: "Toyota",
    numberOfDoors: 4,
    startEngine() {
        console.log(`${this.brand} car engine started.`);
    }
};

const myMotorcycle: Motorcycle = {
    brand: "Harley-Davidson",
    hasSidecar: true,
    startEngine() {
        console.log(`${this.brand} motorcycle engine started.`);
    }
};

function displayVehicleInfo(vehicle: Vehicle): void {
    console.log(`Brand: ${vehicle.brand}`);
    vehicle.startEngine();
}

displayVehicleInfo(myCar);
displayVehicleInfo(myMotorcycle);