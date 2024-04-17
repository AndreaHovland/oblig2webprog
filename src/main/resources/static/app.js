let tickets = [];

function buyTicket() {
    const movieName = document.getElementById('movieName').value;
    const numTickets = parseInt(document.getElementById('numTickets').value);
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerPhone = document.getElementById('customerPhone').value;

    if (!validateInputs(movieName, numTickets, customerName, customerEmail, customerPhone)) {
        return;
    }

    const ticket = {
        movieName: movieName,
        numTickets: numTickets,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone
    };

    tickets.push(ticket);
    displayTickets();
    clearInputs();
}

function validateInputs(movieName, numTickets, customerName, customerEmail, customerPhone) {
    // Implement custom validation for each input type
    // For example, validate email format, phone number format, etc.
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `${ticket.numTickets} billetter for "${ticket.movieName}" - ${ticket.customerName}, ${ticket.customerEmail}, ${ticket.customerPhone}`;
        ticketList.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('movieName').value = '';
    document.getElementById('numTickets').value = '';
    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('customerPhone').value = '';
}

function deleteAllTickets() {
    tickets = [];
    displayTickets();
}
