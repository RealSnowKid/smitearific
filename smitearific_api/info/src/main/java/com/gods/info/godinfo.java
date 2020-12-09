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
    private String ability1;
    private String ability2;
    private String ability3;
    private String ability4;
    private String ability5;
    private String ability1URL;
    private String ability2URL;
    private String ability3URL;
    private String ability4URL;
    private String ability5URL;
    private String icon;
    private String card;

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

    public String getAbility1() {
        return ability1;
    }

    public void setAbility1(String ability) {
        this.ability1 = ability;
    }

    public String getAbility2() {
        return ability2;
    }

    public void setAbility2(String ability) {
        this.ability2 = ability;
    }

    public String getAbility3() {
        return ability3;
    }

    public void setAbility3(String ability) {
        this.ability3 = ability;
    }

    public String getAbility4() {
        return ability4;
    }

    public void setAbility4(String ability) {
        this.ability4 = ability;
    }

    public String getAbility5() {
        return ability5;
    }

    public void setAbility5(String ability) {
        this.ability5 = ability;
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

}
