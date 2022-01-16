const Intern = require("../lib/Intern")

test("creates an intern instance",()=>{
    const intern = new Intern()
expect(typeof(intern)).toBe("object")
})

test("can set name",()=>{
const name = "nikhil"
const intern = new Intern(name)
expect(intern.name).toBe(name)
})

test("can set id",()=>{
    const testValue = 100;
    const intern = new Intern("code",testValue)
    expect(intern.id).toBe(testValue)
})

test("can set email",()=>{
    const email = "nikhilmakhija@hotmail.com"
    const intern = new Intern("code",1,email)
})

    test("getrole should return \"Intern\"",()=>{
        const testValue = "intern"
        const intern = new Intern("nikhil",1,"nikhilmakhija@hotmail.com")
        expect(intern.getRole()).toBe(testValue)  
    })

    test("getschool should return \"Intern\"",()=>{
        const testValue = "intern"
        const intern = new Intern("nikhil",1,"OSU coding bootcamp")
        expect(intern.getschool()).toBe(testValue)
    })