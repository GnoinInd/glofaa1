const express = require("express");

const {
  createCatogery,
  getAllCatogery,
  updateCatogery,
  deleteCatogery,

} = require("../controllers/CategerysController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router
  .route("/admin/New/Categery")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCatogery)
 
router.route("/Categery").get(getAllCatogery);
router.route("/admin/Categery").get(isAuthenticatedUser, authorizeRoles("admin"),getAllCatogery);

router
  .route("/admin/Categery/:id")
  .put(updateCatogery)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCatogery);

module.exports = router;
