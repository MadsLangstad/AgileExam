using Microsoft.EntityFrameworkCore;
using AgileExam.Models;

namespace AgileExam.Contexts
{
    public class CardContext : DbContext
    {
        public CardContext(DbContextOptions<CardContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<BirthdayCard> BirthdayCards { get; set; }
        public DbSet<MediaCard> MediaCards { get; set; }
        public DbSet<Queue> Queue { get; set; }
        public DbSet<History> Histories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Queue>()
                .HasOne(q => q.BirthdayCard)
                .WithOne()
                .HasForeignKey<Queue>(q => q.BirthdayCardId);

            modelBuilder.Entity<Queue>()
                .HasOne(q => q.MediaCard)
                .WithOne()
                .HasForeignKey<Queue>(q => q.MediaCardId);
        }
    }
}
