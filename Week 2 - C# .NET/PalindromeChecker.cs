
using System;

namespace StringAnalysis
{
    public class PalindromeChecker
    {
        /// <summary>
        /// Checks if a string is a palindrome, ignoring case and spaces.
        /// </summary>
        /// <param name="text">The string to check.</param>
        /// <returns>True if the string is a palindrome, false otherwise.</returns>
        public static bool IsPalindrome(string text)
        {
            // Convert to lowercase and remove spaces
            text = text.ToLower().Replace(" ", "");

            // Use a loop to compare characters from both ends
            int length = text.Length;
            for (int i = 0; i < length / 2; i++)
            {
                if (text[i] != text[length - 1 - i])
                {
                    return false;
                }
            }

            return true;
        }

        /// <summary>
        /// Prompts the user to enter a string and checks if it's a palindrome.
        /// </summary>
        public static void RunPalindromeChecker()
        {
            Console.WriteLine("=== Palindrome Checker ===");
            Console.Write("Enter a string: ");
            string input = Console.ReadLine();

            bool result = IsPalindrome(input);
            Console.WriteLine(result
                ? $"{input} is a palindrome."
                : $"{input} is not a palindrome.");
        }
    }
}
