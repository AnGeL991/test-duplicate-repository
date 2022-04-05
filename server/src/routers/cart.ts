import { Router } from 'express';
import { CartController } from '../controllers';

const { addCart, confirmPayment, getCarts } = CartController;

const router = Router();

router.post('/cart', addCart);
router.put('/cart/confirm', confirmPayment);
router.post('/cart/get', getCarts);

export = router;
