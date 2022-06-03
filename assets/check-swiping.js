export class CheckSwiping {   

     constructor(el){
        document.getElementById(el).addEventListener('mousedown', () => {
            this.isSwiping = false;
        });
    
        document.getElementById(el).addEventListener('mousemove', () => {
            this.isSwiping = true;
        });
    
        document.getElementById(el).addEventListener('mouseup', e => {
            if (this.isSwiping && e.button === 0) {
                // console.log('dragging');
                this.swipingStatus = 'dragging';
            } else {
                // console.log('not dragging');
                this.swipingStatus = 'not dragging';
            }
    
            this.isSwiping = false;
        });
    
        document.getElementById(el).addEventListener('touchstart', (e) => {
            this.isSwiping = false;
            if(e.touches.length >= 2){
                this.isSwiping = true;
            }
        });
    
        document.getElementById(el).addEventListener('touchmove', (e) => {
            this.isSwiping = true;
        });
    
        document.getElementById(el).addEventListener('touchend', e => {
            e.preventDefault();

            if(e.touches.length >= 2){
                this.isSwiping = true;
            }
    
            if (this.isSwiping) {
                // console.log('swiping');
                this.swipingStatus = 'swiping';
            } 
            else {
                this.swipingStatus = 'not swiping';
                // console.log('not swiping');
            }
    
            this.isSwiping = false;
        });
     }   

}