using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class Chart
    {
        private int ChartId { get; set; }
        private List<Product> ProductsList { get; set; }
        private float TotalChart { get; set; }
        private float DeliveryCost { get; set; }

        
    }
}
