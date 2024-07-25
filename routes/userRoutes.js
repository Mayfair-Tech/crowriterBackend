const express = require("express");
const router = express.Router();
const {
  getFreelancers,
  getFreelancerDetails,
  editProfile,
  getManagers,
  getManagerDetails,
  getUnapprovedFreelancers,
  approveFreelancer,
} = require("../controllers/userContoller");

/**
 * @swagger
 * /users/freelancers:
 *   get:
 *     summary: Retrieve a list of freelancers
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of freelancers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Freelancer'
 */
router.get("/freelancers", getFreelancers); // Fetch all freelancers

/**
 * @swagger
 * /users/freelancers/{id}:
 *   get:
 *     summary: Retrieve a specific freelancer by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The freelancer ID
 *     responses:
 *       200:
 *         description: Freelancer details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FreelancerDetails'
 *       404:
 *         description: Freelancer not found
 */
router.get("/freelancers/:id", getFreelancerDetails); // Fetch a specific freelancer by ID

/**
 * @swagger
 * /users/unapproved:
 *   get:
 *     summary: Retrieve a list of unapproved freelancers
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of unapproved freelancers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UnapprovedFreelancer'
 */
router.get("/unapproved", getUnapprovedFreelancers);

/**
 * @swagger
 * /users/profile/{id}:
 *   patch:
 *     summary: Edit a profile
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EditProfile'
 *     responses:
 *       200:
 *         description: Profile updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.patch("/profile/:id", editProfile); // Edit profile

/**
 * @swagger
 * /users/approve/freelancer/{id}:
 *   patch:
 *     summary: Approve a freelancer
 *     description: Approves a freelancer's profile by updating their status.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the freelancer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Freelancer approved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Freelancer approved successfully.
 *       400:
 *         description: Invalid ID supplied.
 *       404:
 *         description: Freelancer not found.
 *       500:
 *         description: Server error.
 */
router.patch("/approve/freelancer/:id", approveFreelancer);

/**
 * @swagger
 * /users/managers:
 *   get:
 *     summary: Retrieve a list of managers
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: List of managers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Manager'
 */
router.get("/managers", getManagers); // Fetch all managers

/**
 * @swagger
 * /users/managers/{id}:
 *   get:
 *     summary: Retrieve a specific manager by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The manager ID
 *     responses:
 *       200:
 *         description: Manager details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ManagerDetails'
 *       404:
 *         description: Manager not found
 */
router.get("/managers/:id", getManagerDetails); // Fetch a specific manager by ID

module.exports = router;
