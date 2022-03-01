const BoutonAddNote = document.getElementsByClassName("bouton")[0];
const notes = document.getElementsByClassName("notes")[0];

function isListening (div, i, i2, textarea)
{
    i.addEventListener('click', () => notes.removeChild(div));
    i2.addEventListener('click', () => textarea.disabled == true ? textarea.removeAttribute("disabled") : textarea.setAttribute("disabled", "true"));
}

function createNote () {
    const div = document.createElement('div');
    const header = document.createElement('header');
    const i = document.createElement('i');
    const i2 = document.createElement('i'); 
    const main = document.createElement('main'); 
    const textarea = document.createElement('textarea');

    div.classList.add("note");
    i.classList.add("fas", "fa-trash-alt");
    i2.classList.add("fas", "fa-edit");
    header.classList.add("header_note");
    main.classList.add("writting");
    textarea.className = "zoneToWrite";

    notes.append(div);
    div.append(header, main);
    header.append(i, i2);
    main.appendChild(textarea);

    isListening(div, i, i2, textarea);
}

BoutonAddNote.addEventListener('click', () => createNote());