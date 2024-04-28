

const openFormButton = document.getElementById('openFormButton');
const formContainer = document.getElementById('formContainer');
const submitFormButton = document.getElementById('submitFormButton');
const closeFormButton = document.getElementById('closeFormButton');

openFormButton.addEventListener('click', function() {
    formContainer.classList.remove('hidden');
});

closeFormButton.addEventListener('click', function() {
    formContainer.classList.add('hidden');
});

    submitFormButton.addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    const notice = document.getElementById('noteInput').value;
    alert(`Title: ${title}\nNotice: ${notice}`);
});

function closeFormContainer() {
    document.getElementById("formContainer").style.display = "hidden";
}

function openPopup() {
    var popup = document.getElementById('formContainer');
    popup.classList.remove("hidden");
}



// jAVA SCRIPT FOR UPDATING THE NOTICE BOARD ((----- WOrking!------))

const noteForm = document.getElementById('noteForm');
const noticeBoard = document.getElementById('noticeBoard');

noteForm.addEventListener('submit', function(event) {
    console.log("asdsdsd")
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const note = document.getElementById('noteInput').value;
    console.log(title + note)
if (title.trim() === '' || note.trim() === '') {
    alert('Please enter both title and note.');
    return;
}

    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `<h3>${title}</h3><p>${note}</p>`;

    noticeBoard.appendChild(noteElement);

  // Clear input fields after adding note
document.getElementById('titleInput').value = '';
document.getElementById('noteInput').value = '';
});


//  Sending the data from this site to a new one<<-------Not working------->>

// JavaScript to handle form submission
document.getElementById('noteForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var title = document.getElementById('titleInput').value;
    var note = document.getElementById('noteInput').value;

    // Create an object with the form data
    var formData = {
        title: title,
        note: note
    };

    // Convert the form data to JSON
    var jsonData = JSON.stringify(formData);

    // Send the form data to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'notice.html', true); // Change this URL to match your server
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonData);

    // Reset the form
    document.getElementById('noteForm').reset();
});
