const express = require("express");
const actionDb = require("../data/helpers/actionModel");
const router = express.Router();


router.get("/", (req, res) => {
    actionDb.get().then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(404).json({
            error: "Could not get a response"
        })
    })
})


router.get("/:id", (req, res) => {
    id = req.params.id
    actionDb.get(id).then(response => {
        res.status(200).json(response)
    }).catch(err => {
        res.status(500).json({
            error: "action could not be found"
        })
    })
})


//Post needs project_id, description, notes, and completed
router.post("/", (req, res) => {
    newPost = req.body;
    if(newPost.description.length === 0 || newPost.notes.length === 0 || newPost.project_id.length === 0 ) {
        res.status(400).json({
            message: "Could not post, please insert all fields"
        })
    } else if(newPost.description.length > 0 || newPost.notes.length > 0 || newPost.project_id.length > 0) {
        actionDb.insert(newPost).then(response => {
            res.status(200).json({
                message: "posted successfully"
            })
        }).catch(err => {
            res.status(500).json({
                error: "Could not post action"
            })
        })
    }
})

router.put("/:id", (req, res) => {
    id = req.params.id
    updatePost = req.body;
    actionDb.update(id, updatePost).then(response => {
        res.status(200).json({
            message: "Post updated successfully"
        })
    }).catch(err => {
        res.status(500).json({
            error: "Could not update action"
        })
    })
})

router.delete("/:id", (req, res) => {
    id = req.params.id
    actionDb.remove(id).then(response => {
        res.status(200).json({
            message: "Post has been deleted"
        })
    }).catch(err => {
        res.status(500).json({
            error: "Could not delete"
        })
    })
})




module.exports = router;