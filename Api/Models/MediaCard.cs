using AgileExam.Interfaces;

namespace AgileExam.Models
{
    public class MediaCard : IMediaCard
    {
        public int Id { get; set; }
        public required string MediaUrl { get; set; }
    }
}
