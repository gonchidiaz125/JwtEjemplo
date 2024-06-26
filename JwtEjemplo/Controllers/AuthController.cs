﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace JwtEjemplo.Controllers
{

	[Route("api/[controller]")]
	[ApiController]
	public class AuthController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public AuthController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpPost("login")]
		public IActionResult Login([FromBody] UserLogin userLogin)
		{
			if (userLogin.Username == "user" && userLogin.Password == "password")
			{
				var token = GenerateJwtToken(userLogin.Username);
				return Ok(new { token });
			}

			return Unauthorized();
		}

		private string GenerateJwtToken(string username)
		{
			var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("your-256-bit-secret-key-32charslong"));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

			var claims = new[]
			{
				new Claim(ClaimTypes.Name, username)
			};

			var token = new JwtSecurityToken(
				issuer: "yourdomain.com",
				audience: "yourdomain.com",
				claims: claims,
				expires: DateTime.Now.AddMinutes(30),
				signingCredentials: creds);

			return new JwtSecurityTokenHandler().WriteToken(token);
		}
	}

	public class UserLogin
	{
		public string Username { get; set; }
		public string Password { get; set; }
	}

}