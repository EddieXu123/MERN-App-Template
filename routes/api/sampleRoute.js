const express = require('express');
const router = express.Router();

const  SampleSchemaItem = require('../../models/SampleSchema');

// Use Postman to send fake requests to see if it works

/**
 * @Route   GET api/sampleItem
 * @desc    Get all sampleItems
 * @access  Public
 */
router.get('/', (req, res) => {
    SampleSchemaItem.find()
        .sort({attribute1: -1})   // reverse chron sort
        .then(items => res.json(items));   // print them out as items
})
// Postman will send 200 ok if this is connected


/**
 * @Route   POST api/sampleItem
 * @desc    Post a sampleItem
 * @access  Public
 */
router.post('/', (req, res) => {
    const newSampleItem = new SampleSchema({
        attribute1: req.body.attribute1 // Get value of attribute1 
    })

    newSampleItem.save().then(item => res.json(item)); // Print everything in database
})


/**
 * @Route   DELETE api/sampleItem
 * @desc    Delete a sampleItem
 * @access  Public
 */
router.delete('/:id', (req, res) => {
    SampleSchemaItem.findById(req.params.id) // params.id gives us url param/:id (all items with this id)
        .then(item => item.remove().then(() => res.json({success: true}))) // Item exists and is removed
        .catch(err => res.status(404).json({success: false})); // Item doesn't exist
});


module.exports = router;