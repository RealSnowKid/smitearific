import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation'

export default function Gods() {
    return (
        <>
            <Navbar />
            <Navigation />
            <div className="card-deck mx-auto">
                <Link href="/gods/achilles">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/achilles.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Achilles</h5>
                            <p className="godTitle">Hero of the Trojan War</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/agni">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/agni.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Agni</h5>
                            <p className="godTitle">God of Fire</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/ah-muzen-cab">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/ah-muzen-cab.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Ah Muzen Cab</h5>
                            <p className="godTitle">God of Bees</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/ah-puch">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/ah-puch.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Ah Puch</h5>
                            <p className="godTitle">Horrific God of Decay</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/amaterasu">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/amaterasu.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Amaterasu</h5>
                            <p className="godTitle">The Shining Light</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/anhur">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/anhur.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Anhur</h5>
                            <p className="godTitle">Slayer of Enemies</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/anubis">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/anubis.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Anubis</h5>
                            <p className="godTitle">God of the Dead</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/ao-kuang">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/ao-kuang.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Ao Kuang</h5>
                            <p className="godTitle">Dragon King of the Eastern Seas</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/aphrodite">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/aphrodite.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Aphrodite</h5>
                            <p className="godTitle">Goddess of Beauty</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/apollo">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/apollo.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Apollo</h5>
                            <p className="godTitle">God of Music</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/arachne">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/arachne.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Arachne</h5>
                            <p className="godTitle">The Weaver</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/ares">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/ares.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Ares</h5>
                            <p className="godTitle">God of War</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/artemis">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/artemis.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Artemis</h5>
                            <p className="godTitle">Goddess of the Hunt</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/artio">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/artio.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Artio</h5>
                            <p className="godTitle">The Bear Goddess</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/athena">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/athena.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Athena</h5>
                            <p className="godTitle">Goddess of Wisdom</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/awilix">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/awilix.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Awilix</h5>
                            <p className="godTitle">Goddess of the Moon</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/baba-yaga">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/baba-yaga.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Baba Yaga</h5>
                            <p className="godTitle">With of the Woods</p>
                        </div>
                    </div>
                </Link>
                <Link href="/gods/bacchus">
                    <div className="card godCard">
                        <div className="godIcon">
                            <img src="https://web2.hirez.com/smite/god-icons/bacchus.jpg" />
                        </div>
                        <div className="card-body text-center">
                            <div className="d-flex">
                                <img className="type" src="https://i.imgur.com/vISTzOG.png" />
                                <img className="type" src="https://i.imgur.com/zlZGWRs.png" />
                            </div>
                            <h5 className="godName">Bacchus</h5>
                            <p className="godTitle">God of Wine</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}