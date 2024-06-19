using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtEjemplo.Controllers
{

	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class PersonasController : ControllerBase
	{
		[HttpGet("persona1")]
		public IActionResult GetPersona1()
		{
			return Ok(new { message = "Esta es la persona 1" });
		}

		[HttpGet("persona2")]
		public IActionResult GetPersona2()
		{
			return Ok(new { message = "Esta es la persona 2" });
		}

		[HttpGet("personaPublica")]
		[AllowAnonymous]
		public IActionResult GetPersonaPublica()
		{
			return Ok(new { message = "Esta es la persona Publica" });
		}
	}
}
