const express = require("express");
const bidController = require("../controllers/Bids");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bids
 *   description: Bids management
 */

/**
 * @swagger
 * /bids/create:
 *   post:
 *     summary: Create a new bid
 *     tags: [Bids]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - freelancerId
 *             properties:
 *               orderId:
 *                 type: string
 *               freelancerId:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Bid created successfully
 *       400:
 *         description: Invalid input data
 */
router.post("/create", bidController.createBid);

/**
 * @swagger
 * /bids/list:
 *   get:
 *     summary: Get all bids
 *     tags: [Bids]
 *     responses:
 *       200:
 *         description: A list of bids
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   orderId:
 *                     type: string
 *                   freelancerId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get("/list", bidController.getAllBids);

/**
 * @swagger
 * /bids/freelancer/{freelancerId}:
 *   get:
 *     summary: Get bids by freelancer ID
 *     tags: [Bids]
 *     parameters:
 *       - in: path
 *         name: freelancerId
 *         required: true
 *         schema:
 *           type: string
 *         description: The freelancer ID
 *     responses:
 *       200:
 *         description: A list of bids by the freelancer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   orderId:
 *                     type: string
 *                   freelancerId:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   status:
 *                     type: string
 *       404:
 *         description: Freelancer not found
 */
router.get("/freelancer/:freelancerId", bidController.getFreelancerBids);

/**
 * @swagger
 * /bids/delete/{id}:
 *   delete:
 *     summary: Delete a bid by ID
 *     tags: [Bids]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The bid ID
 *     responses:
 *       200:
 *         description: Bid deleted successfully
 *       404:
 *         description: Bid not found
 */
router.delete("/delete/:id", bidController.deleteBid);

module.exports = router;
