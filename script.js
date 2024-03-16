document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");


    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;
        let error = false;

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            error = true;
            mensajeError.appendChild("El ID debe tener 5 dígitos exactos.");
            return mensajeError;
        }

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "" || apellidos.trim() === "") {
            error = true;
            mensajeError.appendChild(document.createTextNode("El nombre y los apellidos no pueden estar vacíos."));
            return mensajeError;
        }

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            error = true;
            mensajeError.appendChild(document.createTextNode("El teléfono debe tener el formato (###)###-####."));
            return mensajeError;
        }


        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            error = true;
            mensajeError.appendChild(document.createTextNode("El correo electrónico no es válido."));
            return mensajeError;
        }


        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            error = true;
            mensajeError.appendChild("La edad debe ser un número positivo.");
            return mensajeError;
        }


        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            error = true;
            mensajeError.appendChild("La fecha de nacimiento debe tener el formato AAAA-MM-DD.");
            return mensajeError;
        }

        // Si todas las validaciones pasaron, puedes enviar el formulario o realizar otras acciones aquí
        if (error == false) {
            mensajeError.style.backgroundColor = "#E3E3E3";
            mensajeError.textContent = "Formulario enviado con éxito.";
            return mensajeError;
        }
        mensajeError.textContent = mensajeCompilado;
    });
});