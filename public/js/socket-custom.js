var socket = io();
//escuchar sucessos
socket.on('connect',function(){
  console.log('conectado al sevidor');
});
socket.on('disconnect',function(){
  console.log('Perdimos conexion con el servidor');
});
//emit para enviar informacion
socket.emit('enviarMensaje',{
  usuario:'Hernán',
  mensaje:'Hola mundo'
},function(resp){
  console.log('Respuesta server',resp);
});
//escuchar informacion
socket.on('enviarMensaje', function(mensaje){
  console.log('Servidor:',mensaje);
});
