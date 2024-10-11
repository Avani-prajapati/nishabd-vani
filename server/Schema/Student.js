import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const dailyActivitySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    active: { type: Boolean, default: false }
});

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^[6-9]\d{9}$/.test(v);  // Indian phone number format (10 digits, starting with 6-9)
          },
          message: props => `${props.value} is not a valid Indian phone number!`
        },
    },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    guardianName: 
        { type: String,
        required: true
     },
    guardianContact: { type: String,
        required: true,
        unique: true,
        validate: {
          validator: function(v) {
            return /^[6-9]\d{9}$/.test(v);  // Indian phone number format (10 digits, starting with 6-9)
          },
          message: props => `${props.value} is not a valid Indian phone number!`
        } 
    },
    disabilityType: { 
        type: String, 
        enum : ["Deaf", "Mute" ,"Both"],
        required: true 
    },
    schoolName: { 
        type: String, 
        required: true 
    },
    assignedTeacher: { type: String, required: true },
    dailyActivity: [dailyActivitySchema],
}, { timestamps: true });

studentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare input password with hashed password
studentSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Export Student model
const Student = mongoose.model('Student', studentSchema);
export default Student;