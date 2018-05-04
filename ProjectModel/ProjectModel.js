const express = require("express");
const projectDb = require("../data/helpers/projectModel");
const router = express.Router();


router.get("/", (req, res) => {
    projectDb.get().then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(500).json({
            error: "Could not get a response"
        })
    })
})


router.get("/:id", (req, res) => {
    id = req.params.id
    projectDb.get(id).then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(500).json({
            error: "Could not get a response"
        })
    })
})


//Post needs project_id, description, notes, and completed
router.post("/", (req, res) => {
    newPost = req.body;
    projectDb.insert(newPost).then(response => {
        res.status(200).json({
            message: "Post inserted successfully"
        })
    }).catch(err => {
        res.status(500).json({
            error: "Could not get a response"
        })
    })
})

router.put("/:id", (req, res) => {
    id = req.params.id
    updatePost = req.body;
    projectDb.update(id, updatePost).then(response => {
        res.status(200).json({
            message: "Post updated successfully"
        })
    }).catch(err => {
        res.status(500).json({
            error: "Could not get a response"
        })
    })
})

router.delete("/:id", (req, res) => {
    id = req.params.id
    projectDb.remove(id).then(response => {
        res.status(200).json({
            message: "Post has been deleted"
        })
    }).catch(err => {
        res.status(500).json({
            error: "Could not get a response"
        })
    })
})




module.exports = router;