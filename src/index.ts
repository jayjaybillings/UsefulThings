class Angle {
    private angle: number;

    constructor(_angle: number) {
        this.angle = _angle;
    }

    public radians(): number {
        return this.angle;
    }

    
}

console.log("Hello typescript!");

const a = new Angle(Math.PI/2.0);
console.log(a.radians());
