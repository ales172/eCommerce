using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eCommerce.Models;

namespace eCommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketLinesController : ControllerBase
    {
        private readonly ECommerceContext _context;

        public TicketLinesController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/TicketLines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TicketLine>>> GetTicketLines()
        {
            return await _context.TicketLines.ToListAsync();
        }

        // GET: api/TicketLines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TicketLine>> GetTicketLine(int id)
        {
            var ticketLine = await _context.TicketLines.FindAsync(id);

            if (ticketLine == null)
            {
                return NotFound();
            }

            return ticketLine;
        }

        // PUT: api/TicketLines/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTicketLine(int id, TicketLine ticketLine)
        {
            if (id != ticketLine.TicketLineId)
            {
                return BadRequest();
            }

            _context.Entry(ticketLine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TicketLineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TicketLines
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TicketLine>> PostTicketLine(TicketLine ticketLine)
        {
            _context.TicketLines.Add(ticketLine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTicketLine", new { id = ticketLine.TicketLineId }, ticketLine);
        }

        // DELETE: api/TicketLines/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TicketLine>> DeleteTicketLine(int id)
        {
            var ticketLine = await _context.TicketLines.FindAsync(id);
            if (ticketLine == null)
            {
                return NotFound();
            }

            _context.TicketLines.Remove(ticketLine);
            await _context.SaveChangesAsync();

            return ticketLine;
        }

        private bool TicketLineExists(int id)
        {
            return _context.TicketLines.Any(e => e.TicketLineId == id);
        }
    }
}
