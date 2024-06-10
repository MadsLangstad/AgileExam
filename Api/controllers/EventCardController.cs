using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AgileExam.Contexts;
using AgileExam.Models;
using System;

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
        public async Task<ActionResult<EventCard>> Post(EventCard card)
        {
            // Validate the card
            if (card == null || string.IsNullOrEmpty(card.Title))
            {
                return BadRequest("Invalid event card data.");
            }

            try
            {
                _context.EventCards.Add(card);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get), new { id = card.EventCardId }, card);
            }
            catch (DbUpdateException ex)
            {
                // Log the detailed error
                Console.Error.WriteLine($"Error adding event card: {ex.Message}");
                if (ex.InnerException != null)
                {
                    Console.Error.WriteLine($"Inner exception: {ex.InnerException.Message}");
                }

                return StatusCode(StatusCodes.Status500InternalServerError, "An error occurred while adding the event card.");
            }
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
    }
}