import { Router } from 'express';
import { ReviewController } from '../controllers';

const { addComment, getComments } = ReviewController;

const router = Router();

router.post('/review', addComment);
router.put('/review/find', getComments);

export = router;
