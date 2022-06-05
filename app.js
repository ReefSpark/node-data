const express    = require('express');
const bodyParser = require('body-parser');
const compress   = require('compression');
const cors       = require('cors');
const helmet     = require('helmet');
const router     = require("./src/routes/index")

const app        = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(compress());
app.use(helmet());

app.use(cors());

app.use('/api',cors(),router)

app.listen(3000, () => {
    console.log('listening on port 3000!!')
});

