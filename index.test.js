const { calcularFaltasTotais, calcularMedia, avaliarAluno } = require("./index");

describe("Testes da função calcularFaltasTotais()", () => {
  test("Deveria retornar 15 faltas totais para 5 faltas", () => {
    expect(calcularFaltasTotais(5)).toBe(15);
  });

  test("Deveria retornar 'Valor inválido' para -1 falta", () => {
    expect(() => calcularFaltasTotais(-1)).toThrow("Valor inválido");
  });

  test("Deveria retornar 'Valor inválido' para 21 faltas", () => {
    expect(() => calcularFaltasTotais(21)).toThrow("Valor inválido");
  });

  test("Deveria retornar 0 faltas totais para 0 faltas", () => {
    expect(calcularFaltasTotais(0)).toBe(0);
  });

  test("Deveria retornar 60 faltas totais para 20 faltas", () => {
    expect(calcularFaltasTotais(20)).toBe(60);
  });
});

describe("Testes da função calcularMedia()", () => {
  test("Deveria retornar 8.5 para notas 8.0 e 9.0", () => {
    expect(calcularMedia(8.0, 9.0)).toBe(8.5);
  });

  test("Deveria retornar 'Nota inválida' para nota maior que 10.0", () => {
    expect(() => calcularMedia(2.0, 11.0)).toThrow("Nota inválida");
  });

  test("Deveria retornar 'Nota inválida' para nota menor que 0.0", () => {
    expect(() => calcularMedia(-1, 10.0)).toThrow("Nota inválida");
  });

  test("Deveria retornar 1.0 para notas 2.0 e 0.0", () => {
    expect(calcularMedia(2.0, 0.0)).toBe(1.0);
  });

  test("Deveria retornar 7.0 para notas 7.0 e 7.0", () => {
    expect(calcularMedia(7.0, 7.0)).toBe(7.0);
  });
});

describe("Testes da função avaliarAluno()", () => {
  test("Deveria retornar 'Aprovado' para média 8.5 e faltas totais iguais a 15", () => {
    expect(avaliarAluno(8.5, 15)).toBe("Aprovado");
  });

  test("Deveria retornar 'Aguardando a final' para média 5.5 e faltas totais iguais a 6", () => {
    expect(avaliarAluno(5.5, 6)).toBe("Aguardando a final");
  });

  test("Deveria retornar 'Reprovado por faltas' para média 2.5 e faltas totais iguais a 18", () => {
    expect(avaliarAluno(2.5, 18)).toBe("Reprovado por faltas");
  });

  test("Deveria retornar 'Reprovado por média' para média 1.5 e faltas totais iguais a 6", () => {
    expect(avaliarAluno(1.5, 6)).toBe("Reprovado por média");
  });

  test("Deveria retornar 'Reprovado por faltas' para média 7.5 e faltas totais iguais a 21", () => {
    expect(avaliarAluno(7.5, 21)).toBe("Reprovado por faltas");
  });
});
