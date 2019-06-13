## Objetivo

Desarrollar una herramienta para gestion de tareas.

Se utilizara el siguiente esquema de componentes:

![Texto alternativo](EsquemaDeComponentes.png "Título alternativo")


### 1. Crear componente "Contenedor de tareas"

- Crear un componente llamado "TaskContainer.js" en el path "src/componentes"
- Agregar un titulo en tag h3 "Gestion de tareas"


### 2. Crear componente "Nueva tarea"

- Crear un componente llamado "TaskNew.js" en el path "src/componentes"
- Agregar un input field con el label "nueva tarea"
- Agregar un boton con el label "agregar"
- Agregar un state denomiando "task", inicializar con String vacio
- Vincular el state "tastk" con el input field mediante v-model
- Agregar una validacion al apretar el boton "agregar" que corrobore que task no esta vacio
- Al apretar el boton "agregar" emitir un evento denominado "newTask" y enviar como parametro el valor del state "task"

### 3. Recepción de evento

- Importar y agregar el componente "taskNew" al componente "TaskContainer"
- Agregar un state denominado "tasks" e inicializar como array vacio
- Recibir evento "newTask" agregando el parametro recibido "task" como un item del state "tasks"
- Verificar los states con js Devtools

### 4. Crear componente "Lista de tareas"

- Crear un componente llamado "TaskList.js" en el path "src/componentes"
- Agregar una prop denominada "tasks" del tipo array

### 5. Crear componente "item de lista de Tarea"

- Crear un componente llamado "TaskListItem.js" en el path "src/componentes"
- Agregar una prop "task" del tipo String
- Agregar una prop "id" del tipo Integer
- Imprimir el valor de "task" dentro del tag "<li>"

### 6. Mostrar lista de items 
- Agregar la etiqueta <ul> dentro de "TaskList.js"
- Agregar un v-for en la etiqueta <ul> e iterar la prop "tasks"
- Importar y agregar el componente "TaskListItem" poniendolo dentro del for inyectando la prop "id" y "task"


### 7. Eliminar tarea
- Agregar un boton "eliminar" en el componente "TaskListItem"
- Emitir un evento "deleteTask" al presionar el boton "eliminar" enviando como parametro el id de la tarea 
- Recibir el evento en "TaskList" y enviar hacia "TaskContainer"
- Eliminar la tarea del state "tasks" dentro de "TaskContainer"

### 8. Agregarle estilos por css

- Cambiar el color de los botones