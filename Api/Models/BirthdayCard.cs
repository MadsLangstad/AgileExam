namespace AgileExam.Models;

using AgileExam.Interfaces;

public class BirthdayCard : IBirthdayCard
{
    public int Id { get; set; }
    public required string Title { get; set; }
    public required string ImageUrl { get; set; }
    public required string Text { get; set; }
}
