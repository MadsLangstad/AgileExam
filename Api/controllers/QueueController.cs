using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QueueController : ControllerBase
    {
        private readonly CardContext _context;

        public QueueController(CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Queue>>> Get()
        {
            return await _context.Queue.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Queue>> Get(int id)
        {
            var queue = await _context.Queue.FindAsync(id);
            if (queue == null) return NotFound();
            return queue;
        }

        [HttpPost]
        public async Task<ActionResult<Queue>> Post(Queue queue)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Queue.Add(queue);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = queue.QueueId }, queue);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Queue queue)
        {
            if (id != queue.QueueId) return BadRequest();

            _context.Entry(queue).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Queue.Any(e => e.QueueId == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var queue = await _context.Queue.FindAsync(id);
            if (queue == null) return NotFound();

            _context.Queue.Remove(queue);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
