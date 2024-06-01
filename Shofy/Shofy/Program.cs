using Microsoft.EntityFrameworkCore;
using Shofy.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddDbContext<AppDbContext>(opt =>
opt.UseSqlServer(builder.Configuration.GetConnectionString("default"))
);


var app = builder.Build();


app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();


app.MapControllerRoute(
  name: "areas",
  pattern: "{area:exists}/{controller=Dashboard}/{action=Index}/{id?}");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");


app.Run();
