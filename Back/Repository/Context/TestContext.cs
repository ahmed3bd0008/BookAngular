using Microsoft.EntityFrameworkCore;

namespace Repository.Context
{
    public class TestContext:
    {
        public TestContext(DbContextOptions options):base(options)
        {
            
        }
    }
}