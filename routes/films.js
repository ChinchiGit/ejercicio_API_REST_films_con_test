const router = require('express').Router();

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
    console.log(req.body);
    res.status(200).json({message:"Se ha guardado Test Movie"});
});

router.put("/", (req, res) => {
    console.log(req.body);
    res.status(200).json({message: "Se ha actualizado Updated Test Movie" });
});
router.delete("/:title?", (req, res) => {
    res.status(200).json({message:"Se ha borrado la película con ID: 123"});
   

});




module.exports = router;