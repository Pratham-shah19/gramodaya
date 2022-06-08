const mandi = require('../models/mandi')


const createReport =  async(req,res)=>{
    const report = req.body.reportDetails;
    const resp = await mandi.create(report);
    res.status(201).json({status:"success",reportID:resp._id});
   
    
}

const getReport = async(req,res)=>{
   
    const report = await mandi.findOne({_id:req.query.reportID});
     const data = await mandi.find({marketID:report.marketID,cmdtID:report.cmdtyID});
            let users = data.map((user)=>{
                return user.userID
            })
            let prices = data.map((obj)=>{
                return obj.price/obj.convFctr
            });
            let finalPrice = 0;
            prices.forEach(e => {
                    finalPrice +=e
                
            });
            finalPrice = finalPrice/prices.length;
            const finalObj = {cmdtyName:report.cmdtyName,
            cmdtyID:report.cmdtyID,
            marketID:report.marketID,
            marketName:report.marketName,
            users:users,
            timestamp:1000,
            priceUnit:"Kg",
            price:finalPrice};
            
            res.status(201).json({finalObj})
    
}

module.exports = {getReport,createReport}