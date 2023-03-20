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
};

export const getProjectById = async (req, res) => {
  const id = await req.params.id;
  const data =
    (await getData().then((dat) =>
      dat.projects.filter((proj) => proj._id == id)
    )) ?? false;

  if (!data) {
    return res.status(404).json({ message: "Project not found." });
  }

  return res.status(200).json(data);
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
  const id = await req.params.id;
  const data = await getData().then((dat) => dat.users);
  const keys = Object.keys(data);
  let userData;
  for (const key of keys) {
    const division = data[key];
    for (const user of division) {
      if (user.id === id) {
        userData = user;
      }
    }
  }
  if (!userData) {
    return res.status(404).json({ message: "Failed to find user." });
  }
  return res.json(userData);
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
  const id = await req.params.id;
  const body = await req.body;
  const db = await schema.findOne().exec();
  const data = db.users;
  const keys = Object.keys(data);
  const bodyKeys = Object.keys(body);

  for (const key of keys) {
    for (const user of data[key]) {
      if (user._id == id) {
        user.name = body.nama;
        for (const bKey of bodyKeys) {
          user.social.forEach((soc) =>
            soc.media === bKey
              ? (soc.link = body[bKey])
              : new Error("Unknown social media")
          );
        }
        await db.save();
      }
    }
  }
  return res.json({ success: true });
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
    console.log("[*] Pushing to database.");
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
      case "BigData":
        user.users.bigdata.push(list);
        user.save();
        break;

      default:
        console.log("404 Not Found\nSwitch case statement.");
        return res.status(404).json({ message: "404 Data not found." });
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
  const id = await req.params.id;
  const db = (await schema.findOne().exec()) ?? false;
  if (!db) {
    res.status(404).json({ message: "Database not found." });
  }

  const division = Object.keys(db.users);
  for (let div of division) {
    let num = 0;
    for (let user of db.users[div]) {
      if (user._id == id) {
        db.users[div].splice(num, 1);
        await db.save();
      }
      num++;
    }
  }

  return res.status(200);
};

export const deleteProject = async (req, res) => {
  const id = await req.params.id;
  const db = (await schema.findOne().exec()) ?? false;
  if (!db) {
    return res.status(404).json({ message: "Database not found." });
  }

  let length = db.projects.length;

  while (length--) {
    if (db.projects[length] && db.projects[length]._id == id) {
      db.projects.splice(length, 1);
      await db.save();
      return res.status(200);
    }
  }

  return res.status(404).json({ message: "Unknown error, check console." });
};

export const deleteBerita = async (req, res) => {
  const id = await req.params.id;
  const db = (await schema.findOne().exec()) ?? false;
  if (!db) {
    return res.status(404).json({ message: "Database not found." });
  }

  let length = db.blogs.length;

  while (length--) {
    if (db.blogs[length] && db.blogs[length]._id == id) {
      db.blogs.splice(length, 1);
      await db.save();
      return res.status(200);
    }
  }

  return res.status(404).json({ message: "Unknown error, check console." });
};
