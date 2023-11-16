const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const createSorcere = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 14,
        defense: 3
    }
}

const createLitteMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Litte Monster',
        life: 40,
        maxLife: 40,
        attack: 4,
        defense: 4
    }
}

const createBigmonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}

const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,

    start(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;

        this.fighter1El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter1, this.fighter2);
        })

        this.fighter2El.querySelector('.attackButton').addEventListener('click', () => {
            this.doAttack(this.fighter2, this.fighter1);
        })

        this.update();
    },

    doAttack(attacking, attacked) {

        if(attacked.life <= 0 || attacking.life <= 0) {
            log.addMesage('Game Over');
            return;
        }

        const attackFactor = (Math.random() * 2).toFixed(2);
        const defenseFactor = (Math.random() * 2).toFixed(2);

        const actualAttack = attackFactor * attacking.attack;
        const actualDefense = defenseFactor * attacked.defense;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMesage(`${attacking.name} Atacou ${attacked.name} com ${actualAttack} de dano`)
        } else {
            log.addMesage(`${attacked.name} Defendeu o ataque de ${attacking.name}`);
        }

        this.update();
    },

    update() {
        //FIGHTER 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - (${this.fighter1.life.toFixed(1)})`;
        f1Pct = (this.fighter1.life * 100) / this.fighter1.maxLife;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1Pct}%`;

        //FIGHTER 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - (${this.fighter2.life.toFixed(1)})`;
        f2Pct = (this.fighter2.life * 100) / this.fighter2.maxLife;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2Pct}%`;
    }
}

const log = {
    list: [],
    addMesage(msg) {
        this.list.push(msg);
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = '';
        for(let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}

