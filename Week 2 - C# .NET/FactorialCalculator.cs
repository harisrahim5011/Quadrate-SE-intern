
using System;

namespace IterativeCalculations
{
    public class FactorialCalculator
    {
        /// <summary>
        /// Calculates the factorial of a number using a for loop.
        /// Returns -1 if the input number is greater than 20.
        /// </summary>
        /// <param name="number">The number to calculate the factorial for.</param>
        /// <returns>The factorial of the number, or -1 if the number is too large.</returns>
        public static long CalculateFactorial(int number)
        {
            if (number > 20)
                return -1;

            long factorial = 1;
            for (int i = 1; i <= number; i++)
            {
                factorial *= i;
            }

            return factorial;
        }

        /// <summary>
        /// Prompts the user to enter a number for factorial calculation.
        /// Calls CalculateFactorial and prints the result.
        /// </summary>
        public static void RunFactorialCalculator()
        {
            Console.WriteLine("=== Factorial Calculator ===");

            while (true)
            {
                Console.Write("Enter a positive integer (or type 'exit' to quit): ");
                string input = Console.ReadLine();

                if (input.ToLower() == "exit")
                    break;

                if (!int.TryParse(input, out int number))
                {
                    Console.WriteLine("Invalid input. Please enter a numeric value.");
                    continue;
                }

                if (number <= 0)
                {
                    Console.WriteLine("Please enter a positive integer.");
                    continue;
                }

                long result = CalculateFactorial(number);
                if (result == -1)
                {
                    Console.WriteLine("The number is too large to compute its factorial accurately.");
                }
                else
                {
                    Console.WriteLine($"The factorial of {number} is {result}.");
                }
            }
        }
    }
}
