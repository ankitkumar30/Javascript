class Complex{
    realPart;
    imaginaryPart;
    constructor(r,i){
        this.realPart = r;
        this.imaginaryPart = i;
    }
   
    add(c){
        return new Complex(this.realPart+c.realPart,this.imaginaryPart+c.imaginaryPart);
    }

    multiply (c){
        return new Complex(this.realPart*c.realPart-this.imaginaryPart*c.imaginaryPart, this.realPart*c.imaginaryPart+this.imaginaryPart+c.realPart);
    }

    print(){
        console.log(`${this.realPart}+${this.imaginaryPart}i`)
    }
}

c1 = new Complex(3,4);
c2 = new Complex(4,5)
c3 = c1.add(c2);
c3.print();
c1.multiply(c2).print()