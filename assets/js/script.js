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
	
var count = 0;

function onlynumber(evt) {
	
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	var regex = /^[0-9.,]+$/;
   //var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
   	theEvent.returnValue = false;
   	if(theEvent.preventDefault) theEvent.preventDefault();
   }
}

//cria elementos de inputs ao iniciar documento
function createInputs(){
	for (var i = 0; i < 15; i++) {

		let clone = $(".input-g-model").clone();
		clone.addClass("d-flex");	
		let input = clone.find('input');
		
		input.each(function(index, el) {
			el.name = el.name + count;
			el.id = el.id + count

			/**
			* adiciona evento nos campos price
			* e calcula tax e frete e adiciona valor total
			**/
			if(el.id === 'price'+count){
				var key = count;
				el.addEventListener('change', (e) =>{
					let tax = parseFloat($('input#tax'+key).val().replace(',','.'));
					let price = parseFloat(e.target.value.replace(',','.'));
					let tot = 0;
					tot = price + price * (tax / 100);

					$('input#tot'+key).val(tot.toFixed(2).replace('.',','));					
				});

				el.addEventListener('keypress', () => onlynumber());
			} 

			/**
			* adiciona evento nos campos tax
			* e calcula tax e frete e adiciona valor total
			**/
			if(el.id === 'tax'+count){
				var key = count;
				el.addEventListener('change', (e) =>{
					let price = parseFloat($('input#price'+key).val().replace(',','.'));
					let tax = parseFloat(e.target.value.replace(',','.'));
					let tot = 0;
					tot = price + price * (tax / 100);

					$('input#tot'+key).val(tot.toFixed(2).replace('.',','));					
				});

				el.addEventListener('keypress', () => onlynumber());
			} 
		});

		let html = clone.removeClass("input-g-model");
		$("form").append(html);
		count++;
	}
	$("#count").val(count);
}

//função cria elementos inputs ao clicar no botão
function addInput(){
	

	let clone = $(".input-g-model").clone();

	clone.addClass("d-flex");
	
	let input = clone.find('input');
	
	count++;
	
	input.each(function(index, el) {
		el.name = el.name + count;
		el.id = el.id + count;

		/**
			* adiciona evento nos campos price
			* e calcula tax e frete e adiciona valor total
			**/
			if(el.id === 'price'+count){
				var key = count;
				el.addEventListener('change', (e) =>{
					let tax = parseFloat($('input#tax'+key).val().replace(',','.'));
					let price = parseFloat(e.target.value.replace(',','.'));
					let tot = 0;
					tot = price + price * (tax / 100);

					$('input#tot'+key).val(tot.toFixed(2).replace('.',','));					
				});

				el.addEventListener('keypress', () => onlynumber());
			} 

			/**
			* adiciona evento nos campos tax
			* e calcula tax e frete e adiciona valor total
			**/
			if(el.id === 'tax'+count){
				var key = count;
				el.addEventListener('change', (e) =>{
					let price = parseFloat($('input#price'+key).val().replace(',','.'));
					let tax = parseFloat(e.target.value.replace(',','.'));
					let tot = 0;
					tot = price + price * (tax / 100);

					$('input#tot'+key).val(tot.toFixed(2).replace('.',','));					
				});

				el.addEventListener('keypress', () => onlynumber());
			} 
		});
	
	let html = clone.removeClass("input-g-model");
	$("form").append(html);

	$("#count").val(count);
	
}


	//açoes da de click de botoes
	$("#add").click(()=>addInput());

	createInputs();	

	
});