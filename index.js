const calcularFaltasTotais = (faltas) => {
  if (faltas < 0 || faltas > 20) {
    throw new Error("Valor inválido");
  } else {
    return faltas * 3;
  }
};

const calcularMedia = (nota1, nota2) => {
  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    throw new Error("Nota inválida");
  } else {
    return (nota1 + nota2) / 2;
  }
};

const avaliarAluno = (media, faltasTotais) => {
  if (media >= 7.0 && faltasTotais <= 15) {
    return "Aprovado";
  } else if (media >= 3.0 && media < 7.0 && faltasTotais <= 15) {
    return "Aguardando a final";
  } else if (media < 3.0 && faltasTotais <= 15) {
    return "Reprovado por média";
  } else {
    return "Reprovado por faltas";
  }
};

module.exports = { calcularFaltasTotais, calcularMedia, avaliarAluno };
