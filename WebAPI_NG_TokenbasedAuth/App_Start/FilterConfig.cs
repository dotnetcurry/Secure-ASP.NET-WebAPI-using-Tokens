using System.Web;
using System.Web.Mvc;

namespace WebAPI_NG_TokenbasedAuth
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
