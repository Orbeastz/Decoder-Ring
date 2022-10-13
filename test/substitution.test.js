// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution")


describe("substitution", ()=>{
  it("It returns false if the given alphabet isn't exactly 26 characters long.", ()=> {
      const actual = substitution("jrufscpw", "xoy");
      expect(actual).to.be.false
  })

  it("It returns false if the given alphabet is duplicated", ()=> {
    const actual = substitution("thinkful", "xoyqmcgrussddjpzibev"); 
    expect(actual).to.be.false
})

  it("It correctly translates the given phrase, based on the alphabet given to the function", ()=> {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'jrufscpw'
      expect(actual).to.equal(expected)
  })

  
  it("It correctly translates the given phrase, based on the alphabet given to the function", ()=> {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = "y&ii$r&"
    expect(actual).to.equal(expected)
})


  it("should maintain spaces when encoding", ()=> {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.equal(expected)
  })

  it("should ignore capital letters", ()=> {
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.equal(expected)
  })
})