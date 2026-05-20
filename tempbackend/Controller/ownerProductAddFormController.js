import { PropertyFormModel } from "../Model/ownerProductAddFormSchema.js";

// ==============================
// CREATE PROPERTY
// ==============================

export const createProperty = async (
  req,
  res
) => {
  try {

    // IMAGE FILE NAMES
    const imagePaths =
      req.files?.map(
        (file) => file.filename
      ) || [];

    // HIGHLIGHTS ARRAY
    const highlights =
      req.body.highlights
        ? req.body.highlights
            .split(",")
            .map((item) =>
              item.trim()
            )
        : [];

    // CREATE PROPERTY
    const property =
      new PropertyFormModel({
        title: req.body.title,
        type: req.body.type,
        bhk: req.body.bhk,
        bathrooms:
          req.body.bathrooms,
        area: req.body.area,
        address:
          req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode:
          req.body.pincode,
        rent: req.body.rent,
        deposit:
          req.body.deposit,
        maintenance:
          req.body.maintenance,
        furnishing:
          req.body.furnishing,
        highlights,
        description:
          req.body.description,
        owner: req.body.owner,
        phone: req.body.phone,
        email: req.body.email,
        images: imagePaths,
      });

    // SAVE
    await property.save();

    res.status(201).json({
      success: true,
      message:
        "Property Added Successfully",
      data: property,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==============================
// GET ALL PROPERTIES
// ==============================

export const getProperties = async (
  req,
  res
) => {
  try {

    const properties =
      await PropertyFormModel.find()
        .sort({
          createdAt: -1,
        });

    res.status(200).json(
      properties
    );

  } catch (err) {

    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==============================
// GET SINGLE PROPERTY
// ==============================

export const getSingleProperty =
  async (req, res) => {
    try {

      const property =
        await PropertyFormModel.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property Not Found",
        });
      }

      res.status(200).json({
        success: true,
        data: property,
      });

    } catch (err) {

      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

// ==============================
// UPDATE PROPERTY
// ==============================

export const updateProperty =
  async (req, res) => {
    try {

      const property =
        await PropertyFormModel.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property Not Found",
        });
      }

      // NEW IMAGES
      let imagePaths =
        property.images;

      if (
        req.files &&
        req.files.length > 0
      ) {
        imagePaths =
          req.files.map(
            (file) =>
              file.filename
          );
      }

      // HIGHLIGHTS
      const highlights =
        req.body.highlights
          ? req.body.highlights
              .split(",")
              .map((item) =>
                item.trim()
              )
          : property.highlights;

      // UPDATE
      const updatedProperty =
        await PropertyFormModel.findByIdAndUpdate(
          req.params.id,
          {
            ...req.body,
            highlights,
            images: imagePaths,
          },
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        message:
          "Property Updated Successfully",
        data: updatedProperty,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };

// ==============================
// DELETE PROPERTY
// ==============================

export const deleteProperty =
  async (req, res) => {
    try {

      const property =
        await PropertyFormModel.findById(
          req.params.id
        );

      if (!property) {
        return res.status(404).json({
          success: false,
          message:
            "Property Not Found",
        });
      }

      await PropertyFormModel.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Property Deleted Successfully",
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };