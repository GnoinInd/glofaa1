const express = require("express");
const {
  createjob,
  getAllJobs,
  getAllJobsWithoutPegination,
  updateJobs,
  deleteJobs,
  getJobsDetails,
} = require("../controllers/caireerController/jobPostController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router
  .route("/admin/New/JobPost")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createjob)

router.route("/Jobs").get(getAllJobs);
router.route("/AllJobs").get(getAllJobsWithoutPegination);

router
  .route("/admin/Job/:id")
  .put(updateJobs)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteJobs);

router.route("/Jobs/:id").get(getJobsDetails);





module.exports = router;
