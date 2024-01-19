//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way

  const ageInput = document.getElementById('age');
  const nameInput = document.getElementById('name');

  // Check if inputs are not empty
  if (!ageInput.value || !nameInput.value) {
    alert('Please fill in both age and name fields.');
    return;
  }

  // Create a promise that resolves after 4 seconds based on age
  const agePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const age = parseInt(ageInput.value);

      if (age >= 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle the promise resolution or rejection
  agePromise
    .then((message) => {
      alert(message);
    })
    .catch((message) => {
      alert(message);
    });
});
