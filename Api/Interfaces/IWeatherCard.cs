namespace AgileExam.Interfaces
{
    public interface IWeatherCard
    {
        int Id { get; set; }
        string City { get; set; }
        string Country { get; set; }
        string Description { get; set; }
        string Temperature { get; set; }
        string Humidity { get; set; }
        string Pressure { get; set; }
        string Windspeed { get; set; }
        string Rain { get; set; }
        string Clouds { get; set; }
        string Icon { get; set; }
    }
}
