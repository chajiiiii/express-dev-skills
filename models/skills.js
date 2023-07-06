const skills = [
  { id: 123456, skill: "HTML", proficiency: "Intermediate", project: true },
  { id: 789101, skill: "CSS", proficiency: "Intermediate", project: true },
  { id: 121314, skill: "JavaScript", proficiency: "Beginner", project: true },
  { id: 151617, skill: "Node.js", proficiency: "Beginner", project: false },
  { id: 1819920, skill: "Express", proficiency: "Beginner", project: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.project = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}
