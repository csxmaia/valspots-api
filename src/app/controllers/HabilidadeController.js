const { habilidade, personagem } = require('../models')

class HabilidadeController {

  async index(req, res) {
    try{
      const data = await habilidade.findAll({
        include: [
          {model: personagem}
        ]
      })
      return res.json(data)
    }catch(err){
      return res.status(400).json(err)
    }
  }

  async create(req, res) {
    try {
      console.log(req.body)
      const {dataCreate} = req.body
      console.log(dataCreate)

      const data = await habilidade.create(dataCreate)
      
      return res.json(data)
    } catch (err) {
      return res.status(400).json(err)
    }
  }

}

module.exports = new HabilidadeController()