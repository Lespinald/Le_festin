--Comando y formato para ingresar datos en la tabla Usuarios
INSERT INTO Usuarios(id_usuario, username) values
('94a7ba35-0b2a-40e6-858b-1bf643d119e9','Davidrg02'),
('55de24b1-a86a-4255-a9a2-beafc841ae77','Santigo123'),
('1cd2c4ad-231d-4630-9f11-c5f09bb4fed4','Juan_2000');

--Comando y formato para ingresar datos en la tabla Receta
INSERT INTO Receta(nombre,descripcion,procedimiento,imagen) values
('Huevo frito','Delicioso plato practico y facil de elaborar, perfecto para desayunos','{"1.Colocar cerca de 30g de mantequilla en el sarten", "2.Romper el huevo y dejarlo caer sobre la mantequilla", "3.Dejar que se cocine el huevo cerca de 1 a 2 minutos y retirar"}','https://cdn-icons-png.flaticon.com/512/2067/2067343.png'),
('Salchicha frita','Salchichas fritas con mantequilla ideales para una comida rapida','{"1.Colocar cerca de 30g de mantequilla en el sarten", "2.Destapar la salcicha y dejarla caer sobre el sarten, bien sea picada o entera3.Dejar cocinar por cerca de 2 minutos y luego retirar"}','https://cdn-icons-png.flaticon.com/512/2067/2067343.png');

--Comando y formato para ingresar datos en la tabla Ingredientes
INSERT INTO Ingrediente(nombre, imagen) VALUES
('Harina de trigo', 'https://cdn-icons-png.flaticon.com/512/2067/2067343.png'),
('Azúcar blanca', 'https://cdn-icons-png.flaticon.com/512/3703/3703434.png'),
('Mantequilla', 'https://cdn-icons-png.flaticon.com/512/2915/2915875.png'),
('Huevos', 'https://cdn-icons-png.flaticon.com/512/3142/3142726.png'),
('Leche', 'https://cdn-icons-png.flaticon.com/512/3982/3982755.png'),
('Sal', 'https://cdn-icons-png.flaticon.com/512/2156/2156550.png'),
('Levadura', 'https://cdn-icons-png.flaticon.com/512/3348/3348061.png'),
('Vainilla', 'https://cdn-icons-png.flaticon.com/512/6768/6768194.png'),
('Canela', 'https://cdn-icons-png.flaticon.com/512/4139/4139334.png'),
('Chocolate', 'https://cdn-icons-png.flaticon.com/512/3465/3465221.png'),
('Tomate', 'https://cdn-icons-png.flaticon.com/512/1054/1054111.png'),
('Manzana', 'https://images.vexels.com/media/users/3/188899/isolated/preview/b53c80cc51ec7c0d6dd3eec76837cad8-trazo-de-icono-de-manzana.png'),
('Carne de res', 'https://cdn-icons-png.flaticon.com/512/5745/5745943.png'),
('Ajo', 'https://cdn-icons-png.flaticon.com/512/6108/6108170.png');

--Comando y formato para ingresar datos en la tabla IngredienteAsociado
INSERT INTO IngredienteAsociado(ID_ingrediente,ID_receta) values
(3,1),
(4,1),
(3,2);

--Comando y formato para ingresar datos en la tabla IngredienteAsociado
INSERT INTO preguntasysugerencias(id_usuario,textopregunta,tipo,textorespuesta) values
('94a7ba35-0b2a-40e6-858b-1bf643d119e9','¿Cómo se realiza la busqueda de ingredientes?','P','Escriba el ingrediente a buscar'),
('55de24b1-a86a-4255-a9a2-beafc841ae77','Deberian agregar mas recetas','S',''),
('94a7ba35-0b2a-40e6-858b-1bf643d119e9','Pueden añadir strudel','P','No es pregunta');
