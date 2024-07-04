import FieldsRepository from '../repository/fields.js';

const getFieldsHostest = async (req, res) => {
    try {
      const topFields = await FieldsRepository.getFieldsHostest();
      return res.status(200).json(topFields );
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  const getAllFields = async (req, res) => {
    try {
      const allFields = await FieldsRepository.getAllFields();
      return res.status(200).json({ data: allFields });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  export default{
    getFieldsHostest,
    getAllFields
}