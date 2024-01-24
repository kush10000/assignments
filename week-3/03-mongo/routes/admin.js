const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes

router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username,
        password
    })
    .then(()=>{
        res.json({
            message: 'Admin created successfully'
        })
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    let title = req.body.title
    let description = req.body.description
    let price = req.body.price
    let imageLink = req.body.imageLink

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully',courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        Courses:response
    })
});

module.exports = router;