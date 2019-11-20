const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/juggling-balls-answer' , function (req, res) {
//Make a variable and give it the value from 'juggling-balls'
var jugglingBalls = req.session.data['how-many-balls']
//Check whether the value matches the condinition
if (jugglingBalls === "3 or more"){
//send user to next page
res.redirect ('/juggling-trick') 
} 
else {
    //send user to ineligible page
res.redirect('/ineligible')
}
})
module.exports = router
