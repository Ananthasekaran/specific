// JavaScript code for uploading pitch deck
function uploadPitchDeck() {
  const pitchDeckFile = document.getElementById("pitchDeck").files[0];
  if (pitchDeckFile) {
    // Code to upload the pitch deck file to the server
    // Example: You can use AJAX or fetch to send the file to the server
    console.log("Pitch deck uploaded:", pitchDeckFile.name);
    alert("Pitch deck uploaded successfully!");
  } else {
    alert("Please select a file.");
  }
}
