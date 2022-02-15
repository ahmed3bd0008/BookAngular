using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Repository.Context;

namespace Api.Extension
{
    public static class ConnectedSqlExtension
    {
        public static void ConnectedSql(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContextPool<TestContext>(d=>d.
            useSqlServer(configuration.GetConnectionString("ConnectionStrings"),b=>b.MigrationsAssembly("Api")));
              services.AddDbContext<AppDbContext>(opt=>
                        opt.UseSqlServer(confg.GetConnectionString("sqlConnection"),
                                                            b=>b.MigrationsAssembly("API")));
        }
    }
}