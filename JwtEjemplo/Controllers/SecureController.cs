using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtEjemplo.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class SecureController : ControllerBase
	{
		[HttpGet]
		[Authorize]
		public IActionResult GetSecureData()
		{
			return Ok(new { message = "This is a secure data" });
		}
	}
}
