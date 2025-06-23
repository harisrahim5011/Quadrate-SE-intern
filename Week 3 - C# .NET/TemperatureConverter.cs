
using System;

namespace Utilities
{
    public static class TemperatureConverter
    {
        // Static readonly field for the conversion ratio
        private static readonly double ConversionRatio = 5.0 / 9.0;

        /// <summary>
        /// Converts Celsius to Fahrenheit.
        /// </summary>
        /// <param name="celsius">Temperature in Celsius.</param>
        /// <returns>Temperature in Fahrenheit.</returns>
        public static double CelsiusToFahrenheit(double celsius)
        {
            return (celsius * 9 / 5) + 32;
        }

        /// <summary>
        /// Converts Fahrenheit to Celsius.
        /// </summary>
        /// <param name="fahrenheit">Temperature in Fahrenheit.</param>
        /// <returns>Temperature in Celsius.</returns>
        public static double FahrenheitToCelsius(double fahrenheit)
        {
            return (fahrenheit - 32) * ConversionRatio;
        }
    }
}
