namespace AgileExam.Models
{
    public class Queue
    {
        public int QueueId { get; set; }
        public string? CardType { get; set; }
        public int? BirthdayCardId { get; set; }
        public BirthdayCard? BirthdayCard { get; set; }
        public int? MediaCardId { get; set; }
        public MediaCard? MediaCard { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }

        public ICollection<History>? Histories { get; set; }
    }
}
