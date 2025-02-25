using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using SkillsBridge.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;



namespace SkillsBridge.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Course> Course { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        public DbSet<ContentItem> ContentItem { get; set; }


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // modelBuilder.Entity<Booking>()
            //     .HasOne<Course>()
            //     .WithMany()
            //     .HasForeignKey(b => b.CourseId);

            modelBuilder.Entity<Booking>()
                .HasOne(b => b.Course)
                .WithMany(c => c.Bookings)
                .HasForeignKey(b => b.CourseId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Booking>()
                .HasOne(b => b.User)
                .WithMany()
                .HasForeignKey(b => b.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }


    }



}
