class Point {

constructor(private _x?: number, private y?:number){
}

    draw(){
        console.log('X : ' + this._x + ", Y : " + this.y);
    }

    get x(){
        return this._x;
    }

    set x(value){
        if(value <0)
            throw new Error('value can not be less then zero')

            this._x = value;
    }
}

let point = new Point();
let x = point.x;
point.x = 4;
point.draw();