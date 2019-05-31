class Funcionario {
    constructor() {
        this._email = 'abc@abc.com';

        return new Proxy(this, {

            get: function (target, prop, receiver) {

                if (typeof (target[prop]) == typeof (Function)) {

                    return function(){
                        console.log(`a funcao ${prop} foi acessada`);
                        return Reflect.apply(target[prop], target, arguments);
                    }

                }
                
                console.log(`a propriedade ${prop} foi acessada`);
                return Reflect.get(target, prop, receiver);
            },

            set: function (target, prop, value, receiver) {
                console.log(`a propriedade ${prop} foi alterada`);
                return Reflect.set(target, prop, value, receiver);
            }

        });

    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    aleraOEmail(email) {
        this.email = email;
    }

}

module.exports = Funcionario;