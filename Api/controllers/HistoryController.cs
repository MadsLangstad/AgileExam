using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HistoryController : ControllerBase
    {
        private readonly CardContext _context;

        public HistoryController(CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<History>>> Get()
        {
            return await _context.Histories.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<History>> Get(int id)
        {
            var history = await _context.Histories.FindAsync(id);
            if (history == null) return NotFound();
            return history;
        }

        [HttpPost]
        public async Task<ActionResult<History>> Post(History history)
        {
            // Validate the existence of the referenced QueueId
            if (!await _context.Queue.AnyAsync(q => q.QueueId == history.QueueId))
            {
                return BadRequest("Invalid QueueId");
            }

            _context.Histories.Add(history);
            try
            {
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get), new { id = history.HistoryId }, history);
            }
            catch (DbUpdateException ex)
            {
                // Log the detailed error message
                Console.WriteLine(ex.InnerException?.Message);
                return StatusCode(500, "Internal server error. Please check the logs for more details.");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, History history)
        {
            if (id != history.HistoryId) return BadRequest();

            _context.Entry(history).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Histories.Any(e => e.HistoryId == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var history = await _context.Histories.FindAsync(id);
            if (history == null) return NotFound();

            _context.Histories.Remove(history);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
