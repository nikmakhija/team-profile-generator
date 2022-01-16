const Engineer = require("../lib/Engineer")

test("creates an GitHub account",()=>{
    const testValue = "nikmakhija"
    const employee = new Engineer("Nikhil", 1, testValue)
expect(employee.github).toBe("testValue")
})

test("getrole should return \"Engineer\"",()=>{
    const testValue = "Engineer"
    const employee = new Engineer("nikhil",1,"nikhilmakhija@hotmail.com", "nikmakhija")
    expect(employee.getRole()).toBe(testValue)
})

test("Can get GitHub username via getGithub()", ()=> {
    const testValue = "nikmakhija"
    const employee = new Engineer("nikhil", 1, "nikhilmakhija@hotmail.com", testValue)
    expect(employee.github()).toBe(testValue)
})