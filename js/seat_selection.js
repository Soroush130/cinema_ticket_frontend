const seats = document.querySelectorAll(".row .seat");

seats.forEach(function (e) {
    var seat_status = e.attributes[4].value;
    if (seat_status === "occupied") {
        e.classList.add('occupied');
    }
});



// >>>>>>>>>>>>>>>>>>>>>>> Section Choice seats by users

const seats_null = document.querySelectorAll(".row .seat:not(.occupied)");
var seats_selected_by_user = new Object();

function change_seat_status(seat, seat_status) {
    if (seat_status === "0") {
        seat.target.attributes[1].value = "1";
        seat.target.style.backgroundColor = "rgb(29, 124, 35)";
    }
    else if (seat_status === "1") {
        seat.target.attributes[1].value = "0";
        seat.target.style.backgroundColor = "#01163e";
    }
};


function selected_seats(seats_selected_by_user, seat) {

    var seat_number = seat.target.attributes[2].value;
    var seat_row = seat.target.attributes[3].value;

    if (seat.target.attributes[1].value === "1") {
        seats_selected_by_user[seat_number] = {
            "number": seat_number,
            "row": seat_row,
        };

        add_seat_in_seats_cards(seat_number, seat_row);
    }
    else if (seat.target.attributes[1].value === "0") {
        delete seats_selected_by_user[seat_number];

        remove_seat_in_seats_cards(seat_number);
    }
};

function save_data_in_local_storage(data) {
    localStorage.setItem('seat_number', JSON.stringify(data));
};

function click_seat(seat) {
    var seat_selected_value = seat.target.attributes[1].value;
    change_seat_status(seat, seat_selected_value);

    selected_seats(seats_selected_by_user, seat);

    save_data_in_local_storage(seats_selected_by_user);

};

seats_null.forEach(function (e) {
    e.addEventListener('click', click_seat)
});

// ================================================

// >>>>>>>>>>>>> Section Show Selected Seat By User <<<<<<<<<<<<<<

function create_span_seat_number(number) {
    const element_seat_number = document.createElement(
        'span'
    );
    element_seat_number.className = "mx-1";
    element_seat_number.innerText = "صندلی " + number + " - "
    return element_seat_number
};

function create_span_seat_row(row) {
    const element_seat_row = document.createElement(
        'span'
    );
    element_seat_row.className = "mx-1";
    element_seat_row.innerText = "ردیف " + row 
    return element_seat_row
};


function create_card(element_number, element_row) {
    const card = document.createElement(
        'div'
    );
    card.classList.add('card');
    card.classList.add('m-2');

    card.appendChild(element_number);
    card.appendChild(element_row);

    return card
};


function add_seat_in_seats_cards(number, row) {
    var element_seat_number = create_span_seat_number(number);
    var element_seat_row = create_span_seat_row(row);
    var card = create_card(element_seat_number, element_seat_row);

    var element_seats_cards = document.querySelector('.seats-cards');
    element_seats_cards.appendChild(card)
};


function remove_seat_in_seats_cards(number) {
    var element_seats_cards = document.querySelector('.seats-cards');

    for (const span of document.querySelectorAll("span")) {
        if (span.textContent.includes("صندلی " + number + " - ")) {
            element_seats_cards.removeChild(span.parentNode);
        }
    }
};

