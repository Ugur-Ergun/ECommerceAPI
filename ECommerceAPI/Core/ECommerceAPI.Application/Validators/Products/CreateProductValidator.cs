using ECommerceAPI.Application.ViewModels.Products;
using FluentValidation;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace ECommerceAPI.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Name cannot be null")
                .MaximumLength(150)
                .MinimumLength(5)
                    .WithMessage("Name shoulb be 5-150 char");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Stock cannot be null")
                .Must(s => s >= 0)
                    .WithMessage("Stock cannot be less than 0");

            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull()
                    .WithMessage("Price cannot be null")
                .Must(s => s >= 0)
                    .WithMessage("Price cannot be less than 0");

        }
    }
}
