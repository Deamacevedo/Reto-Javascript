Crear una función que reciba una expresión y determine si sus delimitadores (paréntesis () ,
llaves {} , y corchetes [] ) están equilibrados. La función debe devolver True si están
equilibrados y False en caso contrario.


Requerimientos

		1. Identificación de Delimitadores:

La función debe identificar y verificar únicamente los paréntesis () , las llaves {} , y los corchetes []
Los caracteres no delimitadores (como letras, números y operadores) pueden ser ignorados en el proceso de validación.


		2. Reglas para Expresiones Equilibradas:

Cada delimitador de apertura debe tener su correspondiente delimitador de cierre en el orden correcto.
Los delimitadores anidados deben cerrarse en el orden inverso al que se abrieron. Ejemplo:
({[]}) es equilibrado.
([)] no es equilibrado.
La expresión debe terminar con todos los delimitadores cerrados.


		3. Manejo de Errores y Casos Especiales:

La función debe devolver False si la expresión contiene un número desigual de delimitadores de apertura y cierre.
La función debe devolver True si no hay delimitadores en la expresión, ya que se considera equilibrada.
Para cada caso, la función debe manejar adecuadamente delimitadores solitarios sin pareja de cierre o apertura.


		4. Interfaz para Ingresar y Validar Expresiones:

Crear una interfaz simple en la que el usuario pueda ingresar una expresión y ver si está equilibrada o no.
