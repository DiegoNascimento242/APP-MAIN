// swagger.js
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Aluguel de Chaves',
      version: '1.0.0',
      description: 'API para gerenciar o aluguel de chaves',
    },
  },
  apis: ['./routes/*.js'], // Arquivos que contêm as rotas da API
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
