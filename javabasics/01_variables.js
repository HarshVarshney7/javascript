
const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" // not a good way
let accountState;//value is undefined

// accountId = 2 // not allowed

accountEmail = "harsh123@gmail.com"
accountPassword = "123"
accountCity ="Bengaluru"

// shortcut to print (log+Enter)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var (because of issue in block slope and functional scope)
*/
