<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Teste Jquery</title>
	<link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<div class="container ">
	<h1>Tabela de preços Lux Tintas</h1>
	<button id="save" class="btn btn-primary">buscar</button>
	<button id="pdf" class="btn btn-danger">gerar PDF</button>
	<h5 class="mt-4 mb-4">Tintas luxcril table L30</h5>
	<div class=" input-g-model mb-3 ">
			<div class="me-3 col-7 input">
				<label for="s"  class="form-label ">Descrição:</label>
				<input type="text" name="description" class="form-control form-control-sm" id="desc" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Sti:</label>
				<input type="text" name="tax" min="0.01" step="0.01" class="form-control form-control-sm" value="0" id="tax" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Preço:</label>
				<input type="text" name="price" min="0.01" step="0.01" class="form-control form-control-sm" value="0" id="price" aria-describedby="emailHelp">
			</div>
			<div class="me-3 input">
				<label  class="form-label">Total:</label>
				<input type="text" name="tot" min="0.01" step="0.01" class="form-control form-control-sm" id="tot" aria-describedby="emailHelp">
			</div>
		</div>
	<form action="src/actions/Gravar.php" method="post">
		<input type="hidden" name="count" id="count">
		<button type="submit" class="btn btn-success mb-2">Salvar</button>
	</form>
	<button id="add" class="btn btn-success">Adicionar +</button>
</div>


<script type="text/javascript" src="assets/js/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="assets/js/script.js"></script>
<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
</body>
</html>