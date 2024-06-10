namespace AgileExam.Models
{
    public class EventCard
    {
        public int EventCardId { get; set; }
        public string? Location { get; set; }
        public string? Date { get; set; }
        public DateTime Time { get; set; }
        public int? Duration { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
    }
}