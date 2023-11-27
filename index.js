// Write your solution in this file!

const employee = {
    name: 'wahab',
    address: 'maryland'
};

function updateEmployeeWithKeyAndValue(object,key,value){
    const newObject = {...object}
    newObject[key] = value
    return newObject
}
updateEmployeeWithKeyAndValue(employee,'name','khan')

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value){
    const newObject = object
    newObject[key] = value
    return newObject
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,'name','khan')

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee}
    delete newObject[key]
    return newObject
}
deleteFromEmployeeByKey(employee,'name')

function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newObject = employee
    delete newObject[key]
    return newObject
}
deleteFromEmployeeByKey(employee,'name')