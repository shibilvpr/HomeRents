import { Booking } from "../Model/BookingSchema.js";

// ✅ CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    res.json({ success: true, booking });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET USER BOOKINGS
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      userId: req.params.userId,
    });

    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ ADMIN GET ALL BOOKINGS
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.json({ bookings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ UPDATE STATUS (APPROVE / REJECT)
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};