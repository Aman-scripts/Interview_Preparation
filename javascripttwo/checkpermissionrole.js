// Check for permissions from roles
// Input:roles={ admin:["read","write"], user:["read"], staff: ["write"]} {not able to solve this in the first attempt}
// checkRole="user",
// action="write"
// Output:false

function permissionRoles(roles,checkbox,action){

if((!checkbox in roles)){
    return false;
}
return roles[checkbox].includes(action)

}

let role={ admin:["read","write"], user:["read"], staff: ["write"]}
let check="user"
let act="write"
console.log(permissionRoles(role,check,act))