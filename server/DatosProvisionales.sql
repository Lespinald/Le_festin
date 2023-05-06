--Comando y formato para ingresar datos en la tabla Receta
INSERT INTO Receta(ID_receta,nombre,descripcion,procedimiento,imagen) values
(1,'Huevo frito','Delicioso plato pr�ctico y f�cil de elaborar, perfecto para desayunos','1.Colocar cerca de 30g de mantequilla en el sart�n2.Romper el huevo y dejarlo caer sobre la mantequilla3.Dejar que se cocine el huevo cerca de 1 a 2 minutos y retirar','URL'),
(2,'Salchicha frita','Salchichas fritas con mantequilla ideales para una comida r�pida','1.Colocar cerca de 30g de mantequilla en el sart�n2.Destapar la salcicha y dejarla caer sobre el sart�n, bien sea picada o entera3.Dejar cocinar por cerca de 2 minutos y luego retirar','URL')

--Comando y formato para ingresar datos en la tabla Ingredientes
INSERT INTO Ingrediente(ID_ingrediente,nombre,imagen) values
(1,'Huevo','URL'),
(2,'Mantequilla','URL'),
(3,'Salchicha','URL')

--Comando y formato para ingresar datos en la tabla IngredienteAsociado
INSERT INTO IngredienteAsociado(ID_ingrediente,ID_receta) values
(1,1),
(2,1),
(2,2),
(3,2)


--Comando y formato para ingresar datos en la tabla IngredienteAsociado
INSERT INTO preguntasysugerencias(id_pregunta,id_usuario,username,textopregunta,tipo,textorespuesta) values
(1,1,'first usuario','¿Cómo se realiza la busqueda de ingredientes?','P','Escriba el ingrediente a buscar'),
(1,2,'second usuario','Deberian agregar mas recetas','S',''),
(1,1,'first usuario','Pueden añadir strudel','P','No es pregunta')
