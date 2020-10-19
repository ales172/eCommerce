using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eCommerce.Models
{
    public class User
    {
		private int UserId { get; set; }
		private string Name { get; set; }
		private string LastName { get; set; }
		private string Email { get; set; }
		private string UserName { get; set; }
		private string Password { get; set; }
		private string Adress { get; set; }
		private string City { get; set; }
		private string Province { get; set; }
		private string Country { get; set; }
		private string PostalCode { get; set; }
		private long DNI { get; set; }
		private DateTime Birtdate { get; set; }

	}
}
