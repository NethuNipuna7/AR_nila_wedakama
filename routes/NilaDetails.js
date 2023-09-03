const router= require("express").Router();
let NilaDetails =require("../models/NilaDetails");

router.route("/add").post((req,res)=>{
   
    const Disease= req.body.Disease;
    const Nilapoints= req.body.Nilapoints;
    
    const  Description = req.body. Description;

    const newNilaDetails = new NilaDetails({
        
        Disease,
        Nilapoints,
        Description
    })
    newNilaDetails.save().then(()=>{
        res.json("NilaDetails Added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    NilaDetails.find().then((NilaDetailss)=>{
        res.json(NilaDetailss)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route('/update/:id').put((req, res, next) => {
    NilaDetails.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('NilaDetails updated successfully !')
      }
    })
  })

router.route("/delete/:id").delete(async(req, res)=>{
    let accId=req.params.id;

    await NilaDetails.findByIdAndDelete(accId)
    .then(()=>{
        res.status(200).send({status:" NilaDetails deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete",error:err.message});
    })
})


router.route('/get/:id').get((req, res) => {
    NilaDetails.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })  
module.exports=router;
