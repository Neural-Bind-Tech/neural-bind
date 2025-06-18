import mongoose, { Schema } from 'mongoose';

// Define the schema
const numberSchema = new Schema(
    {
        number: {
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
export default mongoose.models.number || mongoose.model('number', numberSchema);
