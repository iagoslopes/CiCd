const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); // Certifique-se de que o caminho esteja correto

chai.use(chaiHttp);
chai.should();

describe('Testes da Aplicação', () => {
  it('Deve retornar uma mensagem "Olá Mundo!"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.equal('Olá Mundo!');
        done();
      });
  });
});
