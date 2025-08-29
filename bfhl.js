require('dotenv').config();
const express = require('express');
const cors = require('cors');
const serverless = require("serverless-http");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function alternatingCapsReverse(str) {
    let reversed = str.split("").reverse().join("");
    let result = "";
    for (let i = 0; i < reversed.length; i++) {
        if (i % 2 === 0) {
            result += reversed[i].toUpperCase();
        } else {
            result += reversed[i].toLowerCase();
        }
    }
    return result;
}

app.post('/', (req, res) => {
    console.log("Incoming body:", req.body);

    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ status: false, message: 'Invalid data format' });
    }

    const n = data.filter(item => !isNaN(item));
    const alpha = data.filter(item => /^[a-zA-Z]$/.test(item));
    const specials = data.filter(item => !/^[a-zA-Z0-9]$/.test(item));
    const even_numbers = n.filter(num => parseInt(num) % 2 === 0);
    const odd_numbers = n.filter(num => parseInt(num) % 2 !== 0);
    const alphabets = alpha.map(a => a.toUpperCase());
    const sum = n.reduce((acc, val) => acc + parseInt(val), 0);
    const alt_caps = alternatingCapsReverse(alpha.join(""));

    const fullName = process.env.USER_ID || "Nandhitha B";
    const dob = process.env.DOB || "06092004";
    const user = `${fullName.toLowerCase().replace(/\s+/g, "_")}_${dob}`;
    const response = {
        is_success: true,
        user_id: user,
        email: process.env.EMAIL_ID,
        roll_number: process.env.REG_NO,
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters: specials,
        sum: sum.toString(),
        concat_string: alt_caps
    };

    res.json(response);
});

app.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = require("serverless-http")(app);

