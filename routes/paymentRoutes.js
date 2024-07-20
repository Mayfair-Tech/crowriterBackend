const express = require("express");
const router = express.Router();
const {
  postPayment,
  getPayment,
  getAllPayments,
  writersPayment,
} = require("../controllers/payments");

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: API endpoints for payments
 */

/**
 * @swagger
 * /payments/create:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentRef:
 *                 type: string
 *               amount:
 *                 type: integer
 *               modeOfPayment:
 *                 type: string
 *                 enum: [MPESA, CREDIT_CARD, BANK_TRANSFER, PAYPAL, CASH, CHEQUE, OTHER]
 *             example:
 *               paymentRef: "PAY123"
 *               amount: 100
 *               modeOfPayment: "CREDIT_CARD"
 *     responses:
 *       201:
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 */

router.post("/create", postPayment);

/**
 * @swagger
 * /payments/details/{id}:
 *   get:
 *     summary: Get details of a specific payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the payment to fetch
 *     responses:
 *       200:
 *         description: Details of the payment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Payment not found
 *       400:
 *         description: Bad request
 */

router.get("/details/:id", writersPayment);

/**
 * @swagger
 * /payments/list:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: List of all payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 */

router.get("/list", getAllPayments);

module.exports = router;
