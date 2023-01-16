const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const categories = ["a","b","c"]
const setups = ["d","e","f"]
const deliveries = ["g","h","i"]


const jokes = {
    jokes: [
        {
            category: "pun",
            setup: "What kind of car did Whitney Houston drive?",
            delivery: "A Hyundaiiiiiiiiiiii"
        },
        {
            category: "programming",
            setup: "How do you generate a random string?",
            delivery: "Put a Windows user in front of Vim and tell them to exit."
        },
        {
            category: "pun",
            setup: "Why do cows wear bells?",
            delivery: "Because their horns doesn't work!"
        }
    ]
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/jokes", (req, res) => {
    res.send(jokes)
})

app.get("/newjoke", (req, res) => {
    newJoke()
    res.send("added")
})

function newJoke()
{
    const one = categories[Math.floor(Math.random() * categories.length)]
    const two = setups[Math.floor(Math.random() * setups.length)]
    const three = deliveries[Math.floor(Math.random() * deliveries.length)]

    jokes.jokes.push({category: one, setup: two, delivery: three})

    
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})