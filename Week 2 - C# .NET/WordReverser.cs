
using System;

namespace StringManipulation
{
    public class WordReverser
    {
        /// <summary>
        /// Reverses the order of words in a sentence.
        /// </summary>
        /// <param name="sentence">The sentence to reverse.</param>
        /// <returns>A new string with the order of words reversed.</returns>
        public static string ReverseWords(string sentence)
        {
            string[] words = sentence.Split(' ');
            Array.Reverse(words);
            return string.Join(" ", words);
        }

        /// <summary>
        /// Prompts the user for a sentence and prints the word-reversed sentence.
        /// </summary>
        public static void RunWordReverser()
        {
            Console.WriteLine("=== Word Reverser ===");
            Console.Write("Enter a sentence: ");
            string sentence = Console.ReadLine();

            string reversedSentence = ReverseWords(sentence);
            Console.WriteLine($"Reversed Sentence: {reversedSentence}");
        }
    }
}
