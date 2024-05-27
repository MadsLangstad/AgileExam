namespace AgileExam.Models;
using AgileExam.Interfaces;

public class MediaCard : IMeadiaCard
{
    public int Id { get; set; }
    public required string MediaUrl { get; set; }


}