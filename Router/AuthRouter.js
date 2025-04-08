const express= require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

<<<<<<< HEAD
const { registerParent, loginParent, addStudent, deleteStudent, getStudents, updateNotificationPreference, sendTestNotification }=require("../Controller/AuthController")
=======
const { registerParent, loginParent, addStudent, deleteStudent, getStudents, getSchools, updateNotificationPreference, sendTestNotification } = require("../Controller/AuthController");
>>>>>>> b280240 (first commit)

router.post('/register', registerParent);
router.post('/login', loginParent);
router.get('/students', getStudents);
<<<<<<< HEAD
router.post('/add-student', addStudent);
router.post('/delete-student', deleteStudent);
=======
router.get('/schools', getSchools);
router.post('/add-student', addStudent);
router.delete('/delete-student', deleteStudent);
>>>>>>> b280240 (first commit)
router.post('/students/:studentId/notifications', updateNotificationPreference);
router.post('/test-notification', sendTestNotification);

module.exports = router;