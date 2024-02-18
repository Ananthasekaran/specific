// Sample startup and user data
const startups = [
  { name: "Startup A", description: "Description of Startup A" },
  { name: "Startup B", description: "Description of Startup B" },
  { name: "Startup C", description: "Description of Startup C" },
];

const users = [
  { username: "user1", bio: "Bio of User 1" },
  { username: "user2", bio: "Bio of User 2" },
  { username: "user3", bio: "Bio of User 3" },
];

// JavaScript code for displaying startups and users
document.addEventListener("DOMContentLoaded", function () {
  const startupList = document.getElementById("startupList");
  const userList = document.getElementById("userList");

  startups.forEach((startup) => {
    const startupItem = document.createElement("li");
    startupItem.innerHTML = `<b>${startup.name}</b><br>${startup.description}<br><button onclick="followStartup('${startup.name}')">Follow</button>`;
    startupList.appendChild(startupItem);
  });

  users.forEach((user) => {
    const userItem = document.createElement("li");
    userItem.innerHTML = `<b>${user.username}</b><br>${user.bio}<br><button onclick="followUser('${user.username}')">Follow</button>`;
    userList.appendChild(userItem);
  });
});

// JavaScript code for following startups
function followStartup(startupName) {
  // Code to follow the startup (not implemented in this example)
  alert(`You are now following ${startupName}`);
}

// JavaScript code for following users
function followUser(username) {
  // Code to follow the user (not implemented in this example)
  alert(`You are now following ${username}`);
}
