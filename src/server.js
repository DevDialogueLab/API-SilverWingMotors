const express = require('express');
const app = express();
// informa que nosso app utiliza o formato json
app.use(express.json())



app.get("/", (req, res) => {
    return res.json({hello: "word"})
})





app.listen(3030, () => console.log(`Server listening on port 3030`))


