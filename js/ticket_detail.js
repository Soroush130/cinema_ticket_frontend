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


function get_seats_selected() {
    // localStorage.setItem('seat_number', JSON.stringify({ "6": { "number": "6", "row": "1" }, "7": { "number": "7", "row": "1" }, "16": { "number": "16", "row": "2" }, "17": { "number": "17", "row": "2" } }))
    
    var seats = localStorage.getItem('seat_number');

    var seats_obj = JSON.parse(seats);

    for (const key in seats_obj){
        if(seats_obj.hasOwnProperty(key)){
            var number = seats_obj[key].number;
            var row = seats_obj[key].row;
            add_seat_in_seats_cards(number, row)
        }
    };
    
}


get_seats_selected()