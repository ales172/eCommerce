using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class TicketLine
    {
        [Key]
        public int TicketLineId { get; set; }
        public int TicketId { get; set; }
        public string ProductName { get; set; }
        public float ProductPrice { get; set; }
        public int Quantity { get; set; }
        public float TotalLine { get; set; }
    }
}
