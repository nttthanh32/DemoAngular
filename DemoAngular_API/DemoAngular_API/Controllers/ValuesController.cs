using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoAngular_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    [HttpGet]
    public IActionResult getName()
    {
      return Ok("abx");
    }
  }
}
