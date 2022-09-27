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

class Toucan implements Bird, FlyingBird {
    public eat() { }
    public fly() { }
}

class Hummingbird implements Bird, FlyingBird {
    public eat() { }
    public fly() { }
}

class Ostrich implements Bird, RunningBird {
    public eat() { }
    public run() { }
}

class Penguin implements Bird, SwimmingBird {
    public eat() { }
    public swim() { }
}