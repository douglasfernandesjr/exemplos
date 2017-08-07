using Angular1xExemplos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular1xExemplos.Controllers
{
	public class AjaxController : Controller
	{
		// GET: Ajax
		public JsonResult Pessoas()
		{
			var list = new List<Pessoa>();

			list.Add(new Pessoa("Alice", "Morais", 16, "Cuiaba"));
			list.Add(new Pessoa("Geonni", "Frota", 27, "Sorocaba"));
			list.Add(new Pessoa("Vanessa", "Lima", 52, "Presidente Prudente"));
			list.Add(new Pessoa("Lucas", "Couto", 42, "Guarujá"));

			return Json(list, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public JsonResult nomeExiste(string nome)
		{
			if (nome == "Douglas")
			{
				return Json(new { existe = true });
			}
			else
			{
				return Json(new { existe = false });
			}

		}

		[HttpGet]
		public JsonResult postComplexo (modeloPadrao model)
		{
			return Json(new { existe = false });
		}

	}
}