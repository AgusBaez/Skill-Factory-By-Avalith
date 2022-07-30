/*
En express los estados HTTP se deben manejar con un middleware para devolver una respuesta

EJEMPLO¡:
404, este no es un error si no que avisa que toda funcionalidad y routing estuvieron perfectos
pero no existe tal respuesta para la cosnulta que se esta pidiendo

Estos se manejan al final de las funciones en los middleware
PARA ATACAR A TODO LO QUE NO SE LLEGUE A DEVOLVER DE UN/UNAS REQUEST(solicitudes).. cuidado que es bravo y ataca SIEMPRE al final del middleware
*/