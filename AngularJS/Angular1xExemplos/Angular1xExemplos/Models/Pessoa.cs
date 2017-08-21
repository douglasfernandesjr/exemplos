using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular1xExemplos.Models
{
	public class Pessoa
	{
		public Pessoa()
		{

		}
		public Pessoa(string _nome, string _sobrenome, int _idade, string _cidade)
		{
			nome = _nome;
			sobrenome = _sobrenome;
			idade = _idade;
			cidade = _cidade;
		}
		public string nome { get; set; }
		public string sobrenome { get; set; }
		public int idade { get; set; }
		public string cidade { get; set; }
	}
}