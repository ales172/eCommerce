using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class Product
    {
		[Key]
		public int ProductId { get; set; }
        public int ProductCode { get; set; }
		public string ProductName { get; set; }
		//private string ProductCategory { get; set; }
		//private string ProductSubCategory { get; set; }
		public float ProductPrice { get; set; }
		public string ProductDescripcion { get; set; }
		public string ProductImage { get; set; }
		public string ProductStock { get; set; }

	}
}
