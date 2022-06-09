<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Teste Jquery</title>
	<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
</head>
<body>

<div class="container col-7">
	<h1>Tabela de preços Lux Tintas</h1>
	<button id="save" class="btn btn-primary">Salvar</button>
	<button id="pdf" class="btn btn-danger">gerar PDF</button>
	<h5 class="mt-4 mb-4">Tintas luxcril table L30</h5>

	<div class=" input-g-model mb-3 d-flex">
			<div class="me-3 col-7 input">
				<label for="s"  class="form-label ">Descrição:</label>
				<input type="text" name="description1" class="form-control form-control-sm" id="desc1" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Preço:</label>
				<input type="text" name="price1" class="form-control form-control-sm" id="price1" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Sti:</label>
				<input type="text" name="tax1" class="form-control form-control-sm" id="tax1" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Total:</label>
				<input type="text" name="tot1" class="form-control form-control-sm" id="tot1" aria-describedby="emailHelp">
			</div>
		</div>
	<form>
		
		
	</form>
	<button id="add" class="btn btn-success">Adicionar +</button>
</div>


<script type="text/javascript" src="jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript" src="bootstrap.min.js"></script>
</body>
</html>