import express from 'express';
import morgan from 'morgan';
import {EmployeesRouter, AuthRouter, EmployeeRequestRouter} from './routes/index.js';
import value from './config/env.js';
import inyection from './middlewares/inyection.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(inyection);
app.use('/api',AuthRouter);
app.use('/api',EmployeesRouter);
app.use('/api',EmployeeRequestRouter);


const { PORT } = value;
    app.listen( PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }
);