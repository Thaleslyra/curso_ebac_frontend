const alunos = [{
  nome: 'João',
  nota: 7.3
}, {
  nome: 'Maria',
  nota: 5.3
}, {
  nome: 'Joana',
  nota: 7.8
}, {
  nome: 'Carlos',
  nota: 5.0
}, {
  nome: 'Vanessa',
  nota: 9.0
}, {
  nome: 'Junior',
  nota: 7.0
}];
const alunosAprovadosArray = [];
const alunosReprovadosArray = [];
function alunosAprovados() {
  alunos.forEach(element => {
    if (element.nota >= 6) alunosAprovadosArray.push(element);
  });
  return alunosAprovadosArray;
}
function alunosReprovados() {
  alunos.forEach(element => {
    if (element.nota < 6) alunosReprovadosArray.push(element);
  });
  return alunosReprovadosArray;
}
console.log('Alunos Aprovados');
console.log(alunosAprovados());
console.log('.....................................................');
console.log('Alunos Reprovados');
console.log(alunosReprovados());