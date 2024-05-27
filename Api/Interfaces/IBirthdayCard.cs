namespace AgileExam.Interfaces;

public interface IBirthdayCard
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string ImageUrl { get; set; }
    public string Text { get; set; }
}