const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const {OpenAI} = require('openai')

dotenv.config();

const app = express();
const PORT = 5000;

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.post('/api/ask', async (req,res) => {
    const {message} = req.body;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o' ,

        messages : [
          {
            role: 'system' ,

            content : `You are DevAgent, a senior software engineer. Explain, debug, and write code.`
          },
          {
            role : 'user' ,

            content : message
          }
        ]
        
      })
        
    } catch (error) {
        
    }
})