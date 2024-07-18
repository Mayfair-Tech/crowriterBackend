const express = require("express");
const {
  createReview,
  editReview,
  deleteReview,
} = require("../controllers/ratingController");

const router = express.Router();

/**
 * @swagger
 * /reviews/create:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               reviewerId:
 *                 type: string
 *               revieweeId:
 *                 type: string
 *               rating:
 *                 type: number
 *                 format: float
 *               comment:
 *                 type: string
 *             required:
 *               - reviewerId
 *               - revieweeId
 *               - rating
 *     responses:
 *       201:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *       400:
 *         description: Bad request
 */
router.post("/create", createReview);

/**
 * @swagger
 * /reviews/edit/{reviewId}:
 *   patch:
 *     summary: Edit an existing review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the review to edit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 format: float
 *               comment:
 *                 type: string
 *     responses:
 *       200:
 *         description: Review updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 review:
 *                   $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 *       400:
 *         description: Bad request
 */
router.patch("/edit/:reviewId", editReview);

/**
 * @swagger
 * /reviews/delete/{reviewId}:
 *   delete:
 *     summary: Delete a review
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the review to delete
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Review not found
 */
router.delete("/delete/:reviewId", deleteReview);

module.exports = router;
