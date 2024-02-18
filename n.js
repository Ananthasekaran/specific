// Sample mentor data
const mentors = [
  { name: "John Doe", expertise: "Entrepreneurship", availability: "Weekends" },
  { name: "Jane Smith", expertise: "Marketing", availability: "Evenings" },
  {
    name: "Alex Johnson",
    expertise: "Product Development",
    availability: "Weekdays",
  },
];

// JavaScript code for searching mentors
function searchMentors() {
  const expertise = document.getElementById("expertise").value.toLowerCase();
  const availability = document
    .getElementById("availability")
    .value.toLowerCase();

  const filteredMentors = mentors.filter((mentor) => {
    const mentorExpertise = mentor.expertise.toLowerCase();
    const mentorAvailability = mentor.availability.toLowerCase();
    return (
      mentorExpertise.includes(expertise) &&
      mentorAvailability.includes(availability)
    );
  });

  displayMentors(filteredMentors);
}

// JavaScript code for displaying mentors
function displayMentors(mentors) {
  const mentorList = document.getElementById("mentorList");
  mentorList.innerHTML = "";
  if (mentors.length === 0) {
    mentorList.innerHTML = "<p>No mentors found.</p>";
  } else {
    mentors.forEach((mentor) => {
      const mentorDiv = document.createElement("div");
      mentorDiv.innerHTML = `<p>${mentor.name} - ${mentor.expertise} (${mentor.availability}) <button onclick="showMessageForm('${mentor.name}')">Message</button></p>`;
      mentorList.appendChild(mentorDiv);
    });
  }
}

// JavaScript code for showing message box
function showMessageForm(mentorName) {
  const messageBox = document.getElementById("messageBox");
  messageBox.style.display = "block";
  // You can populate additional fields based on mentor data if needed
}

// JavaScript code for sending message to mentor
function sendMessage() {
  const messageText = document.getElementById("messageText").value;
  // Send the message to the mentor (not implemented in this example)
  alert(`Message sent: ${messageText}`);
  document.getElementById("messageBox").style.display = "none";
}
