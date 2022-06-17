<?php 

require "../../vendor/autoload.php";

use Source\Models\Product;

$data = [];

$length = filter_input(INPUT_POST, 'count');

for($i = 0; $i < $length; $i++){
	
	if(filter_input(INPUT_POST, 'description'.$i) || filter_input(INPUT_POST, 'price'.$i)){
		$p = new Product();
		$p->description = filter_input(INPUT_POST, 'description'.$i);
		$p->price = str_replace(',','.',filter_input(INPUT_POST, 'price'.$i));
		$p->save();

		echo filter_input(INPUT_POST, 'price'.$i);
	}
	
}	
echo "salvo com suscesso!";
