using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class Ticket
    {
        [Key]
        public int TicketId { get; set; }
        public User User { get; set; }
        public List<TicketLine> TicketLines { get; set; }
        public float Total { get; set; }
    }
}
