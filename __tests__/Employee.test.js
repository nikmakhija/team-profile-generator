const Employee = require("../lib/Employee")

test("creates an employee instance",()=>{
    const employee = new Employee()
expect(typeof(employee)).toBe("object")
})

test("can set name",()=>{
const name = "nikhil"
const employee = new Employee(name)
expect(employee.name).toBe(name)
})

test("can set id",()=>{
    const testValue = 100;
    const employee = new Employee("code",testValue)
    expect(employee.id).toBe(testValue)
})

test("can set email",()=>{
    const email = "nikhilmakhija@hotmail.com"
    const employee = new Employee("code",1,email)
expect(employee.getEmail()).toBe(email)
})

test("getrole should return \"Employee\"",()=>{
    const testValue = "employee"
    const employee = new Employee("nikhil",1,"nikhilmakhija@hotmail.com")
    expect(employee.getRole()).toBe(testValue)
})