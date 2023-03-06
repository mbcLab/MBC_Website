import express from "express";
import { 
    getBerita,
    getBeritaById, 
    getProject,
    getProjectById,
    getUser,
    getUserById, 
    updateBerita,
    updateProject,
    updateUser,
    saveBerita,
    saveProject,
    saveUser,
    deleteBerita,
    deleteProject,
    deleteUser,
    getProjectBydate,
    


} from "../controllers/UserController.js";
 
const router = express.Router();
// berita
router.get('/Berita', getBerita);
router.get('/Berita/:id', getBeritaById);
router.post('/MakeBerita', saveBerita);
router.patch('/UpdateBerita/:id', updateBerita);
router.delete('/deleteBerita/:id', deleteBerita);
// Project
router.get('/Project', getProject);
router.get('/ProjectDate', getProjectBydate);
router.get('/Project/:id', getProjectById);
router.post('/MakeProject', saveProject);
router.patch('/UpdateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);
// user
router.get('/User', getUser);
router.get('/User/:id', getUserById);
router.post('/MakeUser', saveUser);
router.patch('/UpdateUser/:id', updateUser);
router.delete('/deleteUsers/:id', deleteUser);
 
export default router;