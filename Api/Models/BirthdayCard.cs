using AgileExam.Interfaces;

namespace AgileExam.Models
{
    public class BirthdayCard : IBirthdayCard
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public required string ImageUrl { get; set; }
        public required string Text { get; set; }
    }
}
