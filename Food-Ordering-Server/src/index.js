const express = require('express');
const Database = require('./configs/Database');
const app = express();
const cors = require('cors');
require('dotenv/config');
const PORT = process.env.PORT;
const productsRoute = require('./routes/Products');
const userRoute = require('./routes/User');
const categoryRoute = require('./routes/Category');
const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: './uploads' });

app.use(cors());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use('/api/products', productsRoute);
app.use('/api/user', userRoute);
app.use('/api/category', categoryRoute);

app.get('/', (req, res) => {
  res.send('API is Running....');
});

app.get('/uploads/:filename', (req, res) => {
  const filename = req.params.filename;
  res.sendFile(`${__dirname}/uploads/${filename}`);
});

app.post('/api/upload', upload.single('images'), async (req, res) => {
  let fileType = req.file.mimetype.split('/')[1];
  let newFileName = req.file.filename + '.' + fileType;
  fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, function (err) {
    if (err) throw err;
    console.log('Uploaded Success');
  });
  const db = new Database();
  const conn = db.connection;

  const { title, price, image01, category, description } = req.body;
  const query =
    'INSERT INTO products (title, price, image01, category, description, createdAt, updatedAt) VALUES (?,?,?,?,?,?,?)';
  date_now = (date = new Date().toISOString().slice(0, 19).replace('T', ' '));

  const values = [
    title,
    price,
    `uploads/${newFileName}`,
    category,
    description,
    date_now,
    date_now,
  ];

  await conn.connect((err) => {
    if (err) throw err;
    conn.query(query, values, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({ data: 'Product added to database' });
    });
  });
});

app.post('/api/upload/category', upload.single('images'), async (req, res) => {
    let fileType = req.file.mimetype.split('/')[1];
    let newFileName = req.file.filename + '.' + fileType;
    fs.rename(`./uploads/${req.file.filename}`, `./uploads/${newFileName}`, function (err) {
      if (err) throw err;
      console.log('Uploaded Success');
    });
    const db = new Database();
    const conn = db.connection;

        const {title, image} = req.body;
        const query = 'INSERT INTO category ( title, image, createdAt, updatedAt) VALUES (?,?,?,?)'
            date_now = (date = new Date().toISOString().slice(0, 19).replace('T', ' '));

            const values = [
                title,
                `uploads/${newFileName}`,
                date_now,
                date_now,
              ];

              await conn.connect((err) => {
                if (err) throw err;
                conn.query(query, values, (err, result) => {
                  if (err) throw err;
                  console.log(result);
                  res.json({ data: 'Category added to database' });
                });
              });
});

app.listen(PORT, function () {
  const db = new Database();
  db.TestConnection();
  console.log(`Server running in ${PORT}`);
});
