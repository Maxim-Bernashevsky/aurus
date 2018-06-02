import React, { Component } from 'react';
import './Footer.styl';

class Footer extends Component {
  dateStart = 2012;

  render() {
    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();
    const showDate = this.dateStart === yearNow ? yearNow : `${this.dateStart} - ${yearNow}`;

    return (
        <footer>
          <ul>
            <li>AURUS &copy; {showDate}</li>
            <li>Клуб AURUS</li>
            <li>Сервис</li>
            <li>Контакты</li>
            <li>RU</li>
          </ul>
        </footer>
    );
  }
}

export default Footer;
