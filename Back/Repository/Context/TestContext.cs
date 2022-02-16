using Microsoft.EntityFrameworkCore;

namespace Repository.Context
{
    public class TestContext:DbContext
    {
        public TestContext(DbContextOptions options):base(options)
        {
            
        }
    }
}