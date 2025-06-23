
using System;

namespace BookLibrary
{
    public class Book
    {
        private string _title;
        private string _author;
        private int _publicationYear;

        /// <summary>
        /// Default constructor initializing title and author to 'Unknown' and publication year to current year.
        /// </summary>
        public Book()
        {
            _title = "Unknown";
            _author = "Unknown";
            _publicationYear = DateTime.Now.Year;
        }

        /// <summary>
        /// Parameterized constructor to initialize member variables.
        /// </summary>
        /// <param name="title">Title of the book.</param>
        /// <param name="author">Author of the book.</param>
        /// <param name="publicationYear">Publication year of the book.</param>
        public Book(string title, string author, int publicationYear)
        {
            _title = title;
            _author = author;
            _publicationYear = publicationYear;
        }

        /// <summary>
        /// Method to display book information.
        /// </summary>
        public void DisplayBookInfo()
        {
            Console.WriteLine($"Title: {_title}");
            Console.WriteLine($"Author: {_author}");
            Console.WriteLine($"Publication Year: {_publicationYear}");
        }
    }
}
