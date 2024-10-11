import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import Student from '../Schema/Student.js';

const secret = process.env.JWT_SECRETE;
const router = express.Router();
 // Use environment variable in production

// POST route to register a new student
router.post('/register', async (req, res) => {
  const { name, email, password, phoneNumber, address, guardianName, guardianContact, disabilityType, schoolName,assignedTeacher } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).json({ message: 'Student with this email already exists.' });
    }

    student = new Student({
      name,
      email,
      password,
      phoneNumber,
      address,
      guardianName,
      guardianContact,
      disabilityType,
      schoolName,
      assignedTeacher
    });
    
    await student.save();
    res.status(201).json({ message: 'Student registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to register student' });
  }
});

// POST route to login and generate JWT token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ message: 'Student not found' });
    }

    const isMatch = await student.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const payload = { id: student.id, name: student.name };
    const token = jwt.sign(payload, secret, { expiresIn: '1d' });

    res.json({ token: 'Bearer ' + token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
});

// GET route to retrieve student data, protected by JWT
router.get('/profile', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select('-password');
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve student data' });
  }
});

export default router;
