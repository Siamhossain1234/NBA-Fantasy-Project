package com.ball.BBallFantasy.Zone.player;

import jakarta.persistence.*;

@Entity
@Table(name="NBA_Players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Player")
    private String name;

    @Column(name = "Age")
    private Integer age;

    @Column(name = "Pos")
    private String pos;

    @Column(name = "G")
    private Integer g;

    @Column(name = "GS")
    private Integer gs;

    @Column(name = "MP")
    private Integer mp;

    @Column(name = "FG")
    private Double fg;

    @Column(name = "FGA")
    private Double fga;

    @Column(name = "FG%")
    private Double fgPercentage;

    @Column(name = "3P")
    private Double threeP;

    @Column(name = "3PA")
    private Double threePA;

    @Column(name = "3P%")
    private Double threePPercentage;

    @Column(name = "2P")
    private Double twoP;

    @Column(name = "2PA")
    private Double twoPA;

    @Column(name = "2P%")
    private Double twoPPercentage;

    @Column(name = "eFG%")
    private Double eFGPercentage;

    @Column(name = "FT")
    private Double ft;

    @Column(name = "FTA")
    private Double fta;

    @Column(name = "FT%")
    private Double ftPercentage;

    @Column(name = "ORB")
    private Double orb;

    @Column(name = "DRB")
    private Double drb;

    @Column(name = "TRB")
    private Double trb;

    @Column(name = "AST")
    private Double ast;

    @Column(name = "STL")
    private Double stl;

    @Column(name = "BLK")
    private Double blk;

    @Column(name = "TOV")
    private Double tov;

    @Column(name = "PF")
    private Double pf;

    @Column(name = "PTS")
    private Double pts;

    @Column(name = "Team")
    private String team;

    // no parameter constructor
    public Player() {
    }
    //parameterized constructor


    public Player(String name, Integer age, String pos, Integer g, Integer gs, Integer mp, Double fg, Double fga, Double fgPercentage, Double threeP, Double threePA, Double threePPercentage, Double twoP, Double twoPA, Double twoPPercentage, Double eFGPercentage, Double ft, Double fta, Double ftPercentage, Double orb, Double drb, Double trb, Double ast, Double stl, Double blk, Double tov, Double pf, Double pts, String team) {
        this.name = name;
        this.age = age;
        this.pos = pos;
        this.g = g;
        this.gs = gs;
        this.mp = mp;
        this.fg = fg;
        this.fga = fga;
        this.fgPercentage = fgPercentage;
        this.threeP = threeP;
        this.threePA = threePA;
        this.threePPercentage = threePPercentage;
        this.twoP = twoP;
        this.twoPA = twoPA;
        this.twoPPercentage = twoPPercentage;
        this.eFGPercentage = eFGPercentage;
        this.ft = ft;
        this.fta = fta;
        this.ftPercentage = ftPercentage;
        this.orb = orb;
        this.drb = drb;
        this.trb = trb;
        this.ast = ast;
        this.stl = stl;
        this.blk = blk;
        this.tov = tov;
        this.pf = pf;
        this.pts = pts;
        this.team = team;
    }
    //player name constructor
    public Player(String name) {
        this.name = name;
    }
    //getters and setters


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Integer getG() {
        return g;
    }

    public void setG(Integer g) {
        this.g = g;
    }

    public Integer getGs() {
        return gs;
    }

    public void setGs(Integer gs) {
        this.gs = gs;
    }

    public Integer getMp() {
        return mp;
    }

    public void setMp(Integer mp) {
        this.mp = mp;
    }

    public Double getFg() {
        return fg;
    }

    public void setFg(Double fg) {
        this.fg = fg;
    }

    public Double getFga() {
        return fga;
    }

    public void setFga(Double fga) {
        this.fga = fga;
    }

    public Double getFgPercentage() {
        return fgPercentage;
    }

    public void setFgPercentage(Double fgPercentage) {
        this.fgPercentage = fgPercentage;
    }

    public Double getThreeP() {
        return threeP;
    }

    public void setThreeP(Double threeP) {
        this.threeP = threeP;
    }

    public Double getThreePA() {
        return threePA;
    }

    public void setThreePA(Double threePA) {
        this.threePA = threePA;
    }

    public Double getThreePPercentage() {
        return threePPercentage;
    }

    public void setThreePPercentage(Double threePPercentage) {
        this.threePPercentage = threePPercentage;
    }

    public Double getTwoP() {
        return twoP;
    }

    public void setTwoP(Double twoP) {
        this.twoP = twoP;
    }

    public Double getTwoPA() {
        return twoPA;
    }

    public void setTwoPA(Double twoPA) {
        this.twoPA = twoPA;
    }

    public Double getTwoPPercentage() {
        return twoPPercentage;
    }

    public void setTwoPPercentage(Double twoPPercentage) {
        this.twoPPercentage = twoPPercentage;
    }

    public Double geteFGPercentage() {
        return eFGPercentage;
    }

    public void seteFGPercentage(Double eFGPercentage) {
        this.eFGPercentage = eFGPercentage;
    }

    public Double getFt() {
        return ft;
    }

    public void setFt(Double ft) {
        this.ft = ft;
    }

    public Double getFta() {
        return fta;
    }

    public void setFta(Double fta) {
        this.fta = fta;
    }

    public Double getFtPercentage() {
        return ftPercentage;
    }

    public void setFtPercentage(Double ftPercentage) {
        this.ftPercentage = ftPercentage;
    }

    public Double getOrb() {
        return orb;
    }

    public void setOrb(Double orb) {
        this.orb = orb;
    }

    public Double getDrb() {
        return drb;
    }

    public void setDrb(Double drb) {
        this.drb = drb;
    }

    public Double getTrb() {
        return trb;
    }

    public void setTrb(Double trb) {
        this.trb = trb;
    }

    public Double getAst() {
        return ast;
    }

    public void setAst(Double ast) {
        this.ast = ast;
    }

    public Double getStl() {
        return stl;
    }

    public void setStl(Double stl) {
        this.stl = stl;
    }

    public Double getBlk() {
        return blk;
    }

    public void setBlk(Double blk) {
        this.blk = blk;
    }

    public Double getTov() {
        return tov;
    }

    public void setTov(Double tov) {
        this.tov = tov;
    }

    public Double getPf() {
        return pf;
    }

    public void setPf(Double pf) {
        this.pf = pf;
    }

    public Double getPts() {
        return pts;
    }

    public void setPts(Double pts) {
        this.pts = pts;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }
}



