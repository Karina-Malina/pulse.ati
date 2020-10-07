import React from 'react';
import './bodyTags.css';
import positive from './Image/positive.png';
import negative from './Image/negative.png';
import vopros from './Image/vopros.png';
import predl from './Image/predl.png';

const BodyTags = () => {
    return (
        <div className="common-column">
            <div className="each-column"></div>
            <div className="each-column">
                <div className="head-block">
                    <img src={positive} className="logo-block"></img>
                    <h4>Позитив</h4>
                </div>
                <div align="justify">
                пользоваться
отлично
удобно
надежно
быстро
молодец
нравиться
порекомендовать
ати
знакомый
площадка
сайт
отличный
находить
перевозчик
приемлемый
ставка
проверять
ресурс
альтернатива
рулить
сервис
помощь
грузоперевозчик
грузоперевозка
удобный
рекомендовать
поиск
груз                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={negative} className="logo-block"></img>
                    <h4>Негатив</h4>
                </div>
                <div align="justify">
                правило
ати
юрист
дорого
зависать
становиться
мошенник
руководство
портал
никак
бороться
система
балл
дорабатывать
потерять
привлекательность
предложение
ставка
сайт
вывод
низкий
гарантия
защита
право
логист
снижать
посреднический
фирма
сбивать
перевозчик                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={predl} className="logo-block"></img>
                    <h4>Предложения</h4>
                </div>
                <div align="justify">
                приложение
возможность
поиск
груз
становиться
платный
дорогой
стремиться
выбор
загрузка
фирма
обманывать
ати
находить
цена
услуга
платить
видный
тариф
дока
недостаток
простой
тяжело
разбираться
регистрироваться
программа
заявка
хватать
супер
больший                </div>
            </div>
            <div className="each-column">
                <div className="head-block">
                    <img src={vopros} className="logo-block"></img>
                    <h4>Вопросы</h4>
                </div>
                <div align="justify">
                удобно рекомендовать отлично сервис быстро программа партнер данный вариант заявка понятный система поиск супер перевозчик нравится грузоперевозка сайт площадка аналог груз найти груз пользоваться рекомендовать приложение просотй ати сегодняшний довольный искать 
                </div>
            </div>
            <div className="each-column"></div>
        </div>
    );
}

export default BodyTags;