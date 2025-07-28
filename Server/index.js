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
        ] ,
        temperature: 0.7 ,
        
      });

      res.json({ reply : response.choices[0].message.content})
        
    } catch (error) {
        
      console.error(error);

      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
})
  

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})