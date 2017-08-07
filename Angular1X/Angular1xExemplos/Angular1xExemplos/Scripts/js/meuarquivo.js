'use strict'
$(document).ready(function () {

	var nome = "Douglas";

	$("#nome").val(nome);
	$("#nomealvo").html(nome);

	$("#nome").on("input", function () {
		nome = $(this).val();
		$("#nomealvo").html(nome);
	});
});