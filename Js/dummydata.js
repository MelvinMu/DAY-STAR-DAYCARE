const dummyData = [
  {
    babyName: "Emily",
    milestone: "First smile",
    recommendation: "Encourage with smiles and positive reinforcement.",
    taskList: "1. Record the date of the first smile. 2. Share the joyful moment with family.",
    support: "Offer support and encouragement to the baby. Take photos to capture the milestone."
  },
  {
    babyName: "Noah",
    milestone: "Rolled over for the first time",
    recommendation: "Provide plenty of supervised tummy time to encourage rolling over.",
    taskList: "1. Create a safe space for supervised tummy time. 2. Encourage the baby to reach for toys during tummy time sessions.",
    support: "Offer gentle assistance and praise when the baby attempts to roll over. Ensure the environment is free from hazards."
  },
  // Add more dummy data entries as needed
];

// Function to add a new milestone entry
function addMilestone(babyName, milestone, recommendation, taskList, support) {
  dummyData.push({
    babyName: babyName,
    milestone: milestone,
    recommendation: recommendation,
    taskList: taskList,
    support: support
  });

  console.log(`Milestone for ${babyName} has been added.`);
}

// Example usage
addMilestone("Liam", "Started crawling", "Encourage exploration by placing toys just out of reach.", "1. Create a safe environment for crawling. 2. Supervise the baby closely during exploration.", "Cheer on the baby's efforts and ensure the crawling area is clear of obstacles.");

export default dummyData;
