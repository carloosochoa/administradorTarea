let tareas =  [];


document.getElementById("formulario").addEventListener('submit',function(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let estimado = document.getElementById("estimado").value;
    let finalizacion = document.getElementById("finalizacion").value;
    let alta = document.getElementById("alta").value;

    let selectElemento = document.getElementById("select");
    let option = selectElemento.options[selectElemento.selectedIndex].text;

    const nuevaTarea = {
        nombre: nombre,
        estimado: estimado,
        finalizacion: finalizacion,
        alta: alta,
        option: option
    };
    tareas.push(nuevaTarea);



    const contTabla = document.createElement("div");
    contTabla.className = "contTabla";
    const tabla = document.querySelector("table");

    const fila = tabla.insertRow();
    fila.classList.add("nueva-fila");
    ultimo = Object.values(tareas[tareas.length-1]);

    ultimo.forEach(function(valor){
        const celda = fila.insertCell();
        celda.textContent = valor;
    });
    const celdaMod = fila.insertCell()
    const modificar = document.createElement("button");
    modificar.textContent = "Modificar";
    modificar.classList.add("boton-modificar");
    celdaMod.appendChild(modificar);

    const celdaBorrar = fila.insertCell();
    const borrar = document.createElement("button");
    borrar.textContent = "Borrar";
    borrar.classList.add("boton-borrar");
    celdaBorrar.appendChild(borrar);

    borrar.addEventListener("click", function() {
        const rowIndex = fila.rowIndex;
        tabla.deleteRow(rowIndex);
        tareas.splice(rowIndex - 1, 1);
    });


});

