using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {
        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            // Log the file content type for debugging
            System.Console.WriteLine($"Uploaded file type: {file.ContentType}");

            // Validating file types
            var validTypes = new[] 
            { 
                "image/jpeg", "image/png", "image/gif", "image/bmp", "image/webp", "image/svg+xml", "image/tiff", "image/x-icon",
                "video/mp4", "video/mpeg", "video/quicktime", "video/x-msvideo", "video/x-matroska", "video/webm", "video/ogg", "video/3gpp", "video/x-flv"
            };
            if (!validTypes.Contains(file.ContentType))
            {
                return BadRequest("Invalid file type. Only images and videos are allowed.");
            }

            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");

            if (!Directory.Exists(uploadPath))
            {
                Directory.CreateDirectory(uploadPath);
            }

            var filePath = Path.Combine(uploadPath, file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { filePath = $"/{file.FileName}" });
        }
    }
}
