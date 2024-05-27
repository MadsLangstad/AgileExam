using Microsoft.AspNetCore.Mvc;
using AgileExam.Contexts;
using AgileExam.Models;
using Microsoft.EntityFrameworkCore;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BirthdayCardController : ControllerBase
    {
        private readonly CardContext _context;
        private readonly IWebHostEnvironment _environment;

        public BirthdayCardController(CardContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpPost]
        public async Task<ActionResult<BirthdayCard>> Create(BirthdayCard card)
        {
            _context.BirthdayCards.Add(card);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = card.Id }, card);
        }

        [HttpGet]
        public async Task<ActionResult<List<BirthdayCard>>> Get()
        {
            var birthdayCards = await _context.BirthdayCards.ToListAsync();
            return Ok(birthdayCards);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BirthdayCard>> GetById(int id)
        {
            var card = await _context.BirthdayCards.FindAsync(id);
            if (card == null) return NotFound();
            return Ok(card);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, BirthdayCard updatedCard)
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var card = await _context.BirthdayCards.FindAsync(id);
            if (card == null) return NotFound();

            _context.BirthdayCards.Remove(card);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool CardExists(int id)
        {
            return _context.BirthdayCards.Any(e => e.Id == id);
        }
    }
}
