const {getAllPeople} = require('../../repositories');
const {resFromData} = require('../../utilities');

function getAllPeopleController(req, res) {
  getAllPeople().then((people) => {
    res.json(resFromData(people));
  });
}

module.exports = {getAllPeopleController};
