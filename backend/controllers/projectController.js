let projects = [];

exports.getProjects = (req, res) => {
  res.json(projects);
};

exports.addProject = (req, res) => {
  const { name, location, budget } = req.body;

  const newProject = {
    id: projects.length + 1,
    name,
    location,
    budget
  };

  projects.push(newProject);

  res.status(201).json(newProject);
};
