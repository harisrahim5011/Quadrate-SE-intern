using System;

namespace IterativeCalculations
{
    public class PrimeChecker
    {
        /// <summary>
        /// Checks if a number is prime using a for loop and early exit with break.
        /// </summary>
        /// <param name="number">The number to check.</param>
        /// <returns>True if the number is prime, false otherwise.</returns>
        public static bool IsPrime(int number)
        {
            if (number <= 1)
                return false;

            for (int i = 2; i < number; i++)
            {
                if (number % i == 0)
                {
                    return false; // Not prime
                }
            }

            return true;
        }

        /// <summary>
        /// Prompts the user to enter a positive integer and checks all numbers from 2 up to that number.
        /// </summary>
        public static void RunPrimeChecker()
        {
            Console.WriteLine("=== Prime Number Checker ===");

            while (true)
            {
                Console.Write("Enter a positive integer (or type 'exit' to quit): ");
                string input = Console.ReadLine();

                if (input.ToLower() == "exit")
                    break;

                if (!int.TryParse(input, out int limit))
                {
                    Console.WriteLine("Invalid input. Please enter a numeric value.");
                    continue;
                }

                if (limit <= 0)
                {
                    Console.WriteLine("Please enter a positive integer.");
                    continue;
                }

                int number = 2;
                while (number <= limit)
                {
                    bool result = IsPrime(number);
                    Console.WriteLine(result
                        ? $"{number} is a prime number."
                        : $"{number} is not a prime number.");
                    number++;
                }
            }
        }
    }
}
