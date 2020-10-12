import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import Test from '../images/test_image_1.jpg';
import Test2 from '../images/test_image_2.jpg';
import Test3 from '../images/test_image_3.jpg';
import Test4 from '../images/test_image_4.jpg';

export default function Blog() {
    // const { asPath } = useRouter()
    return (
        <>
            <Navbar />
            <Navigation />
            {/* <p>Hello, I'm the {asPath} page</p> */}

            <div className="row mx-auto mt-3 w-75">
                <div className="col-md-8">
                    <a className="article" href="/blog/how-to-win-lane">
                        <div className="card articleBoxBig" style={{ backgroundImage: `url(${Test})` }}>
                            <div className="card-body d-flex align-items-end">
                                <h3 className="card-title mr-auto articleTitle">How to Win Lane as Hachiman</h3>
                                <div className="d-flex ml-auto">
                                    <FontAwesomeIcon className="readIcon" icon={faBookReader} />
                                    <h3>8 Minute Read</h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-md-4">
                    <a className="article" href="/blog/how-to-spoon">
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
                    <a className="article" href="/blog/how-to-spoon">
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

            {/* <hr className="articleHr" /> */}
            <div className="d-flex divWhite">
                <div className="articleBoxLong mx-auto w-75">

                </div>
            </div>
        </>
    )
}