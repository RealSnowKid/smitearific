package com.gods.info;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

@Entity
public class godinfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String title;
    private String pantheon;
    private String type;
    private String role;
    private String lane;
    private String icon;
    private String card;
    private String ability1Name;
    private String ability2Name;
    private String ability3Name;
    private String ability4Name;
    private String ability5Name;
    private String ability1URL;
    private String ability2URL;
    private String ability3URL;
    private String ability4URL;
    private String ability5URL;
    private String ability1Description;
    private String ability2Description;
    private String ability3Description;
    private String ability4Description;
    private String ability5Description;
    private String ability1Cooldown;
    private String ability2Cooldown;
    private String ability3Cooldown;
    private String ability4Cooldown;
    private String ability1Cost;
    private String ability2Cost;
    private String ability3Cost;
    private String ability4Cost;
    private String ability1Menuitems;
    private String ability2Menuitems;
    private String ability3Menuitems;
    private String ability4Menuitems;
    private String ability5Menuitems;
    private String ability1Rankitems;
    private String ability2Rankitems;
    private String ability3Rankitems;
    private String ability4Rankitems;
    private String ability5Rankitems;

    public godinfo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPantheon() {
        return pantheon;
    }

    public void setPantheon(String pantheon) {
        this.pantheon = pantheon;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getLane() {
        return lane;
    }

    public void setLane(String lane) {
        this.lane = lane;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public String getAbility1Name() {
        return ability1Name;
    }

    public void setAbility1Name(String ability) {
        this.ability1Name = ability;
    }

    public String getAbility2Name() {
        return ability2Name;
    }

    public void setAbility2Name(String ability) {
        this.ability2Name = ability;
    }

    public String getAbility3Name() {
        return ability3Name;
    }

    public void setAbility3Name(String ability) {
        this.ability3Name = ability;
    }

    public String getAbility4Name() {
        return ability4Name;
    }

    public void setAbility4Name(String ability) {
        this.ability4Name = ability;
    }

    public String getAbility5Name() {
        return ability5Name;
    }

    public void setAbility5Name(String ability) {
        this.ability5Name = ability;
    }

    public String getAbility1URL() {
        return ability1URL;
    }

    public void setAbility1URL(String abilityURL) {
        this.ability1URL = abilityURL;
    }

    public String getAbility2URL() {
        return ability2URL;
    }

    public void setAbility2URL(String abilityURL) {
        this.ability2URL = abilityURL;
    }

    public String getAbility3URL() {
        return ability3URL;
    }

    public void setAbility3URL(String abilityURL) {
        this.ability3URL = abilityURL;
    }

    public String getAbility4URL() {
        return ability4URL;
    }

    public void setAbility4URL(String abilityURL) {
        this.ability4URL = abilityURL;
    }

    public String getAbility5URL() {
        return ability5URL;
    }

    public void setAbility5URL(String abilityURL) {
        this.ability5URL = abilityURL;
    }

    public String getAbility1Description() {
        return ability1Description;
    }

    public void setAbility1Description(String abilityDescription) {
        this.ability1Description = abilityDescription;
    }

    public String getAbility2Description() {
        return ability2Description;
    }

    public void setAbility2Description(String abilityDescription) {
        this.ability2Description = abilityDescription;
    }

    public String getAbility3Description() {
        return ability3Description;
    }

    public void setAbility3Description(String abilityDescription) {
        this.ability3Description = abilityDescription;
    }

    public String getAbility4Description() {
        return ability4Description;
    }

    public void setAbility4Description(String abilityDescription) {
        this.ability4Description = abilityDescription;
    }

    public String getAbility5Description() {
        return ability5Description;
    }

    public void setAbility5Description(String abilityDescription) {
        this.ability5Description = abilityDescription;
    }

    public String getAbility1Cooldown() {
        return ability1Cooldown;
    }

    public void setAbility1Cooldown(String abilityCooldown) {
        this.ability1Cooldown = abilityCooldown;
    }

    public String getAbility2Cooldown() {
        return ability2Cooldown;
    }

    public void setAbility2Cooldown(String abilityCooldown) {
        this.ability2Cooldown = abilityCooldown;
    }

    public String getAbility3Cooldown() {
        return ability3Cooldown;
    }

    public void setAbility3Cooldown(String abilityCooldown) {
        this.ability3Cooldown = abilityCooldown;
    }

    public String getAbility4Cooldown() {
        return ability4Cooldown;
    }

    public void setAbility4Cooldown(String abilityCooldown) {
        this.ability4Cooldown = abilityCooldown;
    }

    public String getAbility1Cost() {
        return ability1Cost;
    }

    public void setAbility1Cost(String abilityCost) {
        this.ability1Cost = abilityCost;
    }

    public String getAbility2Cost() {
        return ability2Cost;
    }

    public void setAbility2Cost(String abilityCost) {
        this.ability2Cost = abilityCost;
    }

    public String getAbility3Cost() {
        return ability3Cost;
    }

    public void setAbility3Cost(String abilityCost) {
        this.ability3Cost = abilityCost;
    }

    public String getAbility4Cost() {
        return ability4Cost;
    }

    public void setAbility4Cost(String abilityCost) {
        this.ability4Cost = abilityCost;
    }

    public String getAbility1Menuitems() {
        return ability1Menuitems;
    }

    public void setAbility1Menuitems(String abilityMenuitems) {
        this.ability1Menuitems = abilityMenuitems;
    }

    public String getAbility2Menuitems() {
        return ability2Menuitems;
    }

    public void setAbility2Menuitems(String abilityMenuitems) {
        this.ability2Menuitems = abilityMenuitems;
    }

    public String getAbility3Menuitems() {
        return ability3Menuitems;
    }

    public void setAbility3Menuitems(String abilityMenuitems) {
        this.ability3Menuitems = abilityMenuitems;
    }

    public String getAbility4Menuitems() {
        return ability4Menuitems;
    }

    public void setAbility4Menuitems(String abilityMenuitems) {
        this.ability4Menuitems = abilityMenuitems;
    }

    public String getAbility5Menuitems() {
        return ability5Menuitems;
    }

    public void setAbility5Menuitems(String abilityMenuitems) {
        this.ability5Menuitems = abilityMenuitems;
    }

    public String getAbility1Rankitems() {
        return ability1Rankitems;
    }

    public void setAbility1Rankitems(String abilityRankitems) {
        this.ability1Rankitems = abilityRankitems;
    }

    public String getAbility2Rankitems() {
        return ability2Rankitems;
    }

    public void setAbility2Rankitems(String abilityRankitems) {
        this.ability2Rankitems = abilityRankitems;
    }

    public String getAbility3Rankitems() {
        return ability3Rankitems;
    }

    public void setAbility3Rankitems(String abilityRankitems) {
        this.ability3Rankitems = abilityRankitems;
    }

    public String getAbility4Rankitems() {
        return ability4Rankitems;
    }

    public void setAbility4Rankitems(String abilityRankitems) {
        this.ability4Rankitems = abilityRankitems;
    }

    public String getAbility5Rankitems() {
        return ability5Rankitems;
    }

    public void setAbility5Rankitems(String abilityRankitems) {
        this.ability5Rankitems = abilityRankitems;
    }
}
