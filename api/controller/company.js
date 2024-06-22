import companyRepository from '../repository/company.js';

const getAllCompanies = async (req, res) => {
    try {
      const companies = await companyRepository.getAllCompanies();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const searchCompaniesByName = async (req, res) => {
    try {
      const { name } = req.query;
      const companies = await companyRepository.searchCompaniesByName(name);
      return res.status(200).json({ data: companies });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

export default{
    getAllCompanies,
    searchCompaniesByName
}