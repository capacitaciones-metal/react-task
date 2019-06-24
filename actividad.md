## Objetivo

Desarrollar una herramienta para gestion de tareas.

Se utilizara el siguiente esquema de componentes:

![Texto alternativo](EsquemaDeComponentes.png "Título alternativo")


### 1. Crear componente "Contenedor de tareas"

- Crear un componente llamado "TaskContainer" en el path "src/componentes"
- Agregar un titulo en tag h3 "Gestion de tareas"
- Importar y agregar el componente "TaskContainer" en "App"

### 2. Crear componente "Nueva tarea"

- Crear un componente llamado "TaskNew." en el path "src/componentes"
- Agregar un input field con el label "nueva tarea"
- Agregar un boton con el label "agregar"
- Agregar un state denomiando "task", inicializar con String vacio
- Vincular el state "task" con el input field mediante value
- Importar y agregar el componente "TaskNew" al componente "TaskContainer"
- Inyectar una funcion llamada "handleAddTask" desde TaskContainer hacia TaskNew mediante una prop llamada "addTask"
- Implementar la funcion "handleAddTask" en taskContainer, recibiendo 1 parametro (task) e imprimir por consola el valor recibido
- Agregar una validacion al apretar el boton "agregar" que corrobore que task no esta vacio
- Al apretar el boton "agregar" luego de invocar la funcion de addTask vaciar el contenido del input


### 3. Recepción de evento
- Agregar un state denominado "tasks" e inicializar como array vacio
- Agregar items al array "tasks" en el metodo "handleAddTask" desde el valor recibido en "task"
- Verificar los states con  Devtools

### 4. Crear componente "Lista de tareas"

- Crear un componente llamado "TaskList" en el path "src/componentes"
- Agregar una prop denominada "tasks" del tipo array
- Agregar un titulo en tag h4 "Lista de tareas"
- Importar y agregar el componente "TaskList" al componente "TaskContainer"
- Desde "TaskContainer" inyectar la variable del estado interno "tasks" en la prop "tasks" del componente "TaskList"

### 5. Crear componente "item de lista de Tarea"

- Crear un componente llamado "TaskListItem" en el path "src/componentes"
- Agregar una prop "task" del tipo String
- Agregar una prop "id" del tipo Number
- Imprimir el valor de "task" dentro del tag "<li>"

### 6. Mostrar lista de items 
- Importar y agregar el componente "TaskListItem" poniendolo dentro del for inyectando la prop "id" y "task"
- Agregar la etiqueta <ul> dentro de "TaskList"
- Agregar un v-for en la etiqueta <ul> e iterar la prop "tasks"


### 7. Eliminar tarea
- Agregar un boton "eliminar" en el componente "TaskListItem"
- Al presionar el boton "eliminar" solicitar confirmación
- Al presionar el boton "eliminar" emitir un evento "delete-task" (kebab-case) enviando como parametro el id de la tarea 
- Recibir el evento en "TaskList" y volver a emitir hacia "TaskContainer" (ver luego tema store)
- Eliminar la tarea del state "tasks" dentro de "TaskContainer"


### 8. Agregarle estilos por css

- Cambiar el color de los botones