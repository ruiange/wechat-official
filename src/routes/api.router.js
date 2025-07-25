/**
 * API路由模块
 * 负责管理所有API相关的路由分发
 * 目前包含微信公众号相关的路由
 */
import express from "express";
import officialRouter from "./modules/official.router.js";
import aiRouter from "./modules/ai.router.js";

const apiRouter = express.Router();

/**
 * 微信公众号路由挂载
 * 所有/api/official前缀的请求都由officialRouter处理
 * 包括微信公众号的验证、消息接收等功能
 */
apiRouter.use('/official', officialRouter)

/**
 * 人工智能路由挂载
 * 所有/api/ai前缀的请求都由aiRouter处理
 * 包括语音识别、人脸识别等功能
 */
apiRouter.use('/ai', aiRouter)
export default apiRouter;