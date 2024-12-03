interface Bird {
  eat(): void;

}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}


class tucan implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

class HummingBird implements Bird, FlyingBird {
  public eat() {}
  public fly() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmingBird {
  public eat() {}
  public swim() {}
}

const birds: Bird[] = [new tucan(), new HummingBird(), new Ostrich(), new Penguin()];

console.log(birds);