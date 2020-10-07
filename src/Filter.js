import React, { useState } from 'react';
import plus from './Image/Plus.svg';
import vot from './Image/vot.png';
import BodyTags from './BodyTags';
import BodyFirm from './BodyFirm';
import './App.css';

const Filter = () => {
    const [project, setProject] = useState(false);
    const [tag, setTag] = useState(false);
    const [otzyv, setOtzyv] = useState(false);
    const [status, setStatus] = useState(false);
    const [firm, setFirm] = useState(0);

    const projectClassName = project ? "dropdown-content-visible" : "dropdown-content";
    const tagClassName = tag ? "dropdown-content-visible" : "dropdown-content";
    const otzyvClassName = otzyv ? "dropdown-content-visible" : "dropdown-content";
    const statusClassName = status ? "dropdown-content-visible" : "dropdown-content";

    console.log("ghvgvg", firm);
    return (
        <div>
            <div className="Filter">
                <p>Показать</p>
                <select className="type-filter" onChange={e => {setFirm(e.target.value)}}>
                    <option value="0">Не выбрано</option>
                    <option value="1">Фирмы</option>
                    <option value="2">Отзывы</option>
                </select>
                <div class="dropdown">
                    <p>в проекте</p>
                    <button type="button" onClick={() => setProject(!project)} className="plus-img"><img src={plus} alt="plus" /></button>
                    <div className={projectClassName}>
                        <input placeholder="Поиск"></input>
                        <div>
                            <input type="checkbox" id="billing" name="project" />
                            <label for="billing">Биллинг</label>
                        </div>
                        <div>
                            <input type="checkbox" id="forum" name="project" />
                            <label for="forum">Форумы</label>
                        </div>
                        <div>
                            <input type="checkbox" id="pasport" name="project" />
                            <label for="pasport">Паспорт</label>
                        </div>
                        <div>
                            <input type="checkbox" id="cabinet" name="project" />
                            <label for="cabinet">Кабинет</label>
                        </div>
                        <div>
                            <input type="checkbox" id="voditel" name="project" />
                            <label for="voditel">АТИ Водитель</label>
                        </div>
                        <div>
                            <input type="checkbox" id="search" name="project" />
                            <label for="search">Поиск Грузов</label>
                        </div>
                        <div>
                            <input type="checkbox" id="carSearch" name="project" />
                            <label for="carSearch">Поиск Машин</label>
                        </div>
                        <div>
                            <input type="checkbox" id="trackmarket" name="project" />
                            <label for="trackmarket">Тракмаркет</label>
                        </div>
                        <div>
                            <input type="checkbox" id="message" name="project" />
                            <label for="message">АТИ Мессенджер</label>
                        </div>
                        <div>
                            <input type="checkbox" id="android" name="project" />
                            <label for="android">Поиск Андроид</label>
                        </div>
                        <div className="dpdButton">
                            <button className="cancelButton">Сбросить</button>
                            <button className="enterButton">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <p>тегом</p>
                    <button type="button" onClick={() => setTag(!tag)} className="plus-img"><img src={plus} alt="plus" /></button>
                    <div className={tagClassName}>
                        <input placeholder="Поиск"></input>
                        <div>
                            <input type="checkbox" id="cargo" name="tag" />
                            <label for="cargo">найти груз</label>
                        </div>
                        <div>
                            <input type="checkbox" id="car" name="tag" />
                            <label for="car">найти машину</label>
                        </div>
                        <div>
                            <input type="checkbox" id="transport" name="tag" />
                            <label for="transport">свободный транспорт</label>
                        </div>
                        <div>
                            <input type="checkbox" id="sentCargo" name="tag" />
                            <label for="sentCargo">отправить груз</label>
                        </div>
                        <div>
                            <input type="checkbox" id="test" name="tag" />
                            <label for="test">Тестирование</label>
                        </div>
                        <div className="dpdButton">
                            <button className="cancelButton">Сбросить</button>
                            <button className="enterButton">Применить</button>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <p>типом отзыва</p>
                    <button type="button" onClick={() => setOtzyv(!otzyv)} className="plus-img"><img src={plus} alt="plus" /></button>
                    <div className={otzyvClassName}>
                        <div>
                            <input type="checkbox" id="negat" name="otzyv" />
                            <label for="negat">Негатив</label>
                        </div>
                        <div>
                            <input type="checkbox" id="posit" name="tag" />
                            <label for="posit">Позитив</label>
                        </div>
                        <div>
                            <input type="checkbox" id="vopros" name="tag" />
                            <label for="vopros">Вопрос</label>
                        </div>
                        <div>
                            <input type="checkbox" id="predl" name="tag" />
                            <label for="predl">Предложение</label>
                        </div>
                    </div>
                </div>

                <div class="dropdown">
                    <p>статусом фирмы</p>
                    <button type="button" onClick={() => setStatus(!status)} className="plus-img"><img src={plus} alt="plus" /></button>
                    <div className={statusClassName}>
                        <div>
                            <input type="checkbox" id="free" name="status" />
                            <label for="free">Свободен</label>
                        </div>
                        <div>
                            <input type="checkbox" id="carantin" name="status" />
                            <label for="carantin">Карантин</label>
                        </div>
                        <div>
                            <input type="checkbox" id="notCall" name="status" />
                            <label for="notCall">Не звонить</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                (firm == "0") && <BodyTags />
            }
            {
                (firm == "1") && <BodyFirm />
            }
            {
                (firm == "2") && <img src={vot} className="otzyv-img"/>
            }
        </div>
    );
}

export default Filter;