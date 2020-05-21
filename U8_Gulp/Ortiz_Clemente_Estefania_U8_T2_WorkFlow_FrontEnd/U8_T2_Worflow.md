## U8_T2:Workflow_FrontEnd_General_y_Documentar

Durante este semana  vamos a avanzar en el uso de Gulp y definiremos un flujo de desarrollo Front-End sencillo.

Debéis ver los siguientes apartados del curso: (El apartado 2.10, 2.11 y los apartado 3.4 y 3.5). Tras verlo debéis hacer lo siguiente:

* Colocar en vuestra carpeta raíz del proyecto el fichero .html de vuestro CV.
* Colocar el arhivo .scss en la caperta scss que esté dentro de la carpeta raíz de vuestro proyecto.
* Colocar todas las imágenes en la carpeta img que estará dentro de la carpeta raíz de vuestro proyecto.
* Documentar el archivo .scss usando sassdoc.
* Crear una tarea una tarea gulp que genere la documentación con Sassdoc.
* Crear una tarea gulp que genere el achivo .css partiendo de vuestro .scsss general (el de los @mixins y funciones)
* Crear una tarea tarea gulp que copie todas las imágenes de la carpeta img a una carpeta img dentro de la capeta dist.
* Crear una tarea por defecto que haga lo siguiente:
    * En paralelo crear la documentación, generar el CSS y copiar las imágenes a la carpeta img dentro de dist (comprobad que las rutas están correctas y que las imágenes se siguen viendo).
    * Al acabar la tarea de documentación copiar lo generado a la carpeta dist/
    * Al acaba la tarea de generación copiar el .html , el .css generado a la carpeta dist/ (comprobad que las rutas están correctas y que los estilos están bien enlazados).
