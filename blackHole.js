
class blackhole{
    constructor(x,y,m){
        this.pos = createVector(x,y);
        this.mass = m;
        this.rs = (2*G*this.mass) / (c*c);
    }

    
    pull(photon){
        const force = p5.Vector.sub(this.pos,photon.pos);
        const theta = force.heading();
        const r = force.mag();
        const fg = G*this.mass/(r*r);
        let deltaTheta = -fg * (dt/c)*sin(photon.theta - theta);
        deltaTheta /= abs(1 - 2 * G * this.mass / (r*c*c));
        photon.theta += deltaTheta;
        force.setMag(fg);
        photon.vel.add(force);
        photon.vel.setMag(c);

        if(r <= this.rs + 0.5){
            photon.stop();
        }
         
    }

    show(){
        fill(0);
        noStroke();
        ellipse(this.pos.x,this.pos.y,this.rs );

        noFill();
        strokeWeight(64);
        stroke(100,100);
        ellipse(this.pos.x,this.pos.y,this.rs*3+100);

        strokeWeight(32);
        stroke(255,100,0);
        ellipse(this.pos.x,this.pos.y,this.rs*1.5+30);
    }
}