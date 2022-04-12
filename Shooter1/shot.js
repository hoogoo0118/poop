class Shot {

    constructor(x,y,speed,theta,r) {
        this.speed=speed;
        this.theta=theta;
        this.xPos=x;
        this.yPos=y;
        this.diam=r;
        this.grazed=false;
    }

    display() {
        ellipse(this.xPos,this.yPos,this.diam,this.diam);
    }

    update() {
        this.xAcc=this.speed*cos(this.theta);
        this.yAcc=this.speed*sin(this.theta);
        this.xPos+=this.xAcc;
        this.yPos+=this.yAcc;
        this.speed*=0.9995;
    }

    miss() {
        for (var i=0; i<pBombs.length; i++) {
            if (dist(this.xPos,this.yPos,pBombs[i].x,pBombs[i].y)<10+bombR/2) {
                return true;
            }
        }
        return false;
    }

    offScreen() {
        return(this.xPos>width+30||this.xPos<-30||this.yPos>height+20||this.yPos<-20);
    }
}