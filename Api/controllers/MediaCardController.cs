using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MediaCardController : ControllerBase
    {
        private readonly CardContext _context;

        public MediaCardController(CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<MediaCard>>> Get()
        {
            return await _context.MediaCards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MediaCard>> Get(int id)
        {
            var card = await _context.MediaCards.FindAsync(id);
            if (card == null) return NotFound();
            return card;
        }

        [HttpPost]
        public async Task<ActionResult<MediaCard>> Post(MediaCard card)
        {
            _context.MediaCards.Add(card);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = card.MediaCardId }, card);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, MediaCard card)
        {
            if (id != card.MediaCardId) return BadRequest();

            _context.Entry(card).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.MediaCards.Any(e => e.MediaCardId == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMediaCard(int id)
        {
            var card = await _context.MediaCards.FindAsync(id);
            if (card == null)
            {
                return NotFound();
            }

            _context.MediaCards.Remove(card);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
