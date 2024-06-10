using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BirthdayCardController : ControllerBase
    {
        private readonly CardContext _context;

        public BirthdayCardController(CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<BirthdayCard>>> Get()
        {
            return await _context.BirthdayCards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BirthdayCard>> Get(int id)
        {
            var card = await _context.BirthdayCards.FindAsync(id);
            if (card == null) return NotFound();
            return card;
        }

        [HttpPost]
        public async Task<ActionResult<BirthdayCard>> Post(BirthdayCard card)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            card.User = null;
            _context.BirthdayCards.Add(card);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = card.BirthdayCardId }, card);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, BirthdayCard card)
        {
            if (id != card.BirthdayCardId) return BadRequest();

            _context.Entry(card).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.BirthdayCards.Any(e => e.BirthdayCardId == id))
                    return NotFound();
                else
                    throw;
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
    }
}
