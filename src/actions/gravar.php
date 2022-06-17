<?php 

require "../../vendor/autoload.php";

use Source\Models\Product;

$data = [];

$length = filter_input(INPUT_POST, 'count');

for($i = 0; $i < $length; $i++){
	
	$p = new Product();
	$p->description = filter_input(INPUT_POST, 'description'.$i)??'';
	$p->price = filter_input(INPUT_POST, 'price'.$i)??'';
	
	if(!empty($p)){
		$p->save();
	}
	var_dump($p);
}	
