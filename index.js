// Write your solution in this file!
const employee = {
    name:"x",
    streetAdress:"y"
};
function updateEmployeeWithKeyAndValue(employee,key,object){
    return {
        ...employee,
        [key]:object,
    };
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
};
