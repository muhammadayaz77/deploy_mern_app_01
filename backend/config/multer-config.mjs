import multer from 'multer';

// Configure Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;