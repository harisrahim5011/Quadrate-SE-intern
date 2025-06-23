
using System;

namespace Utilities
{
    public class IntegerParser
    {
        /// <summary>
        /// Attempts to parse the input string into an integer.
        /// </summary>
        /// <param name="input">The input string to parse.</param>
        /// <param name="result">The parsed integer if successful, otherwise 0.</param>
        /// <returns>True if parsing is successful, otherwise false.</returns>
        public static bool TryParseInteger(string input, out int result)
        {
            if (int.TryParse(input, out result))
            {
                return true;
            }
            else
            {
                result = 0;
                return false;
            }
        }
    }
}

//     class Program
//     {
//         static void Main(string[] args)
//         {
//             string validInput = "123";
//             string invalidInput = "abc";

//             if (IntegerParser.TryParseInteger(validInput, out int validResult))
//             {
//                 Console.WriteLine($"Parsing '{validInput}' succeeded. Result: {validResult}");
//             }
//             else
//             {
//                 Console.WriteLine($"Parsing '{validInput}' failed.");
//             }

//             if (IntegerParser.TryParseInteger(invalidInput, out int invalidResult))
//             {
//                 Console.WriteLine($"Parsing '{invalidInput}' succeeded. Result: {invalidResult}");
//             }
//             else
//             {
//                 Console.WriteLine($"Parsing '{invalidInput}' failed.");
//             }
//         }
//     }
// }
