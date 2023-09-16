// Obtener referencias a elementos HTML
const questionForm = document.getElementById('question-form');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const answerList = document.getElementById('answer-list');

// Evento de clic en el botón "Guardar"
submitButton.addEventListener('click', function () {
    // Obtener los valores de la pregunta y la respuesta
    const question = questionInput.value;
    const answer = answerInput.value;

    // Crear un elemento de lista para mostrar la respuesta
    const listItem = document.createElement('li');
    listItem.textContent = `Pregunta: ${question}, Respuesta: ${answer}`;

    // Agregar el elemento de lista a la lista de respuestas
    answerList.appendChild(listItem);

    // Limpiar los campos de entrada
    questionInput.value = '';
    answerInput.value = '';

    // Evitar el envío del formulario
    event.preventDefault();
});

