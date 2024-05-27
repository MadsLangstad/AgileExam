namespace AgileExam.Models
{
    public class History
    {
        public int? HistoryId { get; set; }
        public int? QueueId { get; set; }
        public Queue? Queue { get; set; }
        public string? StartDate { get; set; }
        public string? EndDate { get; set; }
        public int? Duration { get; set; }
    }
}
