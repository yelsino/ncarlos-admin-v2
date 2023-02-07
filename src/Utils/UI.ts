

/**
 * Espera un tiempo específico antes de resolver una promesa.
 *
 * @param {number} ms - El tiempo de espera en milisegundos.
 * @returns {Promise} Una promesa que se resuelve después del tiempo especificado.
 */
export const waitSeconds = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const validarNumero = (value) => {
    let error;
    if (!/^\d*$/.test(value)) {
      error = "Debe ser un número válido";
    }
    return error;
};