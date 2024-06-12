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
        public DbSet<EventCard> EventCards { get; set; }
        public DbSet<Queue> Queue { get; set; }
        public DbSet<History> Histories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.BirthdayCards)
                .WithOne(bc => bc.User)
                .HasForeignKey(bc => bc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>()
                .HasMany(u => u.MediaCards)
                .WithOne(mc => mc.User)
                .HasForeignKey(mc => mc.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Queue>()
                .HasOne(q => q.BirthdayCard)
                .WithOne()
                .HasForeignKey<Queue>(q => q.BirthdayCardId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Queue>()
                .HasOne(q => q.MediaCard)
                .WithOne()
                .HasForeignKey<Queue>(q => q.MediaCardId)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Queue>()
                .HasOne(q => q.EventCard)
                .WithMany()
                .HasForeignKey(q => q.EventCardId)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Queue>()
                .HasMany(q => q.Histories)
                .WithOne(h => h.Queue)
                .HasForeignKey(h => h.QueueId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
