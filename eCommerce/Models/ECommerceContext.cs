using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using eCommerce.Models;

namespace eCommerce.Models
{
    public class ECommerceContext : DbContext
    {
        public ECommerceContext(DbContextOptions<ECommerceContext> options)
                  : base(options)
        {
        }

        public DbSet<Chart> Charts { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<TicketLine> TicketLines { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<eCommerce.Models.ChartLine> ChartLine { get; set; }




    }
}
