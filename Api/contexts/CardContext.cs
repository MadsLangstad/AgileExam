using Microsoft.EntityFrameworkCore;
using AgileExam.Models;

namespace AgileExam.Contexts
{
    public class CardContext : DbContext
    {
        public CardContext(DbContextOptions<CardContext> options) : base(options) { }
        public DbSet<BirthdayCard> BirthdayCards { get; set; }
        public DbSet<MediaCard> MediaCards { get; set; }
        public DbSet<WeatherCard> WeatherCards { get; set; }
    }
}
