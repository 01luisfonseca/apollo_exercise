const { readFileSync } = require("fs")
const typeDefs = readFileSync(require.resolve('./schema.gql'), {encoding:'utf8'})
module.exports = typeDefs