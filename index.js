/*  
Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, 
para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"

informações: name, lvl, HP, sex, maxHP

saída esperada:
"DRAGONITE Cadastrado com sucesso"

próximos passos: criar sistema de id ondde diferencia pokemons repetidos, e armazenamento em listas
*/

class Pokemon {
  name;
  lvl;
  HP;
  sex;
  maxHP;

  constructor(name, lvl, sex, maxHP, HP) {
    this.name = name;
    this.lvl = lvl;
    this.sex = sex;
    this.maxHP = maxHP;
    this.HP = HP;
  }

  register() {
    console.log(`${this.name} Cadastrado com sucesso`);
  }

}

poochvena = new Pokemon( 'Poochvena', 3, 'masculino', 13, 13);
poochvena.register()

zigzagoon = new Pokemon( 'Zigzagoon', 2, 13, 'feminino', 13, 13);
zigzagoon.register()

dragonite = new Pokemon( 'Dragonite', 5, 'feminino', 24, 24);
dragonite.register()

wurmple = new Pokemon( 'wurmple', 2, 'masculino', 14 ,7);
wurmple.register()

