const Manager = require("../lib/Employee")
const employee = require("../lib/Employee")

test("Can set office number", ()=>{
    const testValue = 100;
    const employee = new Manager("nikhil", 1, "nikhilmakhija@hotmail.com", testValue)
    expect(employee.officeNumber).toBe(testValue)
})

test("getrole should return \"Manager\"",()=>{
    const testValue = "manager"
    const employee = new Manager("nikhil",1,"nikhilmakhija@hotmail.com", 100)
    expect(employee.getRole()).toBe(testValue)
})

test("Can get office number()", ()=> {
    const testValue = 100;
    const employee = new Manager("nikhil", 1, "nikhilmakhija@hotmail.com", testValue)
    expect(employee.getOfficeNumber()).toBe(testValue)
})