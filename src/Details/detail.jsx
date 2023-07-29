import "./detail.scss"
// images
import Roboicon from "../Details/Detailimages/roboicon.png"
import Humanicon from "../Details/Detailimages/humanicon.png"
import map from "../Details/Detailimages/map.png"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import milanpic1 from "../Details/Detailimages/milanpic1.png"
import milanpic2 from "../Details/Detailimages/milanpic2.png"
import milanpic3 from "../Details/Detailimages/milanpic3.png"
import milanpic4 from "../Details/Detailimages/milanpic4.png"
import milanpic5 from "../Details/Detailimages/milanpic5.png"
import milanpic6 from "../Details/Detailimages/milanpic6.png"
import milanpic7 from "../Details/Detailimages/milanpic7.png"
import milanpic8 from "../Details/Detailimages/milanpic8.png"
import milanpic9 from "../Details/Detailimages/milanpic9.png"

import Arrowimg from "../Details/Detailimages/Arrowimg.png"
import { Agency } from "../data/agency";
import Reyting from "./reytingchart";
import telegram from "../Details/Detailimages/telegram.png"
import instagram from "../Details/Detailimages/instagram.png"

const Details = () => {
    const [open, setOpen] = useState(false)

    const OpenModal = () => {
        setOpen(!open)
    }
    console.log(open);

    return (
        <React.Fragment>
            <div className="detail-container">

                <div className="detail-container__page1">

                    <div className="page1__navbar1">

                        <div className="navbar1init1">
                            <img className="navbar1init1__roboicon" src={Roboicon} alt="Roboicon" />

                            <p className="navbar1init1__educationP">Education</p>
                        </div>

                        <div className="navbar1init2">
                            <img className="navbar1init2__humanicon" src={Humanicon} alt="Humanicon" />
                            <p className="navbar1init2__nameP">Nargiza</p>
                            <p className="navbar1init2__nameP2">Akxmedova</p>
                        </div>

                    </div>

                    <div className="page1-lastcontainer">
                        <div className="univerMilan">
                            <p className="univerMilan__p">
                                University of Milan
                            </p>
                        </div>
                        <div className="podat-Button">
                            <button className="podat-Button__btn">
                                Подать
                            </button>
                        </div>
                    </div>
                </div>

                <div className="detail-container__navbar2">
                    <a className="Описание" href="#information">Описание</a>
                    <a className="Локация" href="#mapimg">Локация</a>
                    <a className="Поступление" href="#Процесс">Поступление</a>
                    <a className="Галерея" href="#mySwiper">Галерея</a>
                </div>
                <div className="detail-container__page2">
                    <div className="page2__container1">
                        <div className="tablevsrechart">
                            <div className="table">
                                <table className="tableinit1">
                                    <div className="table__Рейтинг">Рейтинг</div>
                                    <div className="table__Страна">Страна</div>
                                    <div className="table__Город">Город</div>
                                    <div className="table__Бакалавриат">Бакалавриат</div>
                                    <div className="table__Магистратура">Магистратура</div>
                                    <div className="table__Цена">Цена прожив -ния</div>
                                </table>
                                <div className="tableinit2">
                                    <div className="table__235">235</div>
                                    <div className="table__Италия">Италия</div>
                                    <div className="table__Милан">Милан</div>
                                    <div className="table__год">$2,875/год</div>
                                    <div className="table__год">$2,875/год</div>
                                    <div className="table__год2">$2,875/год</div>
                                </div>
                            </div>
                            <img id="mapimg" className="mapimg" src={map} alt="" />
                            {/*  */}
                        </div>
                        <div id="information" className="information">
                            <p className="information__p1">Миланский университет или University of Milan (UNIMI) -</p>
                            <p className="information__p2">государственное высшее учебное заведение в Италии. Начало академической деятельности UNIMI было положено в 1924 году. Главное здание университета расположено в Милано на территории кампуса городского типа.
                            </p>

                            <div className="information1__modal">
                                <button className="modalbtn" onClick={OpenModal}><img className="Arrowimg" src={Arrowimg} alt="" /></button>
                                <div classNamemodal className={open === false ? 'modal' : "modal modal_open"}>
                                    Рейтинг университета. University of Milan считается одним из самых престижных учебных заведений Италии и входит в пятёрку лучших вузов страны. Университет входит в 5% лучших высших учебных заведений мира, занимая 223 позицию. Сильными направлениями университета являются: «Искусство и Гуманитарные науки», «Инженерное дело и технологии», «Науки о жизни и медицина», «Естественные науки», «Социальные науки и менеджмент», «Математика», «Экономика и бизнес». Учебное заведение признаётся одним из самых лучших вузов по качеству образования и входит в топ 200 в мировом рейтинге по данному критерию. Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.
                                    Миланский университет считается одним из наиболее уважаемых учебных заведений среди работодателей в Италии и по всему миру.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="page2__container2">
                        <Reyting />
                        <div className="fakulteti" >
                            <p className="fakulteti__p">Факультеты</p>
                            <li className="fakulteti__li"> Факультет Науки</li>
                            <li className="fakulteti__li"> Факультет Информационных Технологий</li>
                            <li className="fakulteti__li"> Факультет Науки</li>
                            <li className="fakulteti__li"> Факультет Информационных Технологий</li>
                            <li className="fakulteti__li">Факультет Науки</li>
                            <li className="fakulteti__li" >Факультет Информационных Технологий</li>
                        </div>
                    </div>
                    <div className="page2__container3">
                        <p id="Процесс" className="Процесс">Процесс поступления</p>
                        <p className="Полное">
                            Полное курирование поступления — от 789 USD
                            Поступление в университет – важный и ответственный шаг в жизни каждого. Позвольте профессионалам быть рядом на каждом этапе поступления.
                        </p>
                        <p className="Специалисты">Специалисты образовательного агентства Education:</p>
                    </div>

                    {Agency.map((ketmon) => {
                        return (
                            <p className="agency">
                                <li className="agency__li">
                                    {ketmon.text}
                                </li>
                            </p>
                        )
                    })}

                    <div className="dokumenti">
                        <button className="dokumenti__btn">Подать документы</button>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        id="mySwiper"
                    >
                        <SwiperSlide className='swiperslide1'>
                            <div className="swiper-container">
                                <img className='slideimages' src={milanpic1} alt="" />
                                <img className='slideimages' src={milanpic2} alt="" />
                                <img className='slideimages' src={milanpic3} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='swiperslide2'>
                            <div className="swiper-container">
                                <img className='slideimages' src={milanpic4} alt="" />
                                <img className='slideimages' src={milanpic5} alt="" />
                                <img className='slideimages' src={milanpic6} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='swiperslide3'>
                            <div className="swiper-container">
                                <img className='slideimages' src={milanpic7} alt="" />
                                <img className='slideimages' src={milanpic8} alt="" />
                                <img className='slideimages' src={milanpic9} alt="" />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <div className="lastfooter">
                        {/*  */}
                        <div className="lastfooterinit1">
                            <div className="education">
                                <p className="education__p">Education Getaway</p>
                            </div>
                            <div className="address">
                                <p className="address__p">Наш адрес:</p>
                                <h4 className="address__h4">  Muqumiy ko'chasi, 54a uy, Toshkent, Uzbekistan</h4>
                            </div>
                            <div className="pochta">
                                <p className="pochta__p">
                                    Почта для связи:</p>
                                <h4 className="pochta__h4">Education_gateway@gmail.com</h4>
                            </div>
                            <div className="number">
                                <p className="number__p">Номер для связи:</p>
                                <h4 className="number__h4"> +998 55 503 1010</h4>
                            </div>
                            <div className="worktime">
                                <p className="worktime__p">Часы работы:</p>
                                <h4 className="worktime__h4">   c понедельника по субботу c 9:00 до 18:00 </h4>
                            </div>
                        </div>
                        {/*  */}
                        <div className="lastfooterinit2">
                            <p className="onas">
                                О нас
                            </p>
                            <div className="eduget">
                                <h4>
                                    Education Geteway - Ита́лия (итал.  Italia ), официальное название — Италья́нская Респу́блика (итал. Repubblica Italiana [respublika Italiana]) — государство в Южной Европе, в центре Средиземноморья. Входит в Евросоюз и НАТО c момента их создания, является третьей по величине экономикой еврозоны.
                                </h4>
                            </div>

                            <div className="granits">
                                <h4>
                                    Гpaничитc Францией на северо-западе (протяжённость границы — 488 км), Швейцарией (740 км) и Австрией (430 км) — на севере, Словенией — на северо-востоке (232 км).
                                </h4>
                            </div>
                            <div className="ending">© 2021 All rights reserved</div>
                        </div>
                        <div className="lastfooterinit3">
                            <p className="novosti">Еженедельные новости
                            </p>
                            <div className="potpishites">
                                Подпишитесь на еженедельную рассылку чтобы быть в курсе отличных акций
                            </div>
                            <div className="emailbtn">
                                <input type="email" placeholder=" Ваш e-mail адрес" />
                            </div>
                            <button className="potpisatsiyabtn">
                                <p>Подписаться</p>
                            </button>
                            <p className="politika">Политика конфедициальности</p>
                            <div className="footericons">
                                <img className="telegramicon" src={telegram} alt="" />
                                <img className="instagramicon" src={instagram} alt="" />
                                <img className="telegramicon" src={telegram} alt="" />
                                <img className="instagramicon" src={instagram} alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment >
    );
}

export default Details;

