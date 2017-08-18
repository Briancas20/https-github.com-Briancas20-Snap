using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Playground.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact paged!!!!";

            return View();
        }
        public ActionResult Duplicates()
        {
            ViewBag.Message = "Your duplicates page";
            return View();
        }
        public ActionResult RecentlyContacted()
        {
            ViewBag.Message = " Your recently contacted page";
            return View();
        }
        public ActionResult Groups()
        {
            ViewBag.Message = "Your recent events";
                return View();
        }
        public ActionResult Day()
        {
            ViewBag.Message = "Your recent day events";
            return View();
        }
    }
}