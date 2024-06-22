import workStatusRepository from "../repository/workstatus.js";

const getAllWorkStatus = async (req, res) => {
  try {
    const workStatuses = await workStatusRepository.getAllWorkStatus();
    res.status(200).json(workStatuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWorkStatusById = async (req, res) => {
    const workstatus_id = req.params.id; // Lấy id từ request params
  
    try {
      const workStatus = await workStatusRepository.getWorkStatusById(workstatus_id);
      if (!workStatus) {
        return res.status(404).json({ message: "Work status not found" });
      }
      res.status(200).json(workStatus);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



export default {
  getAllWorkStatus,getWorkStatusById
};