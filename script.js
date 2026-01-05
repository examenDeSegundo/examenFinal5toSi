let bloqueado = false;

function mostrarNombre() {
    document.getElementById("nombreMostrado").innerText =
        document.getElementById("alumno").value;
}

function calificar() {
    if (bloqueado) return;

    const correctas = {
        p1:"a", p2:"a", p3:"a", p4:"b",
        p5:"a", p6:"a", p7:"a", p8:"a",
        p9:"a", p10:"a", p11:"a", p12:"a"
    };

    let puntos = 0;

    for (let p in correctas) {
        const opciones = document.getElementsByName(p);
        let bien = false;

        opciones.forEach(op => {
            if (op.checked && op.value === correctas[p]) {
                bien = true;
                puntos++;
            }
            op.disabled = true;
        });

        if (!bien) {
            opciones[0].closest(".pregunta").classList.add("incorrecta");
        }
    }

    document.getElementById("resultado").innerText =
        "Calificación final: " + puntos + " / 12";

    document.getElementById("calificacionFinal").value =
        puntos + " / 12";

    bloqueado = true;
}
