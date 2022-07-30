//Funciones en el MEDIO de una SOLICITUD/RESPUESTA(req, res)
//Estas se pueden encadenar con otras funciones middleware :
//---!
//Ejemplo "Next();"
//Por que utilizar Next()? Por si el middleware no finaliza o se queda colgado esta funcion devuelve si o si una respuesta
//--

//Funcionalidades del Middleware:

//Dar paso al manejo de la Solicitud/Respuesta(Inicio/Final de un ciclo de req, res)
//Ejecutar cualquier codigo(suma, resta, levantar  newUser, getUpdateUser)
//Realizar cambios en la solicitud y los objetos de respuesta
//Invocar el siguiente Middleware
//¡¡¡Manejo de errores!!!

//Jamas devolver un 500 #AlexisTips

