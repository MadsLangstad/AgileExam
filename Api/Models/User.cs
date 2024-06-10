namespace AgileExam.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }

        public ICollection<BirthdayCard>? BirthdayCards { get; set; }
        public ICollection<MediaCard>? MediaCards { get; set; }
    }
}
