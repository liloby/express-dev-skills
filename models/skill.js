const skills = [
    {id: 1, skill: 'HTML', complete: true},
    {id: 2, skill: 'CSS', complete: true},
    {id: 3, skill: 'JAVASCRIPT', complete: true},
    {id: 4, skill: 'EXPRESS', complete: false},
    {id: 5, skill: 'REACT', complete: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = Number(id)
    return skills.find(skill => skill.id === id)
  }

  function create(skill) {
    skill.id = skills.length + 1
    skill.complete = false
    skills.push(skill)
  }

  function deleteOne(id) {
    id = Number(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function update(id, skill) {
    id = Number(id)
    const skillUpdate = skills.find(skill => skill.id === id)
    skillUpdate.skill = skill.skill
  }