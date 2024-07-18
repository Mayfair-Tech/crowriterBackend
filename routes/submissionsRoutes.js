const express = require("express");
const router = express.Router();
const {
  submitJob,
  getSubmissions,
  getFreelancerSubmissions,
  deleteSubmission,
  downloadSubmission,
} = require("../controllers/submissionUpload"); // Adjust path based on your folder structure
const { uploadDocument, downloadFile } = require("../controllers/fileUploads"); // Assuming your controller name is fileUploads.js
const upload = require("../middleware/filesMulterSetup");

/**
 * @swagger
 * tags:
 *   name: Submissions
 *   description: API endpoints for job submissions and file uploads
 */

/**
 * @swagger
 * /submissions/submissionUploads:
 *   post:
 *     summary: Submit a job
 *     tags: [Submissions]
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
 *               file:
 *                 type: string
 *             example:
 *               orderId: "order123"
 *               freelancerId: "freelancer123"
 *               file: "file.pdf"
 *     responses:
 *       200:
 *         description: Job submitted successfully
 *       400:
 *         description: Bad request
 */

router.post("/submissionUploads", submitJob);

/**
 * @swagger
 * /submissions/submissions:
 *   get:
 *     summary: Get all submissions
 *     tags: [Submissions]
 *     responses:
 *       200:
 *         description: List of all submissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Submission'
 *       400:
 *         description: Bad request
 */

router.get("/submissions", getSubmissions);

/**
 * @swagger
 * /submissions/submissions/freelancer/{freelancerId}:
 *   get:
 *     summary: Get submissions by freelancer ID
 *     tags: [Submissions]
 *     parameters:
 *       - in: path
 *         name: freelancerId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the freelancer to fetch submissions for
 *     responses:
 *       200:
 *         description: List of submissions by freelancer
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Submission'
 *       400:
 *         description: Bad request
 */

router.get("/submissions/freelancer/:freelancerId", getFreelancerSubmissions);

/**
 * @swagger
 * /submissions/submissions/delete/{submissionId}:
 *   delete:
 *     summary: Delete a submission by submission ID
 *     tags: [Submissions]
 *     parameters:
 *       - in: path
 *         name: submissionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the submission to delete
 *     responses:
 *       200:
 *         description: Submission deleted successfully
 *       404:
 *         description: Submission not found
 *       400:
 *         description: Bad request
 */

router.delete("/submissions/delete/:submissionId", deleteSubmission);

/**
 * @swagger
 * /submissions/submissions/download/{submissionId}:
 *   get:
 *     summary: Download a submission file by submission ID
 *     tags: [Submissions]
 *     parameters:
 *       - in: path
 *         name: submissionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the submission to download file for
 *     responses:
 *       200:
 *         description: File download initiated
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Submission not found
 *       400:
 *         description: Bad request
 */

router.get("/submissions/download/:submissionId", downloadSubmission);

/**
 * @swagger
 * /submissions/fileUploads:
 *   post:
 *     summary: Upload a document
 *     tags: [Submissions]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *             example:
 *               file: [binary]
 *     responses:
 *       200:
 *         description: Document uploaded successfully
 *       400:
 *         description: Bad request
 */

router.post("/fileUploads", upload.single("file"), uploadDocument);

/**
 * @swagger
 * /submissions/downloadFile/{documentId}:
 *   get:
 *     summary: Download a file by document ID
 *     tags: [Submissions]
 *     parameters:
 *       - in: path
 *         name: documentId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the document to download
 *     responses:
 *       200:
 *         description: File download initiated
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: Document not found
 *       400:
 *         description: Bad request
 */

router.get("/downloadFile/:documentId", downloadFile);

module.exports = router;
