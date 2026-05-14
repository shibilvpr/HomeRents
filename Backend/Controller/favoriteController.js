import { favoriteModel } from "../Model/FavoriteSchema.js";
import mongoose from "mongoose";

// ❤️ ADD / REMOVE FAVORITE
export const toggleFavorite = async (req, res) => {
  try {
    const { userId, product } = req.body;

    let fav = await favoriteModel.findOne({ userId });

    if (!fav) {
      fav = new favoriteModel({
        userId,
        properties: [],
      });
    }

    const exists = fav.properties.find(
      (item) => item.productId === product._id
    );

    if (exists) {
      fav.properties = fav.properties.filter(
        (item) => item.productId !== product._id
      );
    } else {
      fav.properties.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
      });
    }

    await fav.save();

    res.json({
      success: true,
      favorites: fav.properties,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// 📦 GET FAVORITES
export const getFavorites = async (req, res) => {
  try {
    const userId = req.params.userId;

    const fav = await favoriteModel.findOne({ userId });

    res.json({
      success: true,
      favorites: fav?.properties || [],
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};