const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select("*")
    .from("users")
    .where({ id: id })
    .then((user) => res.json(user[0]));
};

module.exports = { handleProfileGet: handleProfileGet };
