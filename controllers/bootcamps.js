const Bootcamp = require('../models/Bootcamp');

//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: "true", msg: "Show All Bootcamps" });
};

//@desc     Get single bootcamp
//@route    GET /api/v1/bootcamps/:id
//@access   Public

exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({ success: "true", msg: `Show Bootcamp ${req.params.id}` });
};

//@desc     Create a new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private

exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({
            success: true,
            data: bootcamp
        });
    } catch (err) {
        res.status(400).json({ success: false });
    }

};

//@desc     Update a bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Private

exports.updateBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ success: "true", msg: `Update Bootcamp ${req.params.id}` });
};

//@desc     Delete a bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private

exports.deleteBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({ success: "true", msg: `Delete Bootcamp ${req.params.id}` });
};
