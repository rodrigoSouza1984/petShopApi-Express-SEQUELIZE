import express from "express"
import proprietarioRoute from "./routes/proprietario.route.js"
import animalRoute from "./routes/animal.route.js"
import servicoRoute from "./routes/servico.route.js"
import blogRoute from "./routes/blog.route.js"

import cors from "cors"

const app = express();
app.use(express.json())

app.use("/proprietario", proprietarioRoute);
app.use("/animal", animalRoute);
app.use("/servico", servicoRoute);
app.use("/blog", blogRoute);
app.use(cors());

app.listen(3000, () => console.log('API Started'))