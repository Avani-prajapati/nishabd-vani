import express from 'express';
import { startWebSocket } from '../Ctrl/websocketController.js';

const router = express.Router();

router.get('/start-websocket/:lang', startWebSocket);

export default router;
