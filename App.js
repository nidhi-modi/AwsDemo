/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import axios from 'axios';
Amplify.configure(config);
//import { express } from 'express';
//const application = express()
/*let port = 3000;
let server = require('http').createServer(application)
let io = require ('socket.io')(server)*/
//const merchant_model = require('./merchant_model')

/*module.exports = startServer = () => {
  io.on("connection", () => {
      console.log("someone has connected");
  })

  server.listen(port, () => {console.log("server is running at " + port)})
}*/


export default class App extends React.Component {
  state = {
    username: '',
    site: '',
    id: '',
    books: []
  };
  componentDidMount() {

  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };

  addUser() {

    app.get('/', (req, res) => {
      db.select('*')
          .from('user_registration')
          .then((data) => {
              console.log(data);
              res.json(data);
          })
          .catch((err) => {
              console.log(err);
          });
  });
  
  const port = 5000;
  
  app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));

    /*application.use(express.json())
    application.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
      next();
    });

    application.post('/user_registration', (req, res) => {
      merchant_model.createUser({
        user_id: 11,
        username: 'Lisa',
        site: 'Boston',
    }).then(data => {
      console.log('Data entered!');
      res.send({
            status: 'Data successfully sent through api!',
            user_id: 11,
            username: 'Lisa',
            site: 'Boston',
      })
    }).catch(function(error) {
        console.log('There has been a problem with your post operation: ' + error.message);
          throw error;
        });
    })*/


    /*var conString = "postgres://postgres:DZsfx3UCIoBtx40cFghQ@localhost:5432/postgres";
    var client = new pg.Client(conString);
    client.connect();
    client.query("INSERT INTO user_registration(userid, username, site) values(11,'Ted', 'Oxford')");

    var query = client.query("SELECT * FROM user_registration");
    //fired after last row is emitted

    query.on('row', function (row) {
      console.log(row);
    });

    query.on('end', function () {
      client.end();
    });*/



  };

  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={this.state.id.toString()}
          onChangeText={val => this.onChangeText('id', val)}
          placeholder="ID"
        />
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={val => this.onChangeText('username', val)}
          placeholder="USERNAME"
        />
        <TextInput
          style={styles.input}
          value={this.state.site}
          onChangeText={val => this.onChangeText('site', val)}
          placeholder="SITE"
        />
        <Button onPress={this.addUser} title="Add to database" color="#eeaa55" />

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    marginVertical: 10
  },
  book: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10
  },
  title: { fontSize: 16 },
  author: { color: 'rgba(0, 0, 0, .5)' }
});