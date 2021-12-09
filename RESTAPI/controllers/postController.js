const router = require('express').Router();

const {    getAll, create, update, remove } = require('../services/post');
const {isAuth, isOwner } =require('../middlewares/guards');
const { parseError } = require('../utils');
const preload = require('../middlewares/preload');

router.get('/', async (req, res) => {
   console.log(req.user);
    const data = await getAll();
    res.json(data);
})

router.post('/', isAuth(), async (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        ownerId: req.user._id
    }
    try {
        const result = await create(data);

        res.status(201).json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(error.status || 400).json({message});

    }
})

router.get('/:id', preload(), async (req, res) => {
      const item = req.data.toObject();
      
      res.json(item);
})
router.put('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    const updatedData = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,  
     }
    try {
        const result = await update(req.data, updatedData);

        res.status(200).json(result);
    } catch (error) {
        const message = parseError(error);
        res.status(error.status || 400).json({message});

    }
})


router.delete('/:id', isAuth(), preload(), isOwner(), async (req, res) => {
    try {

        await remove(req.params.id);
        res.status(204).end();
    } catch(error) {
        res.status(error.status || 400).json({message: error.message});

    }
})

module.exports = router;