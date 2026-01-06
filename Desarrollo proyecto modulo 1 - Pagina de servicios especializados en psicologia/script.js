//alert("¡Bienvenido a Ánima Psicología Integral!");

let respuesta = prompt("¿Deseas agendar una cita con nosotros? (si/no)");

if (respuesta.toLowerCase() === "si") {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let fecha = prompt("Ingresa la fecha deseada para la cita (DD/MM/AAAA):");
    let hora = prompt("Ingresa la hora deseada para la cita (HH:MM):");
    alert(`Gracias, ${nombre}. Tu cita ha sido agendada para el ${fecha} a las ${hora}. Nos pondremos en contacto contigo pronto.`);
}