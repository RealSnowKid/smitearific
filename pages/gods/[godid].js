import React from 'react';
import Navbar from '../../components/Navbar.js';
import Navigation from '../../components/Navigation';
import { Tabs, Tab } from 'react-bootstrap';

export default function GodPage() {
    return (
        <>
            <Navbar />
            <Navigation />

            <div className="containter mx-auto godInfo">
                <div className="row">
                    <div className="godIcon">
                        <img src="https://web2.hirez.com/smite/god-icons/achilles.jpg" />
                    </div>
                    <div className="godNfo">
                        <div className="d-flex align-items-center">
                            <h1 className="font-weight-bold">ACHILLES</h1>
                            <h2 className="ml-5">The Hero of the Trojan War</h2>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <p><img className="type" src="https://i.imgur.com/4nSOAUv.png" /> Solo Lane</p>
                            <p><img className="type" src="https://i.imgur.com/zlZGWRs.png" /> Warrior</p>
                            <p><img className="type" src="https://i.imgur.com/vISTzOG.png" /> Greek</p>
                            <p><img className="type" src="https://i.imgur.com/hUrd9xJ.png" /> Melee</p>
                            <p><img className="type" src="https://i.imgur.com/Utu3Irz.png" /> Physical</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto abilities mb-3">
                <h2>Abilities</h2>
                <Tabs fill defaultActiveKey="passive" id="uncontrolled-tab-example" className="mt-4">
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="passive" title={<img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/gift-of-the-gods.jpg" />}>
                        <h3>Gift of the Gods</h3>
                        <p>Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active.</p>
                        <div className="d-flex flex-row">
                            <div className="attributes col-3">
                                <p><b>Type: </b>Passive</p>
                                <p><b>Health Bonus: </b>25 (+15 per Level)</p>
                                <p><b>Movement Speed Bonus: </b>1% (+.25% per Level)</p>
                            </div>
                            <div className="attributes col-3">
                                <p>‎‎‏‏‎ </p>
                                <p><b>Protection Bonus: </b>5 (+2 per Level)</p>
                                <p><b>Physical Power Bonus: </b>3 (+2 per Level)</p>
                            </div>
                            <div className="notes">
                                <h5>Notes</h5>
                                <p>At level 20, grants 325 Health and 45 Protections with armor, 6% Movement Speed and 43 Physical Power without.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability1" title={<img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/shield-of-achilles.jpg" />}>
                        <h3>Shield of Achilles</h3>
                        <p>Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away. </p>
                        <div className="d-flex flex-row">
                            <div className="attributes col-3">
                                <p><b>Type: </b>Cone</p>
                                <p><b>Cost: </b>60/65/70/75/80 mana</p>
                                <p><b>Damage: </b>100/155/210/265/320 (+90% of your Physical Power)</p>
                            </div>
                            <div className="attributes col-3">
                                <p>‎‎‏‏‎<b>Cooldown: </b>15 seconds</p>
                                <p><b>Range: </b>50 units</p>
                                <p><b>Stun Duration: </b>1 seconds</p>
                            </div>
                            <div className="notes">
                                <h5>Notes</h5>
                                <p>Can go through walls.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability2" title={<img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/radiant-glory.jpg" />}>
                        <h3>Radiant Glory</h3>
                        <p>Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.</p>
                        <div className="d-flex flex-row">
                            <div className="attributes col-3">
                                <p><b>Type: </b>Buff</p>
                                <p><b>Cost: </b>40/45/50/55/60 mana</p>
                                <p><b>Heal: </b>20/23/26/29/32 (+10% of your Physical Power)</p>
                                <p><b>Physical Power: </b>+6/7/8/9/10%</p>
                            </div>
                            <div className="attributes col-3">
                                <p>‎‎‏‏‎<b>Cooldown: </b>10 seconds</p>
                                <p><b>Protections: </b>+10/12.5/15/17.5/20%</p>
                                <p><b>Max Heals per Ability: </b>2/2/3/3/4</p>
                                <p><b>Crowd Control Reduction: </b>20%</p>
                            </div>
                            <div className="notes">
                                <h5>Notes</h5>
                                <p className="font-weight-bold font-italic">None</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ability3" title={<img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/combat-dodge.jpg" />}>
                        <h3>Combat Dodge</h3>
                        <p>Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.</p>
                        <div className="d-flex flex-row">
                            <div className="attributes col-3">
                                <p><b>Type: </b>Dash</p>
                                <p><b>Cost: </b>24/28/32/36/40 mana</p>
                                <p><b>Damage: </b>50/85/120/155/190 (+45% of your Physical Power)</p>
                            </div>
                            <div className="attributes col-3">
                                <p>‎‎‏‏‎ </p>
                                <p>‎‎‏‏‎<b>Cooldown: </b>14/13/12/11/10 seconds</p>
                                <p><b>Range: </b>35 units</p>
                            </div>
                            <div className="notes">
                                <h5>Notes</h5>
                                <p>It is possible to perform actions in between the strikes and the dashes.</p>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="ml-2 mr-2 mb-2 mt-5" eventKey="ultimate" title={<img className="abilityIcon" src="https://web2.hirez.com/smite/god-abilities/fatal-strike.jpg" />}>
                        <h3>Fatal Strike</h3>
                        <p>Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.</p>
                        <div className="d-flex flex-row">
                            <div className="attributes col-3">
                                <p><b>Type: </b>Ultimate, Dash</p>
                                <p><b>Cost: </b>80/85/90/95/100 mana</p>
                                <p><b>Damage: </b>180/270/360/450/540 (+100% of your Physical Power)</p>
                            </div>
                            <div className="attributes col-3">
                                <p>‎‎‏‏‎<b>Cooldown: </b>90 seconds</p>
                                <p><b>Range: </b>35 units</p>
                                <p><b>Stun Duration: </b>1 seconds</p>
                                <p><b>Execute Threshold: </b>30%</p>
                            </div>
                            <div className="notes">
                                <h5>Notes</h5>
                                <p className="font-weight-bold font-italic">None</p>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}