/**
 * BallAnimation v1.0
 * author : Patrick Vandermaesen
 */
class BallAnimation {

    constructor(containerCssSelector, countBall, interval, speed) {
        var ballHTML = "";    
        for (var i=0; i<countBall; i++) {
            ballHTML += '<div class="ball anim" id="ball'+i+'"></div>';
        }
        var container = document.querySelector(containerCssSelector);
        container.innerHTML = container.innerHTML+ballHTML;
        this.items=document.querySelectorAll(containerCssSelector+" .anim");
        this.items.forEach(function(item, index) {
            item.index = index;
            item.style.top = Math.floor((Math.random() * (container.offsetHeight-item.offsetHeight)))+"px";
            item.style.left = Math.floor((Math.random() * (container.offsetWidth-item.offsetWidth)))+"px";       
        });
        this.items.forEach(function(item) {
            item.vx = speed;
            item.vy = speed;                        
        });
        /** remove overlaps **/
        for (i=0; i<container.offsetWidth/2; i++) {
            this.anim();
        }
        var t = this;
        setInterval(function(){t.anim();}, interval);
    }

    anim() {
        console.log(this);
        for (var i=0; i<this.items.length; i++) {
            var item = this.items[i];
            var rect = item.getBoundingClientRect();

            var top = rect.top-item.parentElement.getBoundingClientRect().top;
            var left = rect.left-item.parentElement.getBoundingClientRect().left;
            
            item.style.top = (top+item.vy)+"px";
            item.style.left = (left+item.vx)+"px";
            
            if (!this.contactBorder(item)) {
                this.contactBalls(item);
            }
            //this.info(item);
        }
    }

    contactBorder(item) {
        var container = item.parentElement;
        var rect = item.getBoundingClientRect();
        var top = rect.top-container.getBoundingClientRect().top;
        var left = rect.left-container.getBoundingClientRect().left;
        var right = rect.right-container.getBoundingClientRect().left;
        var bottom = rect.bottom-container.getBoundingClientRect().top;
        var change = false;
        if (bottom >= container.offsetHeight) {
            if (item.vy>0) {
                item.vy = -item.vy;
                change = true;
            }
        } 
        if (top <= 0) {
            if (item.vy<0) {
                item.vy = -item.vy;
                change = true;
            }        
        }
        if (right >= container.offsetWidth) {
            if (item.vx>0) {
                item.vx = -item.vx;
                change = true;
            }
        } 
        if (left <= 0) {
            if (item.vx<0) {
                item.vx = -item.vx;
                change = true;
            }        
        }    
        return change;
    }

    contactBalls(item) {
        for (var i=0; i<this.items.length; i++) {
            var ball = this.items[i];
            if (item.index < ball.index) {
                this.impact(item, ball);
            }        
        }
    }

    impact (b1, b2) {        
        var rb1 = b1.getBoundingClientRect();
        var rb2 = b2.getBoundingClientRect();
        if (!(rb1.top > rb2.bottom || rb1.right < rb2.left || rb1.bottom < rb2.top || rb1.left > rb2.right)) {        
            if (rb1.left >= rb2.left) {
                if (b1.vx < 0) {
                    b1.vx = -b1.vx;
                }
                if (b2.vx > 0) {
                    b2.vx = -b2.vx; 
                }       
            } else {
                if (b1.vx > 0) {
                    b1.vx = -b1.vx;
                }
                if (b2.vx < 0) {
                    b2.vx = -b2.vx; 
                }   
            }
            if (rb1.top >= rb2.top) {
                if (b1.vy < 0) {
                    b1.vy = -b1.vy;
                }
                if (b2.vy > 0) {
                    b2.vy = -b2.vy; 
                }       
            } else {
                if (b1.vy > 0) {
                    b1.vy = -b1.vy;
                }
                if (b2.vy < 0) {
                    b2.vy = -b2.vy; 
                } 
            }
        }
    }

    info(item) {
        // item.innerHTML = '<span class="text">'+item.vx+','+item.vy+'</span>';
    }
}