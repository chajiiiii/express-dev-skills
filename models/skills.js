const skills = [
  { skill: "HTML", proficiency: "Intermediate" },
  { skill: "CSS", proficiency: "Intermediate" },
  { skill: "JavaScript", proficiency: "Beginner" },
  { skill: "Node.js", proficiency: "Beginner" },
  { skill: "Express", proficiency: "Beginner" },
];

module.exports = {
  getAll,
};

function getAll() {
  return skills;
}
