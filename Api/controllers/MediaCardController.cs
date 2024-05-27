using Microsoft.AspNetCore.Mvc;
using AgileExam.Contexts;
using AgileExam.Models;
using Microsoft.EntityFrameworkCore;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MediaCardController : ControllerBase
    {
        private readonly CardContext _context;
        private readonly IWebHostEnvironment _environment;

        public MediaCardController(CardContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        // Create
        [HttpPost]
        public async Task<ActionResult<MediaCard>> Create(MediaCard card)
        {
            _context.MediaCards.Add(card);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = card.Id }, card);
        }

        // Read
        [HttpGet]
        public async Task<ActionResult<List<MediaCard>>> Get()
        {
            var mediaCards = await _context.MediaCards.ToListAsync();
            return Ok(mediaCards);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MediaCard>> GetById(int id)
        {
            var card = await _context.MediaCards.FindAsync(id);
            if (card == null) return NotFound();
            return Ok(card);
        }

        // Update
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, MediaCard updatedCard)
        {
            if (id != updatedCard.Id) return BadRequest();

            _context.Entry(updatedCard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CardExists(id)) return NotFound();
                else throw;
            }

            return NoContent();
        }

        // Delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var card = await _context.MediaCards.FindAsync(id);
            if (card == null) return NotFound();

            _context.MediaCards.Remove(card);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool CardExists(int id)
        {
            return _context.MediaCards.Any(e => e.Id == id);
        }
    }
}
