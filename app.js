// Obtenemos referencias a los elementos del DOM
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');

// Agregamos un evento al botón para manejar el clic
addItemButton.addEventListener('click', () => {
    const inputValue = itemInput.value.trim();

    // Verificamos que el input no esté vacío
    if (inputValue !== '') {
        // Creamos un nuevo elemento de lista
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listItem.classList.add('px-4', 'py-2', 'bg-gray-200', 'rounded-lg', 'text-gray-700');

        // Agregamos el elemento a la lista
        itemList.appendChild(listItem);

        // Limpiamos el input
        itemInput.value = '';
    } else {
        alert('Por favor, escribe algo en la casilla.');
    }
});

// Opcional: Permitir agregar elementos presionando "Enter"
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItemButton.click();
    }
});