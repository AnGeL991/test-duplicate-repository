import { Router } from 'express';
import { MessageController } from '../controllers';

const { addMessage } = MessageController;

const router = Router();

router.post('/message', addMessage);

export = router;
