namespace AgileExam.Interfaces;

public interface IWeatherCard
{
    public int Id { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string Description { get; set; }
    public string Temperature { get; set; }
    public string Humidity { get; set; }
    public string Pressure { get; set; }
    public string Windspeed { get; set; }
    public string Rain { get; set; }
    public string Clouds { get; set; }
    public string Icon { get; set; }
}