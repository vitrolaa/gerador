var frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A persistência realiza o impossível.",
    "Todo progresso acontece fora da zona de conforto.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é como andar de bicicleta: para manter o equilíbrio, você precisa se manter em movimento.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "Acredite em você mesmo e tudo será possível.",
    "Quanto maior o obstáculo, maior a glória em superá-lo.",
    "Grandes realizações nascem de grandes sacrifícios.",
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
    "O importante não é vencer todos os dias, mas lutar sempre.",
    "O caminho para o sucesso e o caminho para o fracasso são quase os mesmos.",
    "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
    "A chave do sucesso é começar antes de se sentir pronto.",
    "O segredo do sucesso é a constância do propósito.",
    "O verdadeiro sucesso é encontrar o seu trabalho naquilo que você ama.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Sucesso é a soma de pequenos esforços, repetidos dia após dia.",
    "Para ter sucesso, é necessário amar de verdade o que se faz.",
    "Aquele que é mestre em todas as coisas, pode não ser sábio em nenhuma.",
    "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
    "Aquele que não tem confiança nos outros, não lhes pode ganhar a confiança.",
    "Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.",
    "A motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A persistência realiza o impossível.",
    "Todo progresso acontece fora da zona de conforto.",
    "Seja a mudança que você deseja ver no mundo.",
    "A vida é como andar de bicicleta: para manter o equilíbrio, você precisa se manter em movimento.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "Acredite em você mesmo e tudo será possível.",
    "Quanto maior o obstáculo, maior a glória em superá-lo.",
    "Grandes realizações nascem de grandes sacrifícios.",
    "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo.",
    "O importante não é vencer todos os dias, mas lutar sempre.",
    "O caminho para o sucesso e o caminho para o fracasso são quase os mesmos.",
    "O sucesso é a capacidade de ir de fracasso em fracasso sem perder o entusiasmo.",
    "A chave do sucesso é começar antes de se sentir pronto.",
    "O segredo do sucesso é a constância do propósito.",
    "O verdadeiro sucesso é encontrar o seu trabalho naquilo que você ama.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Sucesso é a soma de pequenos esforços, repetidos dia após dia.",
    "Para ter sucesso, é necessário amar de verdade o que se faz.",
    "Aquele que é mestre em todas as coisas, pode não ser sábio em nenhuma.",
    "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Se você não está disposto a arriscar, esteja disposto a uma vida comum.",
];

function gerarMensagem() {
    var indice = Math.floor(Math.random() * frases.length);
    var frase = frases[indice];
    document.getElementById('mensagem').textContent = frase;
}

function limparTexto() {
    document.getElementById('mensagem').textContent = '_____________________'
}