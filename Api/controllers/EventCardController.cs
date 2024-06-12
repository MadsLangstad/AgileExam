using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;

namespace AgileExam.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventCardController : ControllerBase
    {
        private readonly CardContext _context;

        public EventCardController(CardContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<EventCard>>> Get()
        {
            return await _context.EventCards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EventCard>> Get(int id)
        {
            var card = await _context.EventCards.FindAsync(id);
            if (card == null) return NotFound();
            return card;
        }

        [HttpPost]
        public async Task<IActionResult> AddEventCard([FromBody] EventCard newCard)
        {
            if (newCard == null || string.IsNullOrWhiteSpace(newCard.Title) || string.IsNullOrWhiteSpace(newCard.Location) || string.IsNullOrWhiteSpace(newCard.Description) || newCard.Duration <= 0)
            {
                return BadRequest(new { message = "All fields are required and duration must be greater than 0." });
            }

            _context.EventCards.Add(newCard);
            await _context.SaveChangesAsync();

            return Ok(new { eventCardId = newCard.EventCardId, message = "Event card added successfully." });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, EventCard card)
        {
            if (id != card.EventCardId) return BadRequest();

            _context.Entry(card).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.EventCards.Any(e => e.EventCardId == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var card = await _context.EventCards.FindAsync(id);
            if (card == null) return NotFound();

            _context.EventCards.Remove(card);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
