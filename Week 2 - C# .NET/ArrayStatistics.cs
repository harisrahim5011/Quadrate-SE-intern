
using System;

namespace ArrayStatistics
{
    public class Statistics
    {
        /// <summary>
        /// Runs the array initialization, population, and statistics calculation.
        /// </summary>
        public static void RunArrayStatistics()
        {
            Console.WriteLine("=== Array Statistics ===");
            int[] numbers = new int[10];
            Console.WriteLine("Enter 10 integer values:");

            for (int i = 0; i < numbers.Length; i++)
            {
                while (true)
                {
                    Console.Write($"Value {i + 1}: ");
                    string input = Console.ReadLine();

                    if (int.TryParse(input, out int value))
                    {
                        numbers[i] = value;
                        break;
                    }
                    else
                    {
                        Console.WriteLine("Invalid input. Please enter a valid integer.");
                    }
                }
            }

            double average = CalculateAverage(numbers);
            int max = FindMax(numbers);
            int min = FindMin(numbers);

            Console.WriteLine($"Average: {average}");
            Console.WriteLine($"Maximum: {max}");
            Console.WriteLine($"Minimum: {min}");
        }

        /// <summary>
        /// Calculates the average of the numbers in the array.
        /// </summary>
        /// <param name="numbers">The array of integers.</param>
        /// <returns>The average as a double.</returns>
        public static double CalculateAverage(int[] numbers)
        {
            int sum = 0;
            foreach (int number in numbers)
            {
                sum += number;
            }
            return (double)sum / numbers.Length;
        }

        /// <summary>
        /// Finds the maximum value in the array.
        /// </summary>
        /// <param name="numbers">The array of integers.</param>
        /// <returns>The maximum value.</returns>
        public static int FindMax(int[] numbers)
        {
            int max = numbers[0];
            foreach (int number in numbers)
            {
                if (number > max)
                {
                    max = number;
                }
            }
            return max;
        }

        /// <summary>
        /// Finds the minimum value in the array.
        /// </summary>
        /// <param name="numbers">The array of integers.</param>
        /// <returns>The minimum value.</returns>
        public static int FindMin(int[] numbers)
        {
            int min = numbers[0];
            foreach (int number in numbers)
            {
                if (number < min)
                {
                    min = number;
                }
            }
            return min;
        }
    }
}
