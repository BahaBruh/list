





    class Airplane {
        constructor(item){
            this.airplane = document.querySelector(item.airplane)
            window.addEventListener('scroll', () => this.scrollplane())
        }
        scrollplane(){
            this.airplane.style.transform = `translateX(${scrollY * 1.5}px)`
        }
    }

const airplane = new Airplane({
    airplane:'.airplane',
})


class Sunrise {

    constructor(sun){
        this.sunLiv = document.querySelector(sun)
        this.sunLeave = this.sunLiv.querySelectorAll('.leaves')
        this.moveLiv = addEventListener('mousemove', (e) => this.sunItem(e))
    }
    sunItem(e){
        this.sunLeave.forEach( item => {
            const speed = item.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX * speed) / 50
            const y = (window.innerWidth - e.pageY * speed) / 65
            // const m = 
            item.style.transform = `translate(${x}px, ${y}px`
            // item.style.transform = `rotate(${m})`
        })
        
    }
}

const sunrise = new Sunrise('.main__section')





class Text {

    constructor(title){

        this.text = document.querySelector(title)
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
        }

        str(x = 0) {
            const bool = false
            
            this.text.innerHTML += this.fullText[x]
            x++
            
            if (x < this.fullText.length) {
                setTimeout(() => {
                    this.str(x)
                },200);
            
            } else if( this.text.innerHTML.length == this.fullText.length ){
                this.bool()
                
            } 
            
            
            

                
        }
            
        bool(x){
            if (this.text.innerHTML.length == this.fullText.length){
                this.text.innerHTML = this.fullText[x]
                x--
                setTimeout(() => {
                    
                }, 200);
            } else if ( x == 0) {
                this.str()
                
            }
        }
}



const text = new Text('.sunrise')



