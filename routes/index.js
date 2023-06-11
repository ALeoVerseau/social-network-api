const router = require("express").Router();
const apiRoutes = require("./api");

//localhost:3001/api 
router.use("/api", apiRoutes);

router.use((req, res) => {
    return res.send("Incorrect Route :C "); 
}); 

module.exports = router; 