import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Navigation from '../components/Navigation'

export default function GeneralTierList() {
    return (
        <>
            <Navbar />
            <Navigation />
            <div className="d-flex w-75 mx-auto flex-column">
                <h4 className="jumpLinks">Jump to: <a href="#solo">Solo</a> • <a href="#jung">Jungle</a> • <a href="#mid">Mid</a> • <a href="#adc">Hunter</a> • <a href="#supp">Support</a></h4>
                <div className="container tierListDiv">
                    <div className="d-flex justify-content-center">
                        <h2 className="font-weight-bolder">SOLO LANE</h2>
                    </div>
                    <div className="d-flex justify-content-around tierLetters">
                        <h2>S</h2>
                        <h2>A</h2>
                        <h2>B</h2>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hades.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/nike.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/amaterasu.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/aphrodite.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cthulhu.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/guan-yu.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hel.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sun-wukong.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/xing-tian.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bakasura.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cerberus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cu-chulainn.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/erlang-shen.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/achilles.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/athena.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/chaac.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hercules.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/kuzenbo.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/mulan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sobek.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/baron-samedi.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/camazotz.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/odin.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/set.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/king-arthur.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/tyr.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/artio.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bellona.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/change.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/jormungandr.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/loki.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/osiris.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/terra.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/vamana.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/zhong-kui.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="container tierListDiv">
                    <div className="d-flex justify-content-center">
                        <h2 className="font-weight-bolder">JUNGLE</h2>
                    </div>
                    <div className="d-flex justify-content-around tierLetters">
                        <h2>S</h2>
                        <h2>A</h2>
                        <h2>B</h2>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/arachne.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/nike.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hun-batz.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/kali.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/mercury.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/nemesis.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/pele.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sun-wukong.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/tsukuyomi.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bakasura.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/erlang-shen.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/he-bo.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/thanatos.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ratatoskr.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ravana.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/thor.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cabrakan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/camazotz.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/odin.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/set.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ao-kuang.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/awilix.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bastet.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/fenrir.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/loki.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/da-ji.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ne-zha.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/serqet.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/susano.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="container tierListDiv">
                    <div className="d-flex justify-content-center">
                        <h2 className="font-weight-bolder">MID LANE</h2>
                    </div>
                    <div className="d-flex justify-content-around tierLetters">
                        <h2>S</h2>
                        <h2>A</h2>
                        <h2>B</h2>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hades.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/nu-wa.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/agni.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/anubis.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/aphrodite.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/discordia.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hel.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/kukulkan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/poseidon.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ra.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/he-bo.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hera.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/olorun.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/scylla.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/vulcan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/freya.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/merlin.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/neith.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/the-morrigan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/thoth.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ullr.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/baron-samedi.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/zeus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/janus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/persephone.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ah-puch.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/baba-yaga.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/change.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bellona.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/chronos.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/isis.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/nox.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/raijin.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="container tierListDiv">
                    <div className="d-flex justify-content-center">
                        <h2 className="font-weight-bolder">HUNTER</h2>
                    </div>
                    <div className="d-flex justify-content-around tierLetters">
                        <h2>S</h2>
                        <h2>A</h2>
                        <h2>B</h2>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cupid.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/artemis.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/izanami.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/skadi.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/olorun.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/rama.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/anhur.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/apollo.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cernunnos.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/freya.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hachiman.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hou-yi.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/jing-wei.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/medusa.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/neith.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ullr.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/chernobog.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/xbalanque.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/heimdallr.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ah-muzen-cab.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/chiron.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/chronos.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sol.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="container tierListDiv">
                    <div className="d-flex justify-content-center">
                        <h2 className="font-weight-bolder">SUPPORT</h2>
                    </div>
                    <div className="d-flex justify-content-around tierLetters">
                        <h2>S</h2>
                        <h2>A</h2>
                        <h2>B</h2>
                    </div>
                    <hr />
                    <div className="d-flex">
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ares.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/geb.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/guan-yu.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/khepri.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/xing-tian.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ymir.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cerberus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/ganesha.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/achilles.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/athena.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/hercules.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/kumbhakarna.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/kuzenbo.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sobek.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/yemoja.jpg"></img>
                        </div>
                        <div className="tierDiv">
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/bacchus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/cabrakan.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/sylvanus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/artio.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/fafnir.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/fenrir.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/horus.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/jormungandr.jpg"></img>
                            <img className="godIcon" src="https://web2.hirez.com/smite/god-icons/terra.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}