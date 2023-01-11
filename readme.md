1.Descripción general del proyecto.
Este proyecto es un blog personal de viajes. En el cual pretendo ir subiendo de a poco experiencias, historias y mucho mas sobre mis 
viajes realizados
La idea principal es que sea una pagina muy visual por lo que intento colocar alto contenido de imagenes y menor cantidad de texto,
quiero que sea de facil navegacion, muy intuitiva para utilizarla y seguir los diferentes enlaces y paginas que propongo con el contenido.

2.El estado del proyecto.
 El blog actualmente se encuentra en desarrollo ya que estoy escribiendo las diferentes paginas de a poco,
 para este trabajo en particular solamente he actualizado la pagina "Japon" la cual se puede acceder
 desde la pagina principal en el cuerpo de la pagina o tambien desde el NAV en la parte Continente - Asia - Japon.
 Espero poder ir actualizando poco a poco las demas entradas del blog y tambien optimizar el codigo desarrollado para este proyecto.

3.Guía para instalación y funcionamiento. 
En el archivo index.js comente todo lo relacionado a la base de datos, utilizando comentarios para que sea mas facil descomentar para probar si el blog funciona correctamente.

La base de datos recolecta la informacion ingresada por los usuarios en la pagina "Contacto", La DB almacena los datos del nombre, email y comentarios de los usuarios, tambien envia un mail para confirmar que se registro con exito al blog.

Cabe aclarar que mi pc es una MAC y por ejemplo en el archivo .ENV
tuve que llamar a las variables APP_PORT por ejemplo
ya que mi pc trae la variables "PORT" o "Password" como palabras
reservadas que no puedo utilizar. En la pagina GLITCH
no me tomaba con esa palabra asi que elimine el prefijo "APP", pero en github lo deje como estaba.