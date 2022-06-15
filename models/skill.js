const skills = [
    {id: 1, skill: 'HTML', complete: true},
    {id: 2, skill: 'CSS', complete: true},
    {id: 3, skill: 'Javascript', complete: true},
    {id: 4, skill: 'Express', complete: false},
    {id: 5, skill: 'React', complete: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
  }