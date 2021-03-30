import { listProjects } from "../../../utils/data";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getProjects(req, res);
      break;
    default:
      res.status(404).json({ message: "Request HTTP Method Incorrect." });
      break;
  }
};

const getProjects = (req, res) => {
  const project = listProjects.find((p) => p.id === req.query.id);
  res.json(project);
};
