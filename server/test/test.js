const Usuario = require('../models/usuario');

// Crear un nuevo usuario
const nuevoUsuario = new Usuario({
  ID_usuario: 1,
  username: 'juanperez'
});

nuevoUsuario.save(function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario guardado exitosamente!');
  }
});

// Buscar un usuario por ID
Usuario.findById(1, function(err, usuario) {
  if (err) {
    console.error(err);
  } else {
    console.log(usuario);
  }
});

// Actualizar un usuario
Usuario.findOneAndUpdate({ ID_usuario: 1 }, { username: 'pedrolopez' }, function(err, usuario) {
  if (err) {
    console.error(err);
  } else {
    console.log(usuario);
  }
});

// Eliminar un usuario
Usuario.deleteOne({ ID_usuario: 1 }, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Usuario eliminado exitosamente!');
  }
});
