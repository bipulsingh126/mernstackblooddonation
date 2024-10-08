import express from 'express';
import { createProspect, deleteProspect, getAllProspect, getOneProspect, updateProspect } from '../controllers/prospect.js';

const router = express.Router();

// add all controllers prosepct

router.post('/', createProspect);
router.get('/', getAllProspect);
router.put('/:id', updateProspect);
router.delete('/:id', deleteProspect);
router.get('/find/:id', getOneProspect);



export default router;