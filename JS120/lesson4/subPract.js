class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('hi')
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}

helloObj = new Hello
helloObj.hi()