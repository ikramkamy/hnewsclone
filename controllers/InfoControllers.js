
const Mypost= require('../models/info');

//# create a post
exports.create =  (req, res) => {

  
   const postcreated=new Mypost({
    text:req.body.text,
    name:req.body.name,
    auteur:req.body.auteur,
    article:req.body.article
  
});

postcreated.save((error, Mypost)=>{
   if (error) {
     console.log("we are having an error")
       return res.status(400).json({
         message: (error),
         
       });
       
     }
     if (Mypost) {
       
       const {text,name,auteur,article} =Mypost;
       console.log('ROUTE SUCCEED',postcreated)
       return res.status(201).json({
         
        Mypost: {text,name,auteur,article},
       });
     } 
})
}
exports.getposts =(req,res)=>{
    Mypost.find().then((data) => {

  res.json(data)

  })
  .catch((err) => {
    console.log("FETCH FAILED",err)
    res.json({
      err: err,
      message: "Une erreur c'est produite",
    });
  });
}



exports.update= (req, res) => {
console.log("WE ARE UPDATING info")

const text=req.body.text;
const article=req.body.article;
Mypost.findByIdAndUpdate({_id:req.params._id},{
    text:req.body.text,
    
    article:req.body.article
}
   ).then((data)=>{
const postupdated={text,article}
    res.json(postupdated)
    console.log("UPDATE SUCCED",postupdated)
})

    .catch((err) => {
      console.log("UPDATE FAILED",err)
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });

}





exports.Delete=(req,res)=>{
    Mypost.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
      if (err) {
          console.log("Something wrong when DELETING data!");
      }
  
      console.log(doc);
      return res.status(201).json({
        message: ' post DELETED '
    })
  });
  
  
  
  }

  exports.gepostbyID=(req,res)=>{
    Mypost.findOne({"_id": req.params._id,},function (err,data) {
        if (err) {
            err.status = 406;
            return res.status(406);
        }
        console.log(data);
        return res.status(201).json({
            message: ' success.',data:data
        })
      })
    
    }