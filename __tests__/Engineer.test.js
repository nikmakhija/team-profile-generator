const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")
const Engineer = require("../lib/Engineer")

test("creates an engineer instance",()=>{
    const engineer = new Engineer()
expect(typeof(engineer)).toBe("object")
})

test("can set name",()=>{
const name = "nikhil"
const engineer = new Engineer(name)
expect(engineer.name).toBe(name)
})

test("can set id",()=>{
    const testValue = 100;
    const engineer = new Engineer("code",testValue)
    expect(engineer.id).toBe(testValue)
})

test("can set email",()=>{
    const email = "nikhilmakhija@hotmail.com"
    const engineer = new Engineer("code",1,email)
})

test("getrole should return \"Engineer\"",()=>{
    const testValue = "engineer"
    const engineer = new Employee("nikhil",1,"nikhilmakhija@hotmail.com")
    expect(engineer.getRole()).toBe(testValue)
})

test("getgithub should return \"Engineer\"",()=>{
    const testValue = "engineer"
    const engineer = new Engineer("nikhil",1,"nikmakhija")
    expect(engineer.getGithub()).toBe(testValue)
})