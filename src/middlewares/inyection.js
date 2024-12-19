import { purify } from '../utils/purify.js';

const inyection = (req, _, next) => {
    if (purify(req.body)) {
        throw new Error('inyeccion');
    }
    next();
};

export default inyection;