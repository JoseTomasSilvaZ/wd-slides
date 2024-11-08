## Agregando handlebars a nuestro proyecto de Express

```javascript {1-3|6|9|10-17|19-22|all}
import express from "express"
import handlebars from "express-handlebars"
import path from "path"

/* VARIABLES */
const PORT = 3000

/* SERVER INITIALIZATION AND CONFIG */
const app = express()
app.use(express.static(path.join(import.meta.dirname, "/public")))
app.use(express.json())

    app.engine("handlebars", handlebars.engine({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")
app.set("views", "./views")

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`)
})
```