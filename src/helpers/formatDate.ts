export const formatDate = (fecha: number) => {

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    const newDate = new Date(fecha);
    const dia = dias[newDate.getDay()];
    const numeroDia = newDate.getDate();
    const mes = meses[newDate.getMonth()];
    const año = newDate.getFullYear();
    const hora = newDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    const fechaFormateada = `${dia}, ${numeroDia} de ${mes} de ${año} a las ${hora}`;

    return fechaFormateada;

}