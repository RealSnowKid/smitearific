import React from 'react';
import Navbar from '../../components/Navbar.js';
import NavigationEsports from '../../components/navigationEsports.js';
import ScrollArrow from '../../components/scrollArrow.js';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export default function GodBuild() {
    return (
        <>
            <Navbar />
            <NavigationEsports />
            <ScrollArrow />
            <div className="mx-auto godInfo">
                <div className="row">
                    <div className="godIcon">
                        <img src="https://web2.hirez.com/smite/god-icons/achilles.jpg" />
                    </div>
                    <div className="godNfoBuilds w-75">
                        <div className="d-flex align-items-center">
                            <h1 className="font-weight-bold">ACHILLES</h1>
                            <h2 className="ml-5">Best Pro Build</h2>
                        </div>
                        <div className="d-flex justify-content-between mt-4 w-75">
                            <OverlayTrigger placement="bottom" overlay={
                                <Tooltip id="ability-passive">
                                    <h3>Gift of the Gods</h3>
                                    <p>Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.</p>
                                </Tooltip>
                            }>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Passive</p>
                                    <img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/gift-of-the-gods.jpg" />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={
                                <Tooltip id="ability-1">
                                    <h3>Shield of Achilles</h3>
                                    <p>Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away. </p>
                                </Tooltip>
                            }>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Ability 1</p>
                                    <img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/shield-of-achilles.jpg" />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={
                                <Tooltip id="ability-2">
                                    <h3>Radiant Glory</h3>
                                    <p>Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.</p>
                                </Tooltip>
                            }>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Ability 2</p>
                                    <img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/radiant-glory.jpg" />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={
                                <Tooltip id="ability-3">
                                    <h3>Combat Dodge</h3>
                                    <p>Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.</p>
                                </Tooltip>
                            }>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Ability 3</p>
                                    <img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/combat-dodge.jpg" />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" overlay={
                                <Tooltip id="ability-ultimate">
                                    <h3>Fatal Strike</h3>
                                    <p>Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.</p>
                                </Tooltip>
                            }>
                                <div className="d-flex flex-column align-items-center">
                                    <p>Ultimate</p>
                                    <img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/fatal-strike.jpg" />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>

            <div className="buildAndStats mx-auto">
                <div className="d-flex flex-column godBuildStats">
                    <h2>Achiles Stats</h2>
                    <div className="mt-4 d-flex flex-row justify-content-around">
                        <div className="d-flex flex-column align-items-center">
                            <h3>46.16%</h3>
                            <h5>Win Rate</h5>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h3>3.80%</h3>
                            <h5>Pick Rate</h5>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h3>1.80%</h3>
                            <h5>Ban Rate</h5>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <h3>2.76%</h3>
                            <h5>Pick & Ban Rate</h5>
                        </div>
                    </div>
                </div>

                <div className="mt-4 d-flex justify-content-between">
                    <div className="godBuildRelics">
                        <h2>Most Common Relics</h2>
                        <div className="d-flex justify-content-around relicMargin">
                            <div className="relic">
                                <div className="relicIcon">
                                    <img src="https://web2.hirez.com/smite/item-icons/teleport-glyph.jpg"></img>
                                </div>
                                <h5>Teleport Glyph</h5>
                            </div>
                            <div className="relic">
                                <div className="relicIcon">
                                    <img src="https://web2.hirez.com/smite/item-icons/blink-rune.jpg"></img>
                                </div>
                                <h5>Blink Rune</h5>
                            </div>
                        </div>
                    </div>

                    <div className="godBuildMatchups">
                        <h2>Toughest Matchups</h2>
                        <div className="d-flex justify-content-around marginator">
                            <div className="god">
                                <div className="godIcon">
                                    <img src="https://web2.hirez.com/smite/god-icons/king_arthur.jpg"></img>
                                </div>
                                <h5>40.10%</h5>
                            </div>
                            <div className="god">
                                <div className="godIcon">
                                    <img src="https://web2.hirez.com/smite/god-icons/artio.jpg"></img>
                                </div>
                                <h5>41.25%</h5>
                            </div>
                            <div className="god">
                                <div className="godIcon">
                                    <img src="https://web2.hirez.com/smite/god-icons/osiris.jpg"></img>
                                </div>
                                <h5>41.52%</h5>
                            </div>
                            <div className="god">
                                <div className="godIcon">
                                    <img src="https://web2.hirez.com/smite/god-icons/cerberus.jpg"></img>
                                </div>
                                <h5>42.76%</h5>
                            </div>
                            <div className="god">
                                <div className="godIcon">
                                    <img src="https://web2.hirez.com/smite/god-icons/nike.jpg"></img>
                                </div>
                                <h5>44.15%</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="build">
                    <h2>Build</h2>
                    <div className="d-flex justify-content-around marginator">
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/warrior-tabi.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/breastplate-of-valor.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/the-sledge.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/genjis-guard.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/void-shield.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemIcon">
                                <img src="https://web2.hirez.com/smite/item-icons/heartseeker.jpg"></img>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <h3>46.16%</h3>
                                <h5>Win Rate</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}