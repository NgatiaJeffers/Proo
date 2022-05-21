import express, { application } from 'express';
import { respondName } from './controllers/homeController.js';
import layouts from 'express-ejs-layouts';

const app = express();

app.use(layouts);

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.get("/name/:name", respondName)

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
  });

