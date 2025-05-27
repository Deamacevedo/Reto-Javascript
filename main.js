const expresionUsuario = prompt("Ingresa una expresión:");

function IdentificarDelimitadores(expresion) {
    const identificadores = [];
    const pares = {
        "(":")",
        "{":"}",
        "[":"]"
    };
    for (let i = 0; i < expresion.length; i++) {
        const caracter = expresion[i];
        if (caracter === "(" || caracter === "{" || caracter === "[") {
            identificadores.push(caracter);
        } else if (caracter === ")" || caracter === "}" || caracter === "]") {
            if (identificadores.length === 0) return false;
            const ultimo = identificadores.pop();
            if (pares[ultimo] !== caracter) return false;
        }
    }
    return identificadores.length === 0;
}


if (IdentificarDelimitadores(expresionUsuario)) {
    console.log("La expresión está equilibrada.")
} else {
    console.log("La expresión NO está equilibrada.")
}