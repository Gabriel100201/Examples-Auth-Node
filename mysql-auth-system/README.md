# Instrucciones de Uso
1- Configuración de la Base de Datos:
Si no existe una tabla en la base de datos, asegúrese de crear una tabla con el nombre "users" y los campos "username", "email" y "password".
2- Configuración de Variables de Entorno:
Asegúrese de configurar correctamente las variables de entorno necesarias y cambie el nombre del archivo .env-example a .env.
  EJ: 
    DB_HOST = localhost
    DB_PORT = 3306
    DB_USERNAME = root
    DB_PASSWORD = 1234
    DB_NAME = test_db
    DB_SECRET= palabraRandom

3- Ejecución de la Aplicación:
Ejecute el comando node app.js para iniciar la aplicación.

# Descripción
Esta aplicación debe ser usada como base para proyectos que requieran login, su uso ideal es como una api independiente, mas no como una base para la creación de otras funcionalidades por encima de la misma. Esta proporciona un conjunto de rutas para el registro de usuarios, inicio de sesión y verificación de tokens JWT.

# Rutas:
1- /register (POST)
Parámetros:
username (Nombre de usuario)
email (Correo electrónico)
password (Contraseña)
2- /login (POST)
Parámetros:
email (Correo electrónico)
password (Contraseña)
3- /verifyToken (GET)
Encabezados:
2ls-pd4-sdassda-3fsddfasad (Token JWT)