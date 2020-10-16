import React from 'react';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import Test from '../images/test_image_1.jpg';
import Test2 from '../images/test_image_2.jpg';
import Test3 from '../images/test_image_3.jpg';
import Test4 from '../images/test_image_4.jpg';
import ScrollArrow from '../components/scrollArrow.js';

export default function Blog() {
    return (
        <>
            <Navbar />
            <Navigation />
            <ScrollArrow />
            <div className="row mx-auto mt-3 w-75">
                <div className="col-8">
                    <a className="article" href="/blog/how-to-win-lane-as-hachiman">
                        <div className="card articleBoxBig" style={{ backgroundImage: `url(${Test})` }}>
                            <div className="card-body d-flex align-items-end">
                                <h2 className="card-title mr-auto articleTitle">How to Win Lane as Hachiman</h2>
                                <div className="d-flex ml-auto">
                                    <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                                    <h3>8 Minute Read</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-4">
                    <a className="article" href="/blog/how-to-win-lane-as-hachiman">
                        <div className="card articleBoxSmall" style={{ backgroundImage: `url(${Test2})` }}>
                            <div className="card-body d-flex align-items-start flex-column">
                                <div className="d-flex ml-auto">
                                    <FontAwesomeIcon className="smallReadIcon" icon={faBookReader} />
                                    <h5 className="smallReadText">8 Minute Read</h5>
                                </div>
                                <h4 className="card-title articleTitle">How to Win Lane as Hachiman</h4>
                            </div>
                        </div>
                    </a>
                    <a className="article" href="/blog/article-title">
                        <div className="card articleBoxSmall" style={{ backgroundImage: `url(${Test3})` }}>
                            <div className="card-body d-flex align-items-start flex-column">
                                <div className="d-flex ml-auto">
                                    <FontAwesomeIcon className="smallReadIcon" icon={faBookReader} />
                                    <h5 className="smallReadText">8 Minute Read</h5>
                                </div>
                                <h4 className="card-title articleTitle">Article Title</h4>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="d-flex flex-wrap divWhite">
                <div className="row mx-auto">
                    <a className="article" href="/blog/the-best-team-composition-to-pick-in-ranked">
                        <div className="card articleBoxLong" style={{ backgroundImage: `url(${Test4})` }}>
                            <div className="card-body d-flex align-items-end flex-column">
                                <h2 className="card-title mr-auto articleTitleLong">The Best Team Composition To Pick in Ranked</h2>
                                <div className="d-flex align-items-start mr-auto">
                                    <div className="d-flex mr-5 ">
                                        <FontAwesomeIcon className="readIcon" icon={faClock} />
                                        <h3>September 30, 2020</h3>
                                    </div>
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                                        <h3>6 Minute Read</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="row mx-auto">
                    <a className="article" href="/blog/when-to-pick-ullr-in-this-meta">
                        <div className="card articleBoxLong" style={{ backgroundImage: `url(${Test3})` }}>
                            <div className="card-body d-flex align-items-end flex-column">
                                <h2 className="card-title mr-auto articleTitleLong">When to Pick Ullr in this Meta</h2>
                                <div className="d-flex align-items-start mr-auto">
                                    <div className="d-flex mr-5 ">
                                        <FontAwesomeIcon className="readIcon" icon={faClock} />
                                        <h3>September 24, 2020</h3>
                                    </div>
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                                        <h3>5 Minute Read</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="row mx-auto">
                    <a className="article" href="/blog/how-to-snowball-the-early-game-as-thanatos">
                        <div className="card articleBoxLong" style={{ backgroundImage: `url(${Test2})` }}>
                            <div className="card-body d-flex align-items-end flex-column">
                                <h2 className="card-title mr-auto articleTitleLong">How to Snowball the Early Game as Thanatos</h2>
                                <div className="d-flex align-items-start mr-auto">
                                    <div className="d-flex mr-5 ">
                                        <FontAwesomeIcon className="readIcon" icon={faClock} />
                                        <h3>September 20, 2020</h3>
                                    </div>
                                    <div className="d-flex">
                                        <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                                        <h3>8 Minute Read</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}