namespace AgileExam.Models
{
    public class History
    {
        public int HistoryId { get; set; }
        public int QueueId { get; set; }
        public Queue? Queue { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
