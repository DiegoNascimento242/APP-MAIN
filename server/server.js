import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import setupSwagger from './swagger.js';
import router from './router/userRouter.js';
import keyRouter from './router/keysRouter.js';
import rentRouter from './router/emprestimoRouters.js';


dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
app.use(cors());
app.use(express.json());
app.use('/api/usuario', router);
app.use('/api/chaves', keyRouter);
app.use('/api/emprestimo', rentRouter);

app.get('/register', (req, res) => {
    res.send('Rota de registro de usuários');
  });
//Configuração do Swagger
// setupSwagger(app);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});

