export class Point {

    constructor(private _x?: number, private y?:number){
    }
    
        draw(){
            console.log('X : ' + this._x + ", Y : " + this.y);
        }
    }