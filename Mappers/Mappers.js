// const express = require("express");
// const mappersDb = require("../data/helpers/mappers");
// const router = express.Router();


// router.get("/", (req, res) => {
//     mappersDb.get().then(response => {
//         res.status(200).json(response)
//     }).catch(err => {
//         res.status(500).json({
//             error: "Could not get a response"
//         })
//     })
// })


// router.get("/:id", (req, res) => {
//     id = req.params.id
//     mappersDb.get(id).then(response => {
//         res.status(200).json(response)
//     }).catch(err => {
//         res.status(500).json({
//             error: "Could not get a response"
//         })
//     })
// })


// //Post needs project_id, description, notes, and completed
// router.post("/", (req, res) => {
//     newPost = req.body;
//     mappersDb.insert(newPost).then(response => {
//         res.status(200).json({
//             message: "Post inserted successfully"
//         })
//     }).catch(err => {
//         res.status(500).json({
//             error: "Could not get a response"
//         })
//     })
// })

// router.put("/:id", (req, res) => {
//     id = req.params.id
//     updatePost = req.body;
//     mappersDb.update(id, updatePost).then(response => {
//         res.status(200).json({
//             message: "Post updated successfully"
//         })
//     }).catch(err => {
//         res.status(500).json({
//             error: "Could not get a response"
//         })
//     })
// })

// router.delete("/:id", (req, res) => {
//     id = req.params.id
//     mappersDb.remove(id).then(response => {
//         res.status(200).json({
//             message: "Post has been deleted"
//         })
//     }).catch(err => {
//         res.status(500).json({
//             error: "Could not get a response"
//         })
//     })
// })




// module.exports = router;