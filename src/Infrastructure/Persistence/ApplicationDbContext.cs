using Microsoft.EntityFrameworkCore;

namespace SnackAttack.Infrastructure.Persistence
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Snack> Snacks { get; set;}
    }
}