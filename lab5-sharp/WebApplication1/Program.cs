using Microsoft.EntityFrameworkCore;
using WebApplication1.DataContext;
using WebApplication1.Middlewares;
using WebApplication1.Services.Interfaces;
using WebApplication1.Services.Realizations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<IDataContext, MyDbContext>(x => x.UseSqlServer(connectionString));
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IPlayerService, PlayerService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors(x => x
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
app.UseMiddleware<ErrorHandlerMiddleware>();
app.MapControllers();

app.Run();
