// Obtener referencias a elementos HTML
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const answerList = document.getElementById('answer-list');

// Preguntas fijas
const questions = [
    '¿Cuál es la función principal del proyecto actual? ',
    '¿Cuáles son los componentes y tecnologías utilizados en el proyecto actual? ',
    '¿Cuáles son los objetivos y los resultados esperados del proyecto? ',
    '¿Qué sistemas operativos y plataformas deben ser compatibles con la aplicación en contenedores Docker? ',
    '¿Se necesita escalabilidad automática o gestión de recursos? ',
    '¿Cuál es la arquitectura general del proyecto? ¿Hay componentes de frontend y backend? ',
    '¿Cómo se gestionan las dependencias entre los componentes? ',
    '¿Es necesario respaldar y restaurar datos persistentes? ',
    
    // ... Agregar las 17 preguntas restantes aquí
    'Pregunta 20: '
];

let currentQuestionIndex = 0; // Índice de la pregunta actual

// Función para mostrar la pregunta actual
function showCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    answerForm.querySelector('label').textContent = currentQuestion;
}

// Función para guardar la respuesta
function saveAnswer() {
    // Obtener el valor de la respuesta
    const answer = answerInput.value;

    // Crear un elemento de lista para mostrar la respuesta
    const listItem = document.createElement('li');
    listItem.textContent = `${questions[currentQuestionIndex]}${answer}`;

    // Agregar el elemento de lista a la lista de respuestas
    answerList.appendChild(listItem);

    // Limpiar el campo de entrada
    answerInput.value = '';

    // Pasar a la siguiente pregunta
    currentQuestionIndex++;

    // Si se han respondido todas las preguntas, mostrar un mensaje de finalización
    if (currentQuestionIndex === questions.length) {
        answerForm.style.display = 'none'; // Ocultar el formulario de respuestas
        alert('Todas las respuestas han sido registradas.');
    } else {
        // Mostrar la siguiente pregunta
        showCurrentQuestion();
    }
}

// Evento de clic en el botón "Guardar"
submitButton.addEventListener('click', function () {
    saveAnswer();
    // Evitar el envío del formulario
    event.preventDefault();
});

// Evento para manejar la tecla "Enter"
answerInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        saveAnswer();
    }
});

// Mostrar la primera pregunta al cargar la página
showCurrentQuestion();
