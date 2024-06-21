import WorkStatus from "../model/WorkStatus.js";

const getAllWorkStatus = async () => {
  try {
    const workStatuses = await WorkStatus.find();
    return workStatuses;
  } catch (error) {
    throw new Error("Failed to fetch work statuses from database.");
  }
};

const getWorkStatusById = async (workstatus_id) => {
    try {
      const workStatus = await WorkStatus.findById(workstatus_id);
      return workStatus;
    } catch (error) {
      throw new Error(`Failed to find work status with id ${workstatus_id}: ${error.message}`);
    }
  };
  const getWorkStatusByJobId = async (jobsId) => {
    try {
      const workStatus = await WorkStatus.findOne({ jobsId: jobsId });
      return workStatus;
    } catch (error) {
      throw new Error(error.message);
    }
  };

export default {
  getAllWorkStatus,getWorkStatusById,getWorkStatusByJobId
};
