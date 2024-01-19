class Nave {
    constructor(lunghezza=1) {
        this.lunghezza = lunghezza;
        this.disposizione = 'x';
        this.colpi_subiti=0
        this.affondata=false
        this.posizione=[0,0]
    }

    get_info() {
        let to_print= [this.lunghezza];
        console.log(to_print)
    }
    ruota(){
        this.disposizione=(this.disposizione=='x')?'y':'x'
    }
    colpisci(y, x) {
        const [py, px] = this.posizione;
    
        if (
            (this.disposizione === 'x' && x > px && x <= px + this.lunghezza - 1) ||
            (this.disposizione === 'y' && y > py && y <= py + this.lunghezza - 1)
        ) {
            this.colpi_subiti++;
            this.affondata = this.colpi_subiti >= this.lunghezza;
        }
    }
    posiziona(y,x){
        this.posizione.push(y,x)
    }
}

let nave = new Nave(5);
nave.get_info()
