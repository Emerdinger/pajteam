const express = require('express');
const router = express.Router();
const Pajero = require('../models/Pajero');

router.get("/health", async (req, res) => {
    res.status(200).send('ok');
})

router.post("/", async (req, res) => {
    try {
        const newPajero = new Pajero({
            usuario: req.body.usuario
        });
        const savedPajero = await newPajero.save();
        res.status(200).json(savedPajero);
    } catch (e) {
        res.status(500).json(e);
    }
})

router.get("/search/:id", async (req, res) => {
    try {
        const pajero = await Pajero.findOne({ usuario: req.params.id });
        res.status(200).json(pajero);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const pajero = await Pajero.findOne({ usuario: req.params.id });
        await pajero.updateOne({
            pajas: pajero.pajas+1
        })
        res.status(200).json(await Pajero.findOne({ usuario: req.params.id }));
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/all", async (req, res) => {
    try {
        const pajeros = await Pajero.find();
        res.status(200).json(pajeros);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/count", async (req,res) => {
    try {
        const pajeros = await Pajero.find();
        let contador = 0;
        pajeros.forEach(paj => {
            contador += paj.pajas;
        });
        res.status(200).json(contador);
    } catch (e) {
        res.status(500).json(error);
    }
})

module.exports = router;