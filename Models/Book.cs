using System;
using System.Collections.Generic;

namespace BooksAPi.Models
{
    public partial class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int? NumberOfPages { get; set; }
        public DateTime? PublishedOn { get; set; }
    }
}
