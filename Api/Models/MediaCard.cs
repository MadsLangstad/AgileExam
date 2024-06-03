namespace AgileExam.Models
{
    public class MediaCard
    {
        public int MediaCardId { get; set; }
        public string? Url { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }
}
