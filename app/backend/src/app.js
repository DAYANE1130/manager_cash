import express from 'express';
// import statusCodes from './src/utils/statusCodes';

// import router from './src/routes/index';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(statusCodes.OK).send('Express + Sequelize');
});

//app.use('/accounts', router.accountRouter);

export default app;