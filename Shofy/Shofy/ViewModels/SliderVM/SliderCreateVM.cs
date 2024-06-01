using System.ComponentModel.DataAnnotations;

namespace Shofy.ViewModels.SliderVM
{
    public class SliderCreateVM
    {

        [Required]
        public List<IFormFile> Images { get; set; }
    }
}
