const authMiddleware = require('../middlewares/auth.middleware')
const express = require('express')
const serviceRoute = require('../controller/service_controller')
const loginRoute = require('../controller/login_controller')
const router = express.Router()

const { adduservalidation } = require('../validation/users/user.validation');

router.get('/', (req, res) => {
    res.json({ message: 'Hello Im Ready' })
})

router.post('/loginuser',loginRoute.LoginUser);
router.post('/create_User',adduservalidation,authMiddleware.isAuthenticate, serviceRoute.CreateUser)
router.delete('/delete_User/:id',authMiddleware.isAuthenticate, serviceRoute.DeleteUser)
router.post('/add_Event',authMiddleware.isAuthenticate, serviceRoute.AddEvent)
router.delete('/delete_Event/:id',authMiddleware.isAuthenticate, serviceRoute.DeleteEvent)
router.put('/update_Event/:id',authMiddleware.isAuthenticate, serviceRoute.updateEvent)
router.get('/list_Event',authMiddleware.isAuthenticate, serviceRoute.listEvent)


module.exports = router;