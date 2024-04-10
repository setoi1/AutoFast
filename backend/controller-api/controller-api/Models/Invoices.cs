namespace controller_api.Models
{
    public class Invoices
    {
        public long Id { get; set; }
        public DateOnly Date { get; set; }
        public string? LicenseNumber { get; set; }
        public double Labor {  get; set; }
        public double Parts { get; set; }
        public double Other { get; set; }
        public double Tax { get; set; }
        public double Total { get; set; }
        public string? PaymentType { get; set; }
        public double Cost { get; set; }
        public double Profit { get; set; }
    }
}
