import companyRepository from '../repository/company.js';

const getAllCompanies = async (req, res) => {
    try {
      const companies = await companyRepository.getAllCompanies();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

export default{
    getAllCompanies
}