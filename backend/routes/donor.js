import express from 'express';
import { createDonor, deleteDonor, getAllDonors, getDonorStats, getOneDonor, updateDonor } from '../controllers/donor';
import { verifyTokenAndAuthorization } from '../middlewares/verifyToken';

const router = express.Router();

//add all controllers to the router

router.post('/', verifyTokenAndAuthorization,createDonor )
router.get('/', getAllDonors)
router.put('/:id', updateDonor)
router.get('/find/:id', getOneDonor)
router.delete('/:id', deleteDonor)
router.get('/stats', getDonorStats)


export default router;