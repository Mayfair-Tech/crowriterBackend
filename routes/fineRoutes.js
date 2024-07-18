const express = require("express");
const {
  createFine,
  getFines,
  updateFine,
  deleteFine,
  getFinesByUserId,
} = require("../controllers/finesController");

const router = express.Router();

/**
 * @swagger
 * /fines/create:
 *   post:
 *     summary: Create a new fine
 *     tags: [Fines]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               freelancerId:
 *                 type: string
 *               amount:
 *                 type: integer
 *               reason:
 *                 type: string
 *             example:
 *               orderId: "12345"
 *               freelancerId: "67890"
 *               amount: 100
 *               reason: "Late submission"
 *     responses:
 *       201:
 *         description: Fine created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fine'
 *       400:
 *         description: Bad request
 */
router.post("/create", createFine);

/**
 * @swagger
 * /fines/list:
 *   get:
 *     summary: Get all fines
 *     tags: [Fines]
 *     responses:
 *       200:
 *         description: List of all fines
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fine'
 *       400:
 *         description: Bad request
 */
router.get("/list", getFines);

/**
 * @swagger
 * /fines/update/{fineId}:
 *   patch:
 *     summary: Update a fine by its ID
 *     tags: [Fines]
 *     parameters:
 *       - in: path
 *         name: fineId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the fine to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: integer
 *               reason:
 *                 type: string
 *             example:
 *               amount: 150
 *               reason: "Updated reason"
 *     responses:
 *       200:
 *         description: Fine updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Fine'
 *       404:
 *         description: Fine not found
 *       400:
 *         description: Bad request
 */
router.patch("/update/:fineId", updateFine);

/**
 * @swagger
 * /fines/delete/{fineId}:
 *   delete:
 *     summary: Delete a fine by its ID
 *     tags: [Fines]
 *     parameters:
 *       - in: path
 *         name: fineId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the fine to delete
 *     responses:
 *       200:
 *         description: Fine deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Fine not found
 *       400:
 *         description: Bad request
 */
router.delete("/delete/:fineId", deleteFine);

/**
 * @swagger
 * /fines/user/{userId}:
 *   get:
 *     summary: Get fines by user ID
 *     tags: [Fines]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: List of fines associated with the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Fine'
 *       400:
 *         description: Bad request
 */
router.get("/user/:userId", getFinesByUserId);

module.exports = router;
