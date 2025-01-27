import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router(); // Use Router() with uppercase R

router.get('/test',test);

export default router; // Make sure to export the router if you're using it in other files
