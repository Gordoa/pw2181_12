<?php
	$p1= $_GET["parametro1"];
	for ($i=0; $i < 10 ; $i++) { 

		print("HOLA PHP ".$i."<br>");
	}
?>

<html>
	<head>
	<title></title>	
	</head>
	<body>
		<?php print($p1); ?>
	</body>
</html>
