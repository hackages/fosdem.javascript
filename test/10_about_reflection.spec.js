const assert = require("assert");

let A = function() {
  this.aprop = "A";
};

let B = function() {
  this.bprop = "B";
};

B.prototype = new A();

describe.skip("About Reflection (topics/10_about_reflection.js)", function() {
  it("typeof", function() {
    assert.equal(__, typeof {}, "what is the type of an empty object?");
    assert.equal(__, typeof "apple", "what is the type of a string?");
    assert.equal(__, typeof -5, "what is the type of -5?");
    assert.equal(__, typeof false, "what is the type of false?");
  });

  it("property enumeration", function() {
    let keys = [];
    let values = [];
    let person = { name: "Amory Blaine", age: 102, unemployed: true };
    for (let propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    assert.deepEqual(
      keys,
      [__, __, __],
      "what are the property names of the object?"
    );
    assert.deepEqual(
      values,
      [__, __, __],
      "what are the property values of the object?"
    );
  });

  it("hasOwnProperty", function() {
    let b = new B();
    let propertyName;

    let keys = [];
    for (propertyName in b) {
      keys.push(propertyName);
    }
    assert.equal(__, keys.length, "how many elements are in the keys array?");
    assert.deepEqual([__, __], keys, "what are the properties of the array?");

    // hasOwnProperty returns true if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    let ownKeys = [];
    for (propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }
    assert.equal(
      __,
      ownKeys.length,
      "how many elements are in the ownKeys array?"
    );
    assert.deepEqual(
      [__],
      ownKeys,
      "what are the own properties of the array?"
    );
  });

  it("constructor property", function() {
    let a = new A();
    let b = new B();
    assert.equal(
      __,
      typeof a.constructor,
      "what is the type of a's constructor?"
    );
    assert.equal(
      __,
      a.constructor.name,
      "what is the name of a's constructor?"
    );
    assert.equal(
      __,
      b.constructor.name,
      "what is the name of b's constructor?"
    );
  });

  it("eval is evil", function() {
    // eval executes a string; eval is evil
    let result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    assert.equal(__, result, "what is the value of result?");
  });
});
