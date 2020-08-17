const express = require('express')
const router = express.Router()
const fs = require("fs"); 
const path = require('path');

router.get('/:modeule_name/:screen_name', async (req, res) => {
    try{
        const moduleName = req.params.modeule_name;
        const screenName = req.params.screen_name + '.json';
        const dirPath = path.dirname(require.main.filename)+ '/src/ui_config/specification/' + moduleName;
        // console.log(dirPath)
        let result;
        // Function to get current filenames in directory 
        let filenames = fs.readdirSync(dirPath) 
        if(filenames){
            for(let i = 0; i < filenames.length; i++){
                if(filenames[i]  === screenName){
                    let filePath = dirPath + '/' + screenName
                    const data  = fs.readFileSync(filePath)
                    result = JSON.parse(data); 
                    // console.log(result)
                    // console.log("!11111111")
                }
        } 
        // console.log('22222222')
        if(result){
            res.status(201).send({
                success : true,
                data: result
            })
        }else{
            res.status(201).send({
                success : false,
                message : "Requested file not found"
            })
        }
        }
        // console.log(filenames)
    }catch(error){
        // console.log(error)
        res.status(400).send({
            success : false,
            message : "No such file or directory"
        })
    }
})



module.exports = router
