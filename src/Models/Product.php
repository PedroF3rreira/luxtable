<?php 
namespace Source\Models;

use CoffeeCode\DataLayer\DataLayer;

class Product extends Datalayer
{
	
	function __construct()
	{
		parent::__construct("products",['description', 'price'],'id',false);
	}
}