export const formatDate = (fecha) => {
    const formatoDate = new Date(fecha);
    const fechaActualizada = formatoDate.toLocaleString();
    return fechaActualizada;
 };
