using Microsoft.AspNetCore.Mvc;
using AgileExam.Contexts;
using AgileExam.Models;


namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        private readonly CardContext _context;

        public UploadController(CardContext context)
        {
            _context = context;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file, [FromQuery] int userId)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest(new { message = "No file uploaded." });
            }

            var validTypes = new[] 
            { 
                "image/jpeg", "image/png", "image/gif", "image/bmp", "image/webp", "image/svg+xml", "image/tiff", "image/x-icon",
                "video/mp4", "video/mpeg", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/webm", "video/ogg", "video/3gpp", "video/x-flv"
            };
            if (!validTypes.Contains(file.ContentType))
            {
                return BadRequest(new { message = "Invalid file type. Only images and videos are allowed." });
            }

            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }

            var fileName = Path.GetRandomFileName() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadPath, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var fileUrl = $"/{fileName}";

            var mediaCard = new MediaCard
            {
                Url = fileUrl,
                UserId = userId,
                FileType = file.ContentType,
                UploadDate = DateTime.UtcNow
            };
            
            _context.MediaCards.Add(mediaCard);         
            await _context.SaveChangesAsync();

            var queueItem = new Queue
            {  
               MediaCardId = mediaCard.MediaCardId,
               CardType = "media",
               Duration = 600,
               StartDate = DateTime.UtcNow,
               EndDate = DateTime.UtcNow.AddSeconds(86400),
            };

            _context.Queue.Add(queueItem);
            await _context.SaveChangesAsync();



            return Ok(new { filePath = fileUrl });
        }
    }
}
