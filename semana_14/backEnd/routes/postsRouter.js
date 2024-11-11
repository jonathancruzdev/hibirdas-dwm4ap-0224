import express from "express";
import { createPost, getPosts, getPostById, getPostForUser, deletePostById, updatePostById } from "../controllers/postController.js";

import { autenticar } from "../middleware/autenticar.js";

const router = express.Router();

router.use( express.json());

router.get('/', getPosts);

router.get('/:userId', getPostForUser);

router.get('/:id', getPostById);

router.post('/',  autenticar, createPost);

router.put('/:id', updatePostById);

router.delete('/:userId/:postId', deletePostById);

export default router;