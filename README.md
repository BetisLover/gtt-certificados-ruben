# GttCertificados

Esta es la parte del front para el proyecto de app de certificados diseñado para GTT. Está codificada en Angular.

## Funcionalidades
 - Control de usuarios: Disponemos de un login que requiere usuario, contraseña y correo. Dependiendo de si es administrador o usuario accederemos a más o menos funcionalidades de la app.
 - Registro: Si el usuario cuenta con el rol de administrador, puede crear nuevos usuarios o administradores dentro de la api.
 - Tabla de certificados: nada más hacer login correcto el usuario, accedemos a esta pantalla donde tenemos todos los certificados disponibles vistos de manera resumida. Podemos ordenarlos por los campos que se muestran, y también podemos acceder a una vista en detalle de cada uno de los certificados, incluso descargarlos si asi se desea.
 - Carga de certificados: podemos cargar nuestros propios certificados a la api, añadiendoles información extra si lo creemos conveniente. Acepta tanto .pfx como .p12, asi como varios formatos de certificado más.
 - Opciones de usuario Jira: aquí podemos crear/editar una cuenta de Jira asociada al usuario de la app.

## Development server

Ejecuta `ng serve` y navega hasta `http://localhost:4200/`. La app se recargará de manera automática cuando modifiques algo de código.

## Otros componentes
Este front está conectado a un backend hecho en .NET, para más detalles sobre el código, aquí tienes el repositorio: https://github.com/BetisLover/gtt-backend-certificados

