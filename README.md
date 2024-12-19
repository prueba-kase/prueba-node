## Prueba de node

## Descripción
Este es un proyecto basico para la prueba de node del equipo de kase

## Para ejecutar el proyecto
- Clona el repositorio:
   ```bash
   git clone https://github.com/prueba-kase/prueba-node.git
- Verificar que se encuentra en la rama **main**
- Se debe renombrar el archivo **.env.example** a **.env**
- Verificar que se este ejecutando **docker** en el equipo
- Ejecutar en la raiz del proyecto el comando **docker-compose up --build -d**
- Verificar el nombre del contenedor  con el comando **docker ps**,  el resultado esperado es : **prueba-node-web-1**. de no ser asi ,copiar el nombre del contenedor para utulizarlo en el siguiente paso
- Ejecutar las migraciones y seeds **docker exec -it prueba-node-web-1 pnpm run migrate &&  docker exec -it prueba-node-web-1 pnpm run seeds**

## Dependencia
Para loguararse en el aplicativo de usa el email **prueba@prueba.com** y la contraseña **123456**

- este proyecto depende de la correcta ejecución de su frontend en react el cual se encuentra en:
   ```bash
   git clone https://github.com/prueba-kase/prueba-react.git



