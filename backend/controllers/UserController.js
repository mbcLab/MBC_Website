import User from "../models/UserModel.js";
import Project from "../models/ProjectModel.js";
import Berita from "../models/BeritaModel.js";
import schema from "../models/schema.js";

async function getData() {
  const data = (await schema.findOne().exec()) ?? false;
  if (!data) {
    return false;
  } else {
    return data;
  }
}

// get

export const getBerita = async (req, res) => {
  const data = await getData().then((dat) => dat.blogs);
  if (!data) {
    return res.status(404).json({ message: "[?] Failed to find database." });
  }

  return res.json(data);
  // try {
  //   const Berita1 = await Berita.find();
  //   res.json(Berita1);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

export const getProject = async (req, res) => {
  const data = (await schema.findOne().exec()) ?? false;
  if (!data) {
    return res.status(404).json({ message: "[?] Database not found." });
  }
  const projectList = data.projects;
  return res.json(projectList);
};

export const getUser = async (req, res) => {
  const data = await getData().then((dat) => dat.users);
  if (!data) {
    return res.status(404).json({ message: "[?] Database not found." });
  }
  return res.json(data);
  // try {
  //   const users = await User.find();
  //   res.json(users);
  // } catch (error) {
  //   res.status(500).json({ message: error.message });
  // }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectBydate = async (req, res) => {
  try {
    const project = await Project.findOne({ tanggal: Date.now() });
    res.json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBeritaById = async (req, res) => {
  try {
    const berita = await Berita.findById(req.params.id);
    res.json(berita);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update
export const updateProject = async (req, res) => {
  try {
    const updateProject = await Project.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateduser = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBerita = async (req, res) => {
  try {
    const updateBerita = await Berita.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updateBerita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// save
export const saveBerita = async (req, res) => {
  // const Berita1 = new Berita(req.body);
  const body = req.body;
  const addList = {
    title: body.judul,
    date: Date.now(),
    content: body.isi,
  };
  const berita = (await schema.findOne().exec()) ?? false;

  if (!berita) {
    return res.status(400).json({ message: "Unknown database." });
  } else {
    console.log("[*] Pushing to mongodb.");
    berita.blogs.push(addList);
    await berita.save();
  }

  try {
    // const insertedBerita = await Berita1.save();
    res.status(201).json(berita);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveUser = async (req, res) => {
  // const User1 = new User(req.body);
  const body = req.body;
  const list = {
    name: body.nama,
    social: body.social,
    photo: "none", // need improvement on this line of code
  };
  const user = (await schema.findOne().exec()) ?? false;
  if (!user) {
    return res.status(400).json({ message: "No database entry." });
  } else {
    switch (body.divisi) {
      case "Cyber":
        user.users.cyber.push(list);
        user.save();
        break;
      case "Gametech":
        user.users.gametech.push(list);
        user.save();
        break;
      case "GIS":
        user.users.gis.push(list);
        user.save();
        break;
      case "Big Data":
        user.users.bigdata.push(list);
        user.save();
        break;

      default:
        console.log("404 Not Found\nSwitch case statement.");
        break;
    }
  }
  try {
    // const insertedUser = await User1.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const saveProject = async (req, res) => {
  // const Project1 = new Project(req.body);
  const proj = (await schema.findOne().exec()) ?? false;
  if (!proj) {
    return res.status(400).json({ message: "[?] Database not found." });
  }
  await proj.projects.push(req.body);
  await proj.save();
  return res.status(201).json({ message: "Project saved successfully." });
};

// del
export const deleteUser = async (req, res) => {
  try {
    const deleteduser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const id = req.params.id;
  const data = (await schema.findOne().exec()) ?? false;
  if (!data) {
    return res.status(404).json({ message: "Failed to find id." });
  }
  await data.projects.pop({ _id: id });
  await data.save();
  return res.status(200).json(`Deleted database from id ${id}`);
};

export const deleteBerita = async (req, res) => {
  try {
    const deleteduser = await Berita.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
