using System;

namespace StudentGradeCalculator
{
    public class GradeCalculator
    {
        /// <summary>
        /// Handles input, validation, grade calculation, and output.
        /// </summary>
        public static void CalculateGrade()
        {
            Console.WriteLine("=== Student Grade Calculator ===");

            for (int i = 0; i < 3; i++) // Run 3 test cases
            {
                Console.WriteLine($"\nTest Case {i + 1}:");

                int score = GetValidInput("Enter the student's score (0-100): ");
                int attendance = GetValidInput("Enter the student's attendance percentage (0-100): ");

                string grade;

                if (score < 0 || score > 100 || attendance < 0 || attendance > 100)
                {
                    grade = "Invalid Input";
                }
                else if (score >= 50 && attendance < 50)
                {
                    grade = "Incomplete";
                }
                else if (score < 60 || attendance < 50)
                {
                    grade = "F";
                }
                else if (score >= 90 && attendance >= 80)
                {
                    grade = "A";
                }
                else if (score >= 80 && attendance >= 70)
                {
                    grade = "B";
                }
                else if (score >= 70 && attendance >= 60)
                {
                    grade = "C";
                }
                else if (score >= 60 && attendance >= 50)
                {
                    grade = "D";
                }
                else
                {
                    grade = "Invalid Input";
                }

                Console.WriteLine($"Final Grade: {grade}");
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
