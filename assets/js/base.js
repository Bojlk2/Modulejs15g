// const fullName = ['Jorge', 'Luis', 'Camarillo', 'Cristobal']

// let iniciales = ''
// iniciales = fullName.reduce((acc, cv) => {
//     return `${acc}${cv.slice(0,1)}`
// }, '')
// console.log(iniciales)

const getAcronym = (arr) => arr.reduce( (acc, cv) => `${acc}${cv.slice(0,1)}`, '')
