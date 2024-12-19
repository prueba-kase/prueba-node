## Prueba de node

## Descripción
Este es un proyecto basico para la prueba de node del equipo de kase

## Para ejecutar el proyecto
- Clona el repositorio:
   ```bash
   git clone https://github.com/prueba-kase/prueba-node.git
- Verificar que se encuentra en la rama **main** 
- Se debe renombrar el archivo **.env.example** a **.env**
- Ejecutar en la raiz del proyecto el comando **docker-compose up --build -d**
- Verificar el nombre del contenedor que corre la aplicación web el resultado esperado es : **prueba-node-web-1** de no ser asi ,copiar el nombre para utulizarlo en el siguiente paso
- Ejecutar las migraciones y seeds **docker exec -it prueba-node-web-1 pnpm run migrate &&  docker exec -it prueba-node-web-1 pnpm run seeds**



