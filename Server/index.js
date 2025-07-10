const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const {OpenAI} = require('openai')

dotenv.config();

const app = express();
const PORT = 5000;