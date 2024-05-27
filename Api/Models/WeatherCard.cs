using AgileExam.Interfaces;

namespace AgileExam.Models
{
    public class WeatherCard : IWeatherCard
    {
        public int Id { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }
        public required string Description { get; set; }
        public required string Temperature { get; set; }
        public required string Humidity { get; set; }
        public required string Pressure { get; set; }
        public required string Windspeed { get; set; }
        public required string Rain { get; set; }
        public required string Clouds { get; set; }
        public required string Icon { get; set; }
    }
}
