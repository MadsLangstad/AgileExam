namespace AgileExam.Models
{
    public class BirthdayCard
    {
        public int BirthdayCardId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? ImageUrl { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
