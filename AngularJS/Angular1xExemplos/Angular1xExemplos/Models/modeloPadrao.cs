using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular1xExemplos.Models
{
	public class modeloPadrao
	{
		public int Id { get; set; }
		public string Nome { get; set; }
		public string Cidade { get; set; }
		public int Idade { get; set; }
		public List<Pessoa> Pessoas { get; set; }
}
}