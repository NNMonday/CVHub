import Fields from "../model/Fields.js";

const getFieldsHostest = async () => {
  try {
    const topFields = await Fields.aggregate([
      {
        $group: {
          _id: '$fields_id',
          count: { $sum: 1 } // Đếm số lượng công việc cho mỗi fields_id
        }
      },
      {
        $lookup: {
          from: 'fields',
          localField: '_id',
          foreignField: '_id',
          as: 'field'
        }
      },
      {
        $unwind: '$field'
      },
      {
        $sort: { count: -1 } // Sắp xếp theo số lượng công việc giảm dần
      },
      {
        $limit: 10 // Giới hạn chỉ lấy top 10
      },
      {
        $project: {
          _id: 0, 
          name: '$field.name',
          job_count: '$count'
        }
      }
    ]);

    return topFields;
  } catch (error) {
    throw new Error(error.message);
  }
};

  export default{
    getFieldsHostest
}