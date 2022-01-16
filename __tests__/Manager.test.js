const Manager = require("../lib/Employee")

test("creates an manager instance",()=>{
    const manager = new Manager()
expect(typeof(manager)).toBe("object")
})

test("can set name",()=>{
const name = "nikhil"
const manager = new Manager(name)
expect(manager.name).toBe(name)
})

test("can set id",()=>{
    const testValue = 100;
    const manager = new Manager("code",testValue)
    expect(manager.id).toBe(testValue)
})

test("can set email",()=>{
    const email = "nikhilmakhija@hotmail.com"
    const manager = new Manager(email)
})

test("getrole should return \"Manager\"",()=>{
    const testValue = "manager"
    const employee = new Manager("nikhil",1,"nikhilmakhija@hotmail.com")
    expect(manager.getRole()).toBe(testValue)
})