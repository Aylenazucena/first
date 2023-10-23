// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectsController from './projects.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/projects/dashboard'
router.get(['/dashboard'], projectsController.dashboard);

// GET '/projects/projects'
router.get(['/projects'], projectsController.projects);

// GET '/projects/add'
router.get(['/add'], projectsController.add);

// Exporto este tramo de ruta
export default router;
