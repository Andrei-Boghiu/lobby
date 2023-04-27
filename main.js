const table = document.querySelector("table");
const thead = table.querySelector("thead");
const tbody = table.querySelector("tbody");
const rows = Array.from(tbody.querySelectorAll("tr"));


function addContent() {
// give a class and variable or value to each td from tbody

// No.
rows.forEach((row, index) => {
    const firstCell = row.querySelector('td:first-child');
    firstCell.classList.add('row-number');
    firstCell.textContent = index + 1;
  });
// Case ID
rows.forEach((row) => {
    const secondCell = row.querySelector("td:nth-child(2)");
    secondCell.classList.add("case-id");
    secondCell.textContent = Math.floor(Math.random() * 10000000);
});
// Start Date
rows.forEach((row) => {
    const thirdCell = row.querySelector("td:nth-child(3)");
    thirdCell.classList.add("date");
    thirdCell.textContent = new Date(Math.random() * Date.now()).toLocaleDateString('en-GB').split('/').join('.');
});
// Subject Title
rows.forEach((row) => {
    const forthCell = row.querySelector("td:nth-child(4)");
    forthCell.classList.add("subject-title");
    const names = ["Assault", "Robbery", "Theft", "Burglary", "Fraud", "Embezzlement", "Forgery", "Vandalism", "Homicide", "Kidnapping", "Cybercrime", "Identity Theft", "Drug Trafficking", "Money Laundering", "Human Trafficking", "Domestic Violence", "Sexual Assault/Rape"];
    forthCell.textContent = names[Math.floor(Math.random() * (names.length))];
});
// Detective Name
rows.forEach((row) => {
    const fifthCell = row.querySelector("td:nth-child(5)");
    fifthCell.classList.add("detective-name");
    const detectives = ["Hank Anderson", "Cole Phelps", "Norman Jayden", "Leon S. Kennedy", "Wei Shen", "Connor (Cyberlife Droid)"];
    fifthCell.textContent = detectives[Math.floor(Math.random() * (detectives.length))];
})
// Detective ID
rows.forEach((row) => {
    const sixthCell = row.querySelector("td:nth-child(6)");
    sixthCell.classList.add("detective-id");
    sixthCell.textContent = "unknown"; // to assign a unique ID to each Detective and match the Detective Name with the Detective ID
})
// Pentagon Que
rows.forEach((row) => {
    const seventhCell = row.querySelector("td:nth-child(7)");
    seventhCell.classList.add("pentagon-que");
    const ques = ["investigations@pentagon.gov", "lobby@pentagon.gov"]; // To create a unique email address for each detective
    seventhCell.textContent = ques[Math.floor(Math.random() * (ques.length))];
})
// Crew ID
rows.forEach((row) => {
    const eightCell = row.querySelector("td:nth-child(8)");
    eightCell.classList.add("crew-id");
    const crewIDs = ["Alpha", "Tango"];
    eightCell.textContent = crewIDs[Math.floor(Math.random() * (crewIDs.length))];
})
// City
rows.forEach((row) => {
    const ninthCell = row.querySelector("td:nth-child(9)");
    ninthCell.classList.add("city");
    const cities = ["St. Louis, Missouri", "Los Angeles", "Detroit, Michigan", "Memphis, Tennessee"];
    ninthCell.textContent = cities[Math.floor(Math.random() * (cities.length))];
})
// Suspect Name
rows.forEach((row) => {
    const tenthCell = row.querySelector("td:nth-child(10)");
    tenthCell.classList.add("suspect");
    const suspects = ["John Marston", "Agent 47", "Aiden Pearce", "Niko Bellic", "The Joker"];
    tenthCell.textContent = suspects[Math.floor(Math.random() * (suspects.length))];
})
// Suspect ID
rows.forEach((row) => {
    const eleventhCell = row.querySelector("td:nth-child(11)");
    eleventhCell.classList.add("detective-id");
    eleventhCell.textContent = "unknown"; // to assign a unique ID to each Detective and match the Detective Name with the Detective ID
})
// Case Status
rows.forEach((row) => {
    const twelfthCell = row.querySelector("td:nth-child(12)");
    twelfthCell.classList.add("case-status");
    const statuses = ["work-in-progress", "not-started", "reopen", "resolved"];
    twelfthCell.textContent = statuses[Math.floor(Math.random() * (statuses.length))];
})
}

function newCase() {
    const newCaseHTML = `
      <tr>
          <td>6</td>
          <td>6789774</td>
          <td>20.04.2002</td>
          <td>Homicide</td>
          <td>Hank Anderson</td>
          <td>unknown</td>
          <td>investigations@pentagon.gov</td>
          <td>Alpha</td>
          <td>Detroit, Michigan</td>
          <td>Aiden Pearce</td>
          <td>unknown</td>
          <td>reopen</td>
      </tr> 
    `;
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = newCaseHTML;
    tableBody.appendChild(newRow);
  }
  
  const getCase = document.querySelector(".get-case");
  getCase.addEventListener("click", newCase);

  addContent()

//
function triggerNotification(title, options) {
  
    if (!("Notification" in window)) {
      console.error("Notifications are not supported by this browser.");
      return;
    }
    
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  }

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      console.log('New row added!');
      triggerNotification('New row added!', {
        body: 'A new case was added to the lobby.',
      });
    
    }
  });
});

observer.observe(tbody, { childList: true });
