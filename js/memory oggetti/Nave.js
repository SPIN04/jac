class Nave {
    constructor(lunghezza = 1) {
        this.lunghezza = lunghezza;
        this.disposizione = 'x';
        this.colpi_subiti = 0;
        this.affondata = false;
        this.posizione = [0, 0];
        this.celle = this.ottieni_Celle();
    }

    ottieni_Celle() {
        let celle_tmp = [];
        if (this.disposizione === 'x') {
            for (let i = this.posizione[1]; i < this.posizione[1] + this.lunghezza; i++) {
                celle_tmp.push([this.posizione[0], i]);
            }
        }
        if (this.disposizione === 'y') {
            for (let i = this.posizione[0]; i < this.posizione[0] + this.lunghezza; i++) {
                celle_tmp.push([i, this.posizione[1]]);
            }
        }
        return celle_tmp;
    }

    get_info() {
        console.log(this.celle);
    }

    ruota() {
        this.disposizione = (this.disposizione === 'x') ? 'y' : 'x';
        this.celle = this.ottieni_Celle();
    }

    colpisci(y, x) {
        const [py, px] = this.posizione;

        if (
            (this.disposizione === 'x' && x >= px && x < px + this.lunghezza) ||
            (this.disposizione === 'y' && y >= py && y < py + this.lunghezza)
        ) {
            this.colpi_subiti++;
            this.affondata = this.colpi_subiti >= this.lunghezza;
        }
    }
    set_celle(){
        celle_tmpx=this.ottieni_Celle()
        this.celle=celle_tmpx
    }
    deploy(y, x) {
        this.posizione[0] = y;
        this.posizione[1] = x;
        this.celle = this.ottieni_Celle();
    }
}

let nave = new Nave(5);

nave.get_info();
