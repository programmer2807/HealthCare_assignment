const express = require("express")
const router = express.Router();

const {addService,getServices,updateService,deleteService} = require("../controllers/Servicecontroller");

router.post("/addService",addService);
router.get("/getServices",getServices);
router.put("/updateService/:id",updateService);
router.delete("/deleteService/:id",deleteService);

module.exports=router;

