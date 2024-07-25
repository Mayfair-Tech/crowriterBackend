/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Operations related to orders
 */

const express = require("express");
const orderController = require("../controllers/Orders");
const cancelOrder = require("../controllers/CancelledJobs");
const assignmentController = require("../controllers/orderAssignment");
const multer = require("multer");
const upload = require("../middleware/filesMulterSetup"); // Import your multer configuration
const { verifyJwt } = require("../middleware/VerifyJwt");

const router = express.Router();

module.exports = (io) => {
  // Attach io to app
  router.use((req, res, next) => {
    req.app.set("io", io);
    next();
  });

  // Define Swagger documentation for create order endpoint
  /**
   * @swagger
   * /orders/create:
   *   post:
   *     summary: Create a new order
   *     tags: [Orders]
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               attachment:
   *                 type: string
   *                 format: binary
   *             required:
   *               - attachment
   *     responses:
   *       200:
   *         description: Order created successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Server error
   */
  router.post(
    "/create",
    upload.single("attachment"),
    orderController.createOrder
  );

  /**
   * @swagger
   * /orders/update/{id}:
   *   patch:
   *     summary: Update an existing order
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the order to update
   *     requestBody:
   *       required: true
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               attachment:
   *                 type: string
   *                 format: binary
   *             required:
   *               - attachment
   *     responses:
   *       200:
   *         description: Order updated successfully
   *       400:
   *         description: Bad request
   *       404:
   *         description: Order not found
   *       500:
   *         description: Server error
   */
  router.patch(
    "/update/:id",
    upload.single("attachment"),
    orderController.updateOrder
  );

  /**
   * @swagger
   * /orders/list/{freelancerId}:
   *   get:
   *     summary: Get orders by freelancer ID
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: freelancerId
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the freelancer
   *     responses:
   *       200:
   *         description: Successfully retrieved orders
   *       500:
   *         description: Server error
   */
  router.get("/list/:freelancerId", orderController.getOrders);

  /**
   * @swagger
   * /orders/neworders:
   *   get:
   *     summary: Get new orders
   *     tags: [Orders]
   *     responses:
   *       200:
   *         description: Successfully retrieved new orders
   *       500:
   *         description: Server error
   */
  router.get("/neworders", orderController.newOrdersList);

  /**
   * @swagger
   * /orders/delete/{id}:
   *   delete:
   *     summary: Delete an order
   *     tags: [Orders]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the order to delete
   *     responses:
   *       200:
   *         description: Order deleted successfully
   *       500:
   *         description: Server error
   */
  router.delete("/delete/:id", orderController.deleteOrder);

  /**
   * @swagger
   * /orders/cancel:
   *   patch:
   *     summary: Cancel an order
   *     tags: [Orders]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               orderId:
   *                 type: string
   *             required:
   *               - orderId
   *     responses:
   *       200:
   *         description: Order cancelled successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Server error
   */
  router.patch("/cancel", cancelOrder.changeStatus);

  /**
   * @swagger
   * /orders/assign:
   *   post:
   *     summary: Assign an order to a freelancer
   *     tags: [Assignments]
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
   *             required:
   *               - orderId
   *               - freelancerId
   *     responses:
   *       200:
   *         description: Order assigned successfully
   *       400:
   *         description: Bad request
   *       404:
   *         description: Order or freelancer not found
   *       500:
   *         description: Server error
   */
  router.post("/assign", assignmentController.assignOrder);

  /**
   * @swagger
   * /orders/assign-list:
   *   get:
   *     summary: Get all assigned orders
   *     tags: [Assignments]
   *     responses:
   *       200:
   *         description: Successfully retrieved assigned orders
   *       500:
   *         description: Server error
   */
  router.get("/assign-list", assignmentController.getAssignedOrders);

  /**
   * @swagger
   * /orders/extend-deadline/{orderId}:
   *   patch:
   *     summary: Extend deadline of an order
   *     tags: [Assignments]
   *     parameters:
   *       - in: path
   *         name: orderId
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the order to extend deadline
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               newDeadline:
   *                 type: string
   *               message:
   *                 type: string
   *             required:
   *               - newDeadline
   *               - message
   *     responses:
   *       200:
   *         description: Deadline extended successfully
   *       400:
   *         description: Bad request
   *       500:
   *         description: Server error
   */
  router.patch(
    "/extend-deadline/:orderId",
    assignmentController.extendDeadline
  );

  /**
   * @swagger
   * /orders/reassign/{orderId}:
   *   patch:
   *     summary: Reassign an order to a new freelancer
   *     tags: [Assignments]
   *     parameters:
   *       - in: path
   *         name: orderId
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the order to reassign
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               newFreelancerId:
   *                 type: string
   *             required:
   *               - newFreelancerId
   *     responses:
   *       200:
   *         description: Order reassigned successfully
   *       400:
   *         description: Bad request
   *       404:
   *         description: Order not found
   *       500:
   *         description: Server error
   */
  router.patch(
    "/reassign/:orderId",
    (req, res, next) => {
      // Inject io instance into the request object
      req.io = req.app.get("io");
      next();
    },
    assignmentController.reassignOrder(io) // Pass io directly to the controller function
  );

  /**
   * @swagger
   * /orders/delete-assignment/{assignmentId}:
   *   delete:
   *     summary: Delete an assignment
   *     tags: [Assignments]
   *     parameters:
   *       - in: path
   *         name: assignmentId
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the assignment to delete
   *     responses:
   *       200:
   *         description: Assignment deleted successfully
   *       500:
   *         description: Server error
   */
  router.delete(
    "/delete-assignment/:assignmentId",
    assignmentController.deleteAssignment
  );

  /**
   * @swagger
   * /orders/get-assignment/{freelancerId}:
   *   get:
   *     summary: Get assigned orders by freelancer ID
   *     tags: [Assignments]
   *     parameters:
   *       - in: path
   *         name: freelancerId
   *         required: true
   *         schema:
   *           type: string
   *         description: ID of the freelancer
   *     responses:
   *       200:
   *         description: Successfully retrieved assigned orders
   *       500:
   *         description: Server error
   */
  router.get(
    "/get-assignment/:freelancerId",
    assignmentController.getAssignedOrdersByFreelancer
  );

  return router;
};
