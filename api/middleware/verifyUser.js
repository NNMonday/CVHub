const verifyUser = (req, res, next) => {
  try {
    const { userId } = req.decodedToken;
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "User id is required" });
    }
    if (userId !== id) {
      return res.status(401).json({ message: "User id does not match target" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
export default verifyUser;
