# CRUD Basics
## Pasos para crear un CRUD Basico:

1-	Ubicar en que modulo se desea trabajar o identificar si es una entidad para un módulo nuevo.

2-	En Idata, crear los parámetros de la entidad

2.1- Agregarla en el Context principal en PlatformContext (utilizado solo para mantener la DB) 

Nombre Clase: Singular
Nombre Entidad: Plural
Nombre Propiedades: Singular y formato SnakeCase.
Explicación Video: min 2:10 – 12:55

2.1- Agregarla en el Context IdataContext para que pueda ser llamada de forma General en la Aplicacion  
Explicacion Video Min 28:00

3-	En el Repositorio del Módulo donde estará la entidad se debe crear la Interfaz y la clase

Nombre Clase: Singular
Nombre Interfaz: Singular
Explicación Video: 13:00- 16:30

4-	Para hacer visible la clase se debe crear el controlador en el Módulo (endpoints)
Nombre Controlador: Singular
Nombre del End-points: Plural y formato WellFormat
Explicación Video: 16:42 – 17:22

5-	En el Contenedor de Dependencias del Módulo llamado ConfigurationExtension debe detectar lo que va a instanciar al enviar la interfaz en el constructor
Tipo de Inyección de Dependencia: Scoped (debe ser único por cada Request)
6-	Ubicarse en el proyecto Platform y en la consola del administrador de paquetes Crear la migración y Ejecutarla.
Explicación Video: 18:26- 23:00
Comando para Agregar la Migración:
 EntityFrameworkCore\add-migration entidad_table_add -context platformcontext
Comando para Ejecutar la Migración:
EntityFrameworkCore\update-database -context platformcontext

7-	Ejecutar Postman para hacer pruebas
Desactivar los permisos para la Entidad Min 24:21
a-	En el Controlador de la Entidad: Hacer Override de Index y aplicar UrlRequiestBase.doNotCheckPermissions()
b-	En Program.Cs: Seccion ImaginaColombiaExtensions Agregar el Permission ignore true a la Entidad
Ej: Se puede debuguear en el ControllerBase – Metodo Index para cuando se usa el método GET en POSTMAN
