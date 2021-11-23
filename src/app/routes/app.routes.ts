export let authroute = { "register":"http://localhost:3000/api/authentication/register", "login":"http://localhost:3000/api/authentication/login"}

export let priviledge_route = { "public":"http://localhost:3000/api/priviledge/public", "user":"http://localhost:3000/api/priviledge/user",
                                "admin":"http://localhost:3000/api/priviledge/admin"
                        }
export let reservationroute = { "publish":"http://localhost:3000/api/order/publish","loadOrderPool":"http://localhost:3000/api/order/reservations/list?limit="}

export let bankroute = { "resolveAccNo":"http://localhost:3000/api/bank/resolve_account_number","confirmVerifiedAccNo":"http://localhost:3000/api/verify_accountNo"}

// module.exports ={ authroute, priviledge_route }