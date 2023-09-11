const express = require("express");
const {
  getAllBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogDetails,
  createBlogComent,
  getBlogComents,
  deleteComent,
  getAdminBlog,
} = require("../controllers/blogController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/Blog").get(getAllBlog);

router
  .route("/admin/Blog")
  .get( getAdminBlog);

router
  .route("/admin/Blog/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"),createBlog);

router
  .route("/admin/Blog/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBlog)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBlog);

router.route("/Blog/:id").get(getBlogDetails);

router.route("/comments").put(isAuthenticatedUser, createBlogComent);

router
  .route("/comment")
  .get(getBlogComents)
  .delete(isAuthenticatedUser, deleteComent);

module.exports = router;
