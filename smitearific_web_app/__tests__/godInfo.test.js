/**
 * @jest-environment node
 */
const axios = require('axios');
import GodsService from '../services/GodsService';

describe('God Info API calls', () => {

    const mockResponse = JSON.parse(JSON.stringify({
        "_embedded": {
            "godinfoes": [
                {
                    "name": "Achilles",
                    "title": "Hero of the Trojan War",
                    "pantheon": "Greek",
                    "type": "Melee, Physical",
                    "role": "Warrior",
                    "lane": null,
                    "icon": "https://web2.hirez.com/smite/god-icons/achilles.jpg",
                    "card": "https://web2.hirez.com/smite/god-cards/achilles.jpg",
                    "ability1Name": "Shield of Achilles",
                    "ability2Name": "Radiant Glory",
                    "ability3Name": "Combat Dodge",
                    "ability4Name": "Fatal Strike",
                    "ability5Name": "Gift of the Gods",
                    "ability1URL": "https://web2.hirez.com/smite/god-abilities/shield-of-achilles.jpg",
                    "ability2URL": "https://web2.hirez.com/smite/god-abilities/radiant-glory.jpg",
                    "ability3URL": "https://web2.hirez.com/smite/god-abilities/combat-dodge.jpg",
                    "ability4URL": "https://web2.hirez.com/smite/god-abilities/fatal-strike.jpg",
                    "ability5URL": "https://web2.hirez.com/smite/god-abilities/gift-of-the-gods.jpg",
                    "ability1Description": "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away.",
                    "ability2Description": "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
                    "ability3Description": "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                    "ability4Description": "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                    "ability5Description": "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active. ",
                    "ability1Cooldown": "15 seconds",
                    "ability2Cooldown": "10 seconds",
                    "ability3Cooldown": "14/13/12/11/10 seconds",
                    "ability4Cooldown": "90 seconds",
                    "ability1Cost": "60/65/70/75/80 mana",
                    "ability2Cost": "40/45/50/55/60 mana",
                    "ability3Cost": "24/28/32/36/40 mana",
                    "ability4Cost": "80/85/90/95/100 mana",
                    "ability1Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Cone\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"50\"}]",
                    "ability2Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Buff\"},{\"description\":\"Affects:\",\"value\":\"Self\"}]",
                    "ability3Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Dash\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"35\"}]",
                    "ability4Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Dash\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"35\"}]",
                    "ability5Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Passive\"}]",
                    "ability1Rankitems": "[{\"description\":\"Damage:\",\"value\":\"100/155/210/265/320 (90% of your Physical Power)\"},{\"description\":\"Stun Duration:\",\"value\":\"1s\"}]",
                    "ability2Rankitems": "[{\"description\":\"Heal:\",\"value\":\"20/23/26/29/32 (10% of your Physical Power)\"},{\"description\":\"Max Heals per Ability:\",\"value\":\"2/2/3/3/4\"},{\"description\":\"Physical Power:\",\"value\":\"+6/7/8/9/10%\"},{\"description\":\"Protections:\",\"value\":\"+10/12.5/15/17.5/20%\"},{\"description\":\"Crowd Control Reduction:\",\"value\":\"20%\"}]",
                    "ability3Rankitems": "[{\"description\":\"Damage:\",\"value\":\"50/85/120/155/190 (+45% of your Physical Power)\"}]",
                    "ability4Rankitems": "[{\"description\":\"Damage:\",\"value\":\"180/270/360/450/540 (100% of your Physical Power)\"},{\"description\":\"Execute Threshold:\",\"value\":\"30%\"},{\"description\":\"Damage Taken Increase:\",\"value\":\"10%\"}]",
                    "ability5Rankitems": "[{\"description\":\"Health Bonus:\",\"value\":\"25 +15 per Level\"},{\"description\":\"Protections Bonus:\",\"value\":\"5 +2 per Level\"},{\"description\":\"Movement Speed Bonus:\",\"value\":\"1% +.25% per Level\"},{\"description\":\"Physical Power Bonus:\",\"value\":\"3 +2 per Level\"}]",
                    "_links": {
                        "self": {
                            "href": "http://localhost:8081/godinfoes/1"
                        },
                        "godinfo": {
                            "href": "http://localhost:8081/godinfoes/1"
                        }
                    }
                }
            ]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8081/godinfoes/search/findByName?name=achilles"
            }
        }
    }));

    const mockResponse2 = JSON.parse(JSON.stringify({
        "_embedded": {
            "godinfoes": [
                {
                    "name": "Achilles2",
                    "title": "Hero of the Trojan War",
                    "pantheon": "Greek",
                    "type": "Melee, Physical",
                    "role": "Warrior",
                    "lane": null,
                    "icon": "https://web2.hirez.com/smite/god-icons/achilles.jpg",
                    "card": "https://web2.hirez.com/smite/god-cards/achilles.jpg",
                    "ability1Name": "Shield of Achilles",
                    "ability2Name": "Radiant Glory",
                    "ability3Name": "Combat Dodge",
                    "ability4Name": "Fatal Strike",
                    "ability5Name": "Gift of the Gods",
                    "ability1URL": "https://web2.hirez.com/smite/god-abilities/shield-of-achilles.jpg",
                    "ability2URL": "https://web2.hirez.com/smite/god-abilities/radiant-glory.jpg",
                    "ability3URL": "https://web2.hirez.com/smite/god-abilities/combat-dodge.jpg",
                    "ability4URL": "https://web2.hirez.com/smite/god-abilities/fatal-strike.jpg",
                    "ability5URL": "https://web2.hirez.com/smite/god-abilities/gift-of-the-gods.jpg",
                    "ability1Description": "Achilles punches forward with the edge of his Shield, inflicting massive damage and stunning enemy targets hit by the impact. The force of his punch continues to radiate past his initial target area, dealing 85% damage to targets farther away.",
                    "ability2Description": "Achilles is blessed by the gods, giving him bonus Physical Power, Protections, and Crowd Control Reduction for 6 seconds. While this blessing is active, Achilles will heal himself upon successfully damaging enemies with abilities.",
                    "ability3Description": "Achilles dodges his enemies' attacks before striking them in swift response. If Achilles successfully hits an enemy god with this strike, Achilles can use this ability once more before it goes on Cooldown.",
                    "ability4Description": "Achilles dashes forward and attacks. While dashing, Achilles will pass through minions, stop and hit the first enemy god he encounters, dealing damage to all he hits and executing gods below 30% Health. If Achilles kills a god with this ability, he can use it again, up to 5 times. As Achilles successfully Executes his enemies, he becomes more reckless in combat and leaves his heel exposed. Achilles will become more susceptible to damage, stacking up to 5 times.",
                    "ability5Description": "Achilles adapts to the tide of Battle. While in the Fountain, Achilles can choose to wear armor, granting him bonus Health and Protections, or forgo it, granting him bonus Movement Speed and Physical Power. To swap, use Achilles' Basic Attack while the Passive targeter is active. ",
                    "ability1Cooldown": "15 seconds",
                    "ability2Cooldown": "10 seconds",
                    "ability3Cooldown": "14/13/12/11/10 seconds",
                    "ability4Cooldown": "90 seconds",
                    "ability1Cost": "60/65/70/75/80 mana",
                    "ability2Cost": "40/45/50/55/60 mana",
                    "ability3Cost": "24/28/32/36/40 mana",
                    "ability4Cost": "80/85/90/95/100 mana",
                    "ability1Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Cone\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"50\"}]",
                    "ability2Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Buff\"},{\"description\":\"Affects:\",\"value\":\"Self\"}]",
                    "ability3Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Dash\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"35\"}]",
                    "ability4Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Dash\"},{\"description\":\"Affects:\",\"value\":\"Enemies\"},{\"description\":\"Damage:\",\"value\":\"Physical\"},{\"description\":\"Range:\",\"value\":\"35\"}]",
                    "ability5Menuitems": "[{\"description\":\"Ability:\",\"value\":\"Passive\"}]",
                    "ability1Rankitems": "[{\"description\":\"Damage:\",\"value\":\"100/155/210/265/320 (90% of your Physical Power)\"},{\"description\":\"Stun Duration:\",\"value\":\"1s\"}]",
                    "ability2Rankitems": "[{\"description\":\"Heal:\",\"value\":\"20/23/26/29/32 (10% of your Physical Power)\"},{\"description\":\"Max Heals per Ability:\",\"value\":\"2/2/3/3/4\"},{\"description\":\"Physical Power:\",\"value\":\"+6/7/8/9/10%\"},{\"description\":\"Protections:\",\"value\":\"+10/12.5/15/17.5/20%\"},{\"description\":\"Crowd Control Reduction:\",\"value\":\"20%\"}]",
                    "ability3Rankitems": "[{\"description\":\"Damage:\",\"value\":\"50/85/120/155/190 (+45% of your Physical Power)\"}]",
                    "ability4Rankitems": "[{\"description\":\"Damage:\",\"value\":\"180/270/360/450/540 (100% of your Physical Power)\"},{\"description\":\"Execute Threshold:\",\"value\":\"30%\"},{\"description\":\"Damage Taken Increase:\",\"value\":\"10%\"}]",
                    "ability5Rankitems": "[{\"description\":\"Health Bonus:\",\"value\":\"25 +15 per Level\"},{\"description\":\"Protections Bonus:\",\"value\":\"5 +2 per Level\"},{\"description\":\"Movement Speed Bonus:\",\"value\":\"1% +.25% per Level\"},{\"description\":\"Physical Power Bonus:\",\"value\":\"3 +2 per Level\"}]",
                    "_links": {
                        "self": {
                            "href": "http://localhost:8081/godinfoes/1"
                        },
                        "godinfo": {
                            "href": "http://localhost:8081/godinfoes/1"
                        }
                    }
                }
            ]
        },
        "_links": {
            "self": {
                "href": "http://localhost:8081/godinfoes/search/findByName?name=achilles"
            }
        }
    }));

    it('Test API returned data is equal to expected data', async () => {

        let response;
        try {
            response = await GodsService.GetGodInfo("achilles");
        } catch (error) {
            console.log(error);
        }

        expect(response.data).toEqual(mockResponse);

    });

    it('Test API returned data to not be equal to incorrect data', async () => {

        let response;
        try {
            response = await GodsService.GetGodInfo("achilles");
        } catch (error) {
            console.log(error);
        }

        expect(JSON.stringify(response.data)).not.toBe(mockResponse2);

    });
});