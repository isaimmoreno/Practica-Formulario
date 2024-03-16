Esta práctica es un formulario que revisa a través de regex que los datos introducidos sean válidos

1. Funcionamiento de la etiqueta input.

Genera un elemento en donde se puede ingresar texto, se puede seleccionar o interactuar en diferentes maneras. Los siguientes son los más comunes.
- button
- checkbox
- date
- email
- password
- radio
- submit
- time

Hay más pero realmente son más cajas de texto que tienen diferente significado.

2. La etiqueta button

Es un elemento al que se le puede hacer clic. Se puede usar en formularios. Para agregar un evento se puede definir la propiedad onClick y el valor se puede vincular a una función en javascript. Un ejemplo puede ser
<button onclick="funcionEjemplo()">

3. El método addEventListener.

Este método se usa en Javascript y es para agregar un Event Listener a cualquier elemento. Un event listener es un elemento que se queda "escuchando" un tipo de evento. El más común es el click del ratón pero también hay otros como DOMContentLoaded para esperar a que el documento cargue. Otro puede ser onkeydown que espera una tecla presionada.

En este documento se usó para esperar que el botón tipo submit reaccionara cuando se le diera click. Se añadió una función anónima para que empezara a revisar los campos de datos.

La linea usada fue
formulario.addEventListener("submit", function(event) { ... }

4. Validación de las entradas

Las entradas son validadas con regex con el método test. Si no son válidas, mensajeError.textContent se modifica con un mensaje reflejando los cambios que se deben hacer.

- ID /^\d{5}$/

Revisa que debe empezar con 5 dígitos

- Nombre y apellidos 

Cada campo de nombre y apellidos se corta y se corta en partes. Esto se evalua para que no sean una cadena vacia.

- Teléfono /^\(\d{3}\)\d{3}-\d{4}$/

Empieza con un caracter (, se esperan 3 dígitos y luego otro caracter ) para cerrar el paréntesis. Luego se esperan 3 dígitos, siguiente un guión y por último se esperan otros 4 dígitos.

- Correo electrónico /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/

Empieza con por lo menos un alfanumérico. Siguen caracteres son opcionales como el punto y uno o más caracteres alfanuméricos. Sigue con un @ y termina con lo mismo del la primera parte.

- Edad

Primero se parsea el string edad para guardarlo en una variable int. Luego se evalúa con un if si es mayor a 0.

- Fecha de nacimiento /^\d{4}-\d{2}-\d{2}$/

Se inicia la cadena con 4 dígitos, sigue un guión, dos dígitos, otro guión y por último dos dígitos.