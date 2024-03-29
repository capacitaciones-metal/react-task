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
- Agregar items al array "tasks" en el metodo "handleAddTask" desde el valor recibido en "task". Usar concat (React way)
- Verificar los states con  Devtools

### 4. Crear componente "Lista de tareas"

- Crear un componente llamado "TaskList" en el path "src/componentes"
- Agregar una prop denominada "list" del tipo array
- Agregar un titulo en tag h4 "Lista de tareas"
- Agregar una lista mediante <ul> & <li> con un loop. Usar map (React way)
- Importar y agregar el componente "TaskList" al componente "TaskContainer"
- Desde "TaskContainer" inyectar la variable del estado interno "tasks" en la prop "list" del componente "TaskList"

### 5. Crear componente "item de lista de Tarea"

- Crear un componente llamado "TaskListItem" en el path "src/componentes"
- Agregar una prop "subject" del tipo String
- Agregar una prop "id" del tipo Number
- Imprimir el valor de "subject" dentro del tag "<li>"
- Importar y agregar el componente "TaskListItem" remplazando el li del loop (map) inyectando la prop "id" y "subject"



### 6. Eliminar tarea
- Agregar un boton "eliminar" en el componente "TaskListItem"
- Al presionar el boton "eliminar" solicitar confirmación (window.confirm). Agregar console.log("confirmado")
- Crear un simple EventSystem con funcion emit y suscribe
- Importar eventSystem "TaskContainer" y suscribir al evento "delete-task" con una funcion "handleDeleteTask"
- Importar eventSystem "TaskListItem" y al confirmar emitir un evento "delete-task" sobre el eventSystem
- En la funcion "handleDeleteTask" dentro de "TaskContainer" eliminar la tarea del state "tasks" usando filter (React way) 


### 7. Agregarle estilos con material ui

- Agregar una card centrada y wrapear el contenido en la misma
- Mejorar input text
- Mejorar boton
- Mejorar lista