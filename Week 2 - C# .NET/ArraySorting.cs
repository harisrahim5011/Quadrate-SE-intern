
using System;

namespace ArraySorting
{
    public class ArraySorter
    {
        /// <summary>
        /// Sorts the array in ascending order using Bubble Sort algorithm.
        /// </summary>
        /// <param name="numbers">The array of integers to sort.</param>
        public static void SortArrayAscending(int[] numbers)
        {
            int n = numbers.Length;
            for (int i = 0; i < n - 1; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    if (numbers[j] > numbers[j + 1])
                    {
                        // Swap numbers[j] and numbers[j + 1]
                        int temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                    }
                }
            }
        }

        /// <summary>
        /// Prompts the user to enter 10 integers, sorts them, and prints the sorted array.
        /// </summary>
        public static void RunArraySorter()
        {
            Console.WriteLine("=== Array Sorting Program ===");

            int[] numbers = new int[10];
            for (int i = 0; i < 10; i++)
            {
                numbers[i] = GetValidInput($"Enter integer {i + 1}: ");
            }

            SortArrayAscending(numbers);

            Console.WriteLine("Sorted array in ascending order:");
            foreach (int number in numbers)
            {
                Console.WriteLine(number);
            }
        }

        /// <summary>
        /// Prompts the user for an integer input and validates it.
        /// </summary>
        /// <param name="prompt">The message to display to the user.</param>
        /// <returns>A valid integer input from the user.</returns>
        private static int GetValidInput(string prompt)
        {
            int value;
            while (true)
            {
                Console.Write(prompt);
                string input = Console.ReadLine();

                if (int.TryParse(input, out value))
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please enter a numeric value.");
                }
            }
            return value;
        }
    }
}
