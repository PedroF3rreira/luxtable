// $(() => {
	
// 	//seleciona atributos e modifica
// 	$("a").attr("href", "www.google.com.br");
// 	$('img').attr('width', 150);
// 	$('img').attr('border', 1);
	

// 	let largura = $('img').attr('width');
	

// 	//pegar valores de elementos
// 	$("a").html('link mudado');//muda valor
// 	$('a').html();//pega valor html do elemento

// 	//atribuir classes a elementos
// 	$('.element1').find('button').addClass('buttons');
// 	$('.element1').find('button').html('Click Aqui<strong> agora!!</strong>');
// 	//$('.element1').find('button').text('Click Aqui<strong> agora!!</strong>');

// 	$('input').attr('placeholder', 'Digite seu nome');
// 	$('input').val('PEDRO DANIEL');
// 	$('input').before('<img src="https://www.google.com.br/google.jpg"/>');

// 	var html = "<tr><td>1</td><td>2</td><td>3</td></tr>";


// 	$('#add').click((event) => {
// 		$('tbody').append(html);
// 	});

// 	$('#remove').click((event) => {
// 		$('tbody tr:last').remove();
// 	});
// });

$(() => {

	for (var i = 0; i < 15; i++) {

		let clone = $(".input-g-model").clone();
			
		let input = clone.find('input');
		
		input[0].name = 'description'+i;
		input[1].name = 'price'+i;
		input[2].name = 'tax'+i;
		input[3].name = 'tot'+i;
		input[0].id = 'description'+i;
		input[1].id = 'price'+i;
		input[2].id = 'tax'+i;
		input[3].id = 'tot'+i;


		//input[0].attr('name', 'decription'+i);
		let html = clone.removeClass("input-g-model");
		$("form").append(html);
	}

	$("#add").click(() =>{
		let clone = $(".input-g-model").clone();
		let html = clone.removeClass("input-g-model");
		$("form").append(html);
		
	});
});