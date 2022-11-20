import apartamentModel from "../model/apartaments"
import Ressort from "../model/ressort"

export const ApartamentController = {

  // get all controller
  getApartaments: async () => {
    try {
      const apt = await apartamentModel.find({})
      return apt
    } catch (error) {
      throw error
    }
  },

  // get all by id
  async getApartamentsbyId(id) {
    try {
      const apt = await apartamentModel.findOne({ _id: id }).lean();
      return apt
    } catch (error) {
      throw error
    }
  },

  // get all recomendaded
  async getApartamentsRecommendaded() {
    try {
      const apt = await apartamentModel.find({ recomendado: { $eq: true } })
      return apt
    } catch (error) {
      throw error
    }
  },

  async getApartamentsbyRessorts(id) {
    try {
      const apt = await Ressort.findOne({ "apartaments._id": { $eq: id } })
      return apt
    } catch (error) {
      throw error
    }
  },

  newApartament: async (data) => {
    try {
      const apt = await apartamentModel.insertMany(data);
      return data
    } catch (e) {
      (e) => { throw e }
    }
  }

}
