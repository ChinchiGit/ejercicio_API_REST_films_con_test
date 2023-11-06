const express = require("express")

const router = express.Router()

const fetchFilms = require('../utils/fetchFilms')

router.get("/:title",async (req,res)=>{
    let peliObtenida = await fetchFilms(req.params.title)
    if(peliObtenida !== null){
        res.status(200).json(peliObtenida)
    }else{
        res.status(404).json({message :"Film not found"})
    }
})


router.post("/", (req, res) => {
    const film = req.body;
    res.status(200).json({message: `Se ha guardado ${film.title}`});
});

router.put("/", (req, res) => {
    const film = req.body;
    res.status(200).json({message: `Se ha actualizado ${film.title}` });
});
router.delete("/:title?", (req, res) => {
    const film = req.body;
    res.status(200).json({id: 123, message: `Se ha borrado la película con ID: ${film.id}`});
   

});




module.exports = router;