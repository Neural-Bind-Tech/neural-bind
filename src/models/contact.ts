import mongoose, { Schema } from 'mongoose';

// Define the schema
const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: [true, 'Number is required'],
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

// Create or retrieve the model
export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
