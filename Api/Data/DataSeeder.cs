using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Data
{
    public class DataSeeder
    {
        public static void Seed(IServiceProvider serviceProvider)
        {
            using (var context = new CardContext(
                serviceProvider.GetRequiredService<DbContextOptions<CardContext>>()))
            {
                // Look for any users.
                if (context.Users.Any())
                {
                    return;   // DB has been seeded
                }

                context.Users.AddRange(
                    new User
                    {
                        UserId = 1,
                        Username = "testuser",
                        Password = "password",
                    }
                );

                context.SaveChanges();
            }
        }
    }
}