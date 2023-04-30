--Comando y formato para ingresar datos en la tabla Receta
INSERT INTO Receta(ID_receta,nombre,descripcion,procedimiento,imagen) values
(1,'Huevo frito','Delicioso plato práctico y fácil de elaborar, perfecto para desayunos','1.Colocar cerca de 30g de mantequilla en el sartén2.Romper el huevo y dejarlo caer sobre la mantequilla3.Dejar que se cocine el huevo cerca de 1 a 2 minutos y retirar','URL'),
(2,'Salchicha frita','Salchichas fritas con mantequilla ideales para una comida rápida','1.Colocar cerca de 30g de mantequilla en el sartén2.Destapar la salcicha y dejarla caer sobre el sartén, bien sea picada o entera3.Dejar cocinar por cerca de 2 minutos y luego retirar','URL')

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
