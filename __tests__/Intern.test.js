const Intern = require("../lib/Intern")

    test("Can set school", ()=> {
        const testValue = "OSU coding bootcamp"
        const employee = new Intern("nikhil", 1, "nikhilmakhija@hotmail.com", testValue)
        expect(employee.school).toBe(testValue)
    })

    test("getrole should return \"Intern\"",()=>{
        const testValue = "intern"
        const employee = new Intern("nikhil",1,"nikhilmakhija@hotmail.com", "OSU coding bootcamp")
        expect(employee.getRole()).toBe(testValue)  
    })

    test("Can get school via getschool()",()=>{
        const testValue = "OSU coding bootcamp"
        const employee = new Intern("nikhil",1,"nikhilmakhija@hotmail.com, testValue")
        expect(employee.getschool()).toBe(testValue)
    })