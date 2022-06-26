import { Router } from 'express';
import authRoutes from './auth';
import cartRoutes from './cart';
import inventoryRoutes from './inventory';
import reviewRoutes from './review';
import messageRoutes from './message';

const router = Router();

router.use(authRoutes);
router.use(cartRoutes);
router.use(inventoryRoutes);
router.use(reviewRoutes);
router.use(messageRoutes);

export = router;
