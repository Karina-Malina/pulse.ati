import React from 'react';
import './BodyFirm.css';
import TableString from './TableString';

const BodyFirm = () => {
    return (
        <div className="firm-page">
            <div className="firm-head">
                <div className="search-firm">
                    <div className="count-firm">Найдено 128 фирм</div>
                    <input placeholder="Поиск по коду АТИ" className="input-search"></input>
                </div>
                <div>
                    <button className="table-button">Скачать таблицу</button>
                </div>
            </div>
            <div>
                <div className="grey-string">
                    <div className="choose-all">Выбрать все</div>
                    <div>Код АТИ</div>
                    <div>Отзыв</div>
                    <div>Все отзывы</div>
                    <div>Статус</div>
                    <div></div>
                </div>
                <TableString />
            </div>
        </div>
    );
}

export default BodyFirm;