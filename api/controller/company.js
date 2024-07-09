import companyRepository from '../repository/company.js';

const getAllCompanies = async (req, res) => {
  try {
    const companies = await companyRepository.getAllCompanies(req);
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
const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await companyRepository.getCompanyById(companyId);

    if (!company) {
      return res.status(404).json({ error: "Company not found" });
    }

    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export default {
  getAllCompanies,
  searchCompaniesByName,
  getCompanyById
}