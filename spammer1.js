window.alert("Applicazione realizzata da Davide Zangrando");
window.alert("Copyright by Davide Zangrando ©");
var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("_4sWnG")[0].click();
}

// applicazione creata da Davide Zangrando
// per fare il debug di questo programma seguire le segueti direttive
// 1 : Aprire Whatsapp Web sul browser
// 2 : Con il tasto destro selezionare "Ispeziona"
// 3 : Andare nel punto chiamato "Console" e inserire il codice seuente