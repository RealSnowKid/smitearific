package com.example.demo;

// import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.GenerationType;

@Entity
public class Gods {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String god;
    private Double winRate;
    private Double prevWinRate;
    private Double pickRate;
    private Double prevPickRate;
    private Double banRate;
    private Double prevBanRate;
    private Double pAndBRate;
    private Double prevPAndBRate;
    private String role;
    private String secondaryRole;

    public Gods() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGod() {
        return god;
    }

    public void setGod(String god) {
        this.god = god;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getSecondaryRole() {
        return secondaryRole;
    }

    public void setSecondaryRole(String secondaryRole) {
        this.secondaryRole = secondaryRole;
    }

    public Double getPickRate() {
        return pickRate;
    }

    public void setPickRate(Double pickRate) {
        this.pickRate = pickRate;
    }

    public Double getPrevPickRate() {
        return prevPickRate;
    }

    public void setPrevPickRate(Double prevPickRate) {
        this.prevPickRate = prevPickRate;
    }

    public Double getBanRate() {
        return banRate;
    }

    public void setBanRate(Double banRate) {
        this.banRate = banRate;
    }

    public Double getPrevBanRate() {
        return prevBanRate;
    }

    public void setPrevBanRate(Double prevBanRate) {
        this.prevBanRate = prevBanRate;
    }

    public Double getWinRate() {
        return winRate;
    }

    public void setWinRate(Double winRate) {
        this.winRate = winRate;
    }

    public Double getPrevWinRate() {
        return prevWinRate;
    }

    public void setPrevWinRate(Double prevWinRate) {
        this.prevWinRate = prevWinRate;
    }

    public Double getPAndBRate() {
        return pAndBRate;
    }

    public void setPAndBRate(Double pAndBRate) {
        this.pAndBRate = pAndBRate;
    }

    public Double getPrevPAndBRate() {
        return prevPAndBRate;
    }

    public void setPrevPAndBRate(Double prevPAndBRate) {
        this.prevPAndBRate = prevPAndBRate;
    }

}