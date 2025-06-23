
using System;

namespace StringAnalysis
{
    public class CharacterCounter
    {
        /// <summary>
        /// Analyzes the input string and counts various types of characters.
        /// </summary>
        /// <param name="text">The string to analyze.</param>
        public static void AnalyzeString(string text)
        {
            int uppercaseCount = 0;
            int lowercaseCount = 0;
            int digitCount = 0;
            int spaceCount = 0;
            int specialCharCount = 0;

            foreach (char c in text)
            {
                if (char.IsUpper(c))
                {
                    uppercaseCount++;
                }
                else if (char.IsLower(c))
                {
                    lowercaseCount++;
                }
                else if (char.IsDigit(c))
                {
                    digitCount++;
                }
                else if (char.IsWhiteSpace(c))
                {
                    spaceCount++;
                }
                else
                {
                    specialCharCount++;
                }
            }

            Console.WriteLine($"Uppercase letters: {uppercaseCount}");
            Console.WriteLine($"Lowercase letters: {lowercaseCount}");
            Console.WriteLine($"Digits: {digitCount}");
            Console.WriteLine($"Spaces: {spaceCount}");
            Console.WriteLine($"Special characters: {specialCharCount}");
        }

        /// <summary>
        /// Prompts the user for input and analyzes the string.
        /// </summary>
        public static void RunCharacterCounter()
        {
            Console.WriteLine("=== Character Counter Program ===");
            Console.Write("Enter a string to analyze: ");
            string input = Console.ReadLine();
            AnalyzeString(input);
        }
    }
}
