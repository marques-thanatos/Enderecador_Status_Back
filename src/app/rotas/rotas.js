const connection = require('../../config/db'); // import connection from '../../config/db';
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/robos', (req, res) => {
        return connection.query('SELECT Evento, HorarioInicial, HorarioFinal FROM robos', (err, results) => {
          if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).send('Internal Server Error');
            return;
          }
          res.set('Access-Control-Allow-Origin', '*');
          res.json(results);
          return;
        });
      
    });
      
    app.get('/ultimoRegistroRobos', (req, res) => {
        return connection.query('SELECT max(id) as Id FROM robos', (err, results) => {
          if (err) {
            console.error('Error executing SQL query:', err);
            res.status(500).send('Internal Server Error');
            return;
          }
          res.set('Access-Control-Allow-Origin', '*');
          res.json(results);
      
          let ultimo_registro_tb = results[0].Id.toString();
          fs.writeFile('D:/Documents/Programming/enderecador_servico_de_mensagem/public/ultimo_registro.txt', ultimo_registro_tb, (err) => {
            if (err) throw err;
            else{
                console.log("O arquivo foi atualizado com o dado recebido.")
            }
          }) 
          return;
        });
      
    });

    app.get('/react', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  
  };