using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtEjemplo.Controllers
{

	// Este controller marcado con "Authorize" para que requiera autenticacion JWT en todos sus endpoints (salvo que en alguno se indique lo contrario)
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class PersonasController : ControllerBase
	{
		[HttpGet("persona1")]
		public IActionResult GetPersona1()
		{			
			return Ok(new Persona() { Id = 1, Nombre = "Persona 1", Apellido = "Apellido 1" });
		}

		// Este método esta marcado con "AllowAnonymous" para que no requiera autenticacion JWT
		[HttpGet("personaPublica")]
		[AllowAnonymous]
		public IActionResult GetPersonaPublica()
		{			
			return Ok(new Persona() {  Id = 3, Nombre = "Gonzalo", Apellido = "Diaz"} );
		}
	}

	public class Persona
	{
        public int Id { get; set; }
		public string Nombre { get; set; }
		public string Apellido { get; set; }
	}
}
