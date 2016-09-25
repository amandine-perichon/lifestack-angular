export default function () {
  return function(skills, selectedCategory, selectedDifficulty) {
    if (skills) {
        return skills
          .filter(elem => elem.category === selectedCategory)
          .filter(elem => elem.difficulty === selectedDifficulty)
    } else {
      return []
    }
  }
}
