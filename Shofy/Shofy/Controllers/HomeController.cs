using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shofy.Data;
using Shofy.Models;
using Shofy.ViewModels.SliderVM;

namespace Shofy.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;
        public HomeController(AppDbContext context)
        {
            _context = context;
        }


        public async Task<IActionResult> Index()
        {
            List<Slider> slider = await _context.Sliders.ToListAsync();
            SliderInfo sliderInfo = await _context.SliderInfo.FirstOrDefaultAsync();





            SliderVM model = new()
            {
                Sliders = slider,
                SliderInfo = sliderInfo,
            };
            return View(model);
        }
    }
}
