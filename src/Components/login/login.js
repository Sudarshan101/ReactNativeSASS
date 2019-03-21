
import React, {Component} from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Body, Right, Button, Icon, Title } from 'native-base';
import styles from "./login.scss";
export default class Login extends Component {
    render() {
        return (
          <Container>
           <Header>
              <Left>
                <Button transparent>
                   <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <Card>
                <CardItem style={styles.green}>
                  <Body>
                    <Text style={styles.whiteblack}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={styles.black}>
                  <Body>
                    <Text style={styles.whitetext}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={styles.white}>
                  <Body>
                    <Text style={styles.blacktext}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={styles.Red}>
                  <Body>
                    <Text style={styles.whitetext}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        );
      }
}