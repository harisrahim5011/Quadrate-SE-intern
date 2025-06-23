using System;
using ArraySorting;
using ArrayStatistics;
using IterativeCalculations;
using StringAnalysis;
using StringManipulation;

namespace StudentGradeCalculator
{
    class Program
    {
        static void Main(string[] args)
        {
            GradeCalculator.CalculateGrade();
            PrimeChecker.RunPrimeChecker();
            FactorialCalculator.RunFactorialCalculator();
            Statistics.RunArrayStatistics();
            ArraySorter.RunArraySorter();
            CharacterCounter.RunCharacterCounter();
            PalindromeChecker.RunPalindromeChecker();
            WordReverser.RunWordReverser();
        }
    }
}
