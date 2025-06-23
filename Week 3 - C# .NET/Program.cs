using BookLibrary;
using Utilities;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("=== Book Library ===");
        // Create and display book information using both default and custom constructors
        Book defaultBook = new Book();
        defaultBook.DisplayBookInfo();

        Book customBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
        customBook.DisplayBookInfo();


        Console.WriteLine("\n=== Temperature Conversion ===");
        // Convert temperatures between Celsius and Fahrenheit
        double celsius = 25;
        double fahrenheit = TemperatureConverter.CelsiusToFahrenheit(celsius);
        Console.WriteLine($"{celsius}°C = {fahrenheit}°F");

        double fahren = 77;
        double cels = TemperatureConverter.FahrenheitToCelsius(fahren);
        Console.WriteLine($"{fahren}°F = {cels:F2}°C");
        
        Console.WriteLine("\n=== Integer Parsing ===");
        // Parse integers from strings  
        string validInput = "123";
        string invalidInput = "abc";

        if (IntegerParser.TryParseInteger(validInput, out int validResult))
        {
            Console.WriteLine($"Parsing '{validInput}' succeeded. Result: {validResult}");
        }
        else
        {
            Console.WriteLine($"Parsing '{validInput}' failed.");
        }

        if (IntegerParser.TryParseInteger(invalidInput, out int invalidResult))
        {
            Console.WriteLine($"Parsing '{invalidInput}' succeeded. Result: {invalidResult}");
        }
        else
        {
            Console.WriteLine($"Parsing '{invalidInput}' failed.");
        }

    }
}
