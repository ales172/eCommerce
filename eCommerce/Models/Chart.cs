using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class Chart
    {
        [Key]
        public int ChartId { get; set; }
        public List<TicketLine> ProductsList { get; set; }
        public float TotalChart { get; set; }
        public float DeliveryCost { get; set; }
        /*public class ECommerceContext : DbContext
        {
            public DbSet<Chart> Charts { get; set; }
        }*/

    }
}
