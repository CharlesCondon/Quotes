function sketch(p) {
    function Drop() {
        this.x = p.random(p.width);
        this.y = p.random(-500, -50);
        this.z = p.random(0, 20);
        this.len = p.map(this.z, 0, 20, 10, 20);
        this.yspeed = p.map(this.z, 0, 10, 1, 10);
    
        this.fall = function() {
            this.y = this.y + this.yspeed;
            var grav = p.map(this.z, 0, 20, 0, 0.2);
            this.yspeed = this.yspeed + grav;
        
            if (this.y > p.height) {
                this.y = p.random(-200, -100);
                
                this.yspeed = p.map(this.z, 0, 20, 4, 10);
            }
        }
    
        this.show = function() {
            var thick = p.map(this.z, 0, 20, 1, 3);
            p.strokeWeight(thick);
            p.stroke(52, 60, 85);
            p.line(this.x, this.y, this.x, this.y + this.len);
        }
    }
    let drops = [];

    p.setup = function() {
        p.createCanvas(window.innerWidth, window.innerHeight);
        let w = p.width;
        if (w > 800) {
            for (let i = 0; i < 500; i++) {
                drops[i] = new Drop();
            }
        }
        else {
            for (let i = 0; i < 300; i++) {
                drops[i] = new Drop();
            }
        }
            
    }
    

    p.draw = function() {
        p.background(33, 33, 44);
            for (let i = 0; i < drops.length; i++) {
                drops[i].fall();
                drops[i].show();
        }
    }
}

export default sketch;