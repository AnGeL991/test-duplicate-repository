import { Router } from 'express';
import { InventoryController } from '../controllers';

const { addComment, addMeal, getAllMeals, getMealById, deleteMealById } = InventoryController;

const router = Router();

router.get('/meal', getAllMeals);
router.post('/meal', addMeal);
router.post('/meal/one', getMealById);
router.put('/meal', addComment);
router.delete('/meal/delete', deleteMealById);

export = router;
