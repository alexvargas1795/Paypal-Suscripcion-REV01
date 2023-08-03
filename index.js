import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
const app = express();
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));
const port = process.env.PORT || 3000;
const environment = process.env.ENVIRONMENT || 'sandbox';



app.post('/complete_order', (req, res) => {
    
            fetch("https://x8ki-letl-twmt.n7.xano.io/api:yaAIbiu1/subscriptions/{subscriptions_id}", {
                            method: "post", headers: { "Content-Type": "application/json; charset=utf-8" },
                            body: JSON.stringify({
                                "varUserID": req.body.varUserID,
                                "planID": req.body.planID
                            })
                        })
                .then(() => {
                    console.log("Agregado a xano")
                    
                })

                .catch((error)=>{
                    console.log("No se agregó a xano")
                })
        })


// Helper / Utility functions





//Servers the index.html file
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');

});
//Servers the style.css file
app.get('/style.css', (req, res) => {
    res.sendFile(process.cwd() + '/style.css');
});
//Servers the script.js file
app.get('/script.js', (req, res) => {
    res.sendFile(process.cwd() + '/script.js');
});

//PayPal Developer YouTube Video:
//How to Retrieve an API Access Token (Node.js)
//https://www.youtube.com/watch?v=HOkkbGSxmp4


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

