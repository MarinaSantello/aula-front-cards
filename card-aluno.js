class card extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        this.name = 'Aluno anônimo';
        this.status = 'Indefinido';
        this.bgcolor = 'tomato'
        this.turma = 'Sem turma';
        this.icone = 'Sem foto';
    }

    static get observedAttributes() {
        return ['name', 'status', 'turma', 'icone'];
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        this[nameAttr] = newValue;

        // if(nameAttr == 'name')
        //     this.name = newValue;
        
        // else if (nameAttr == 'bgColor')
        //     this.bgColor = newValue;
    }

    connectedCallback() {
        this.shadow.appendChild(this.component());
        this.shadow.appendChild(this.styles());
    }

    styles() {
        const style = document.createElement('style');

        console.log(this.status)
        
        switch (this.status) {
            case 'aprovado':
                this.bgcolor = '#2a9d8f';

            case 'reprovado':
                this.bgcolor = '#9a031e'
        }

        style.textContent = `
            .card {
                width: 200px;
                height: 200px;
                background-color: ${this.bgcolor};
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
            }

            .card__nome {
                color: #fff;
                font-size: 1.5rem;
            }

            .card__img {
                width: 60%;
                height: 100%;
                background-image: url(${this.icone});
                background-size: cover;
                background-repeat: no-repeat;
            }

            .card__turma {
                color: #fff;
                font-size: 1.3rem;
            }
        `
        
        return style;
    }

    component() {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="card__nome">${this.name}</div>
            <div class="card__img"></div>
            <div class="card__turma">${this.turma}</div>
        `

        return card;
    }
}

customElements.define('card-aluno', card);