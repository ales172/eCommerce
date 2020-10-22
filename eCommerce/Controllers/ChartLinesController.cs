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
    public class ChartLinesController : ControllerBase
    {
        private readonly ECommerceContext _context;

        public ChartLinesController(ECommerceContext context)
        {
            _context = context;
        }

        // GET: api/ChartLines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChartLine>>> GetChartLine()
        {
            return await _context.ChartLine.ToListAsync();
        }

        // GET: api/ChartLines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChartLine>> GetChartLine(int id)
        {
            var chartLine = await _context.ChartLine.FindAsync(id);

            if (chartLine == null)
            {
                return NotFound();
            }

            return chartLine;
        }

        // PUT: api/ChartLines/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutChartLine(int id, ChartLine chartLine)
        {
            if (id != chartLine.ChartLineId)
            {
                return BadRequest();
            }

            _context.Entry(chartLine).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChartLineExists(id))
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

        // POST: api/ChartLines
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ChartLine>> PostChartLine(ChartLine chartLine)
        {
            _context.ChartLine.Add(chartLine);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChartLine", new { id = chartLine.ChartLineId }, chartLine);
        }

        // DELETE: api/ChartLines/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ChartLine>> DeleteChartLine(int id)
        {
            var chartLine = await _context.ChartLine.FindAsync(id);
            if (chartLine == null)
            {
                return NotFound();
            }

            _context.ChartLine.Remove(chartLine);
            await _context.SaveChangesAsync();

            return chartLine;
        }

        private bool ChartLineExists(int id)
        {
            return _context.ChartLine.Any(e => e.ChartLineId == id);
        }
    }
}
