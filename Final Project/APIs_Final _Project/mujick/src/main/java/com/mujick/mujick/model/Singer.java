package com.mujick.mujick.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "singer_songs")
public class Singer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "singer_name")
    private String singer_name;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "type_name")
    private String type_name;

    @Column(name = "song_1")
    private String song_1;

    @Column(name = "song_2")
    private String song_2;

    @Column(name = "song_3")
    private String song_3;

    @Column(name = "song_4")
    private String song_4;

    @Column(name = "song_5")
    private String song_5;

    @Column(name = "song_name_1")
    private String song_name_1;

    @Column(name = "song_name_2")
    private String song_name_2;

    @Column(name = "song_name_3")
    private String song_name_3;

    @Column(name = "song_name_4")
    private String song_name_4;

    @Column(name = "song_name_5")
    private String song_name_5;

    public Singer() {
    }

    public Singer(String singer_name, String avatar, String type_name, String song_1, String song_2,
            String song_3, String song_4, String song_5, String song_name_1, String song_name_2, String song_name_3,
            String song_name_4, String song_name_5) {
        this.singer_name = singer_name;
        this.avatar = avatar;
        this.type_name = type_name;
        this.song_1 = song_1;
        this.song_2 = song_2;
        this.song_3 = song_3;
        this.song_4 = song_4;
        this.song_5 = song_5;
        this.song_name_1 = song_name_1;
        this.song_name_2 = song_name_2;
        this.song_name_3 = song_name_3;
        this.song_name_4 = song_name_4;
        this.song_name_5 = song_name_5;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSinger_name() {
        return singer_name;
    }

    public void setSinger_name(String singer_name) {
        this.singer_name = singer_name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getType_name() {
        return type_name;
    }

    public void setType_name(String type_name) {
        this.type_name = type_name;
    }

    public String getSong_1() {
        return song_1;
    }

    public void setSong_1(String song_1) {
        this.song_1 = song_1;
    }

    public String getSong_2() {
        return song_2;
    }

    public void setSong_2(String song_2) {
        this.song_2 = song_2;
    }

    public String getSong_3() {
        return song_3;
    }

    public void setSong_3(String song_3) {
        this.song_3 = song_3;
    }

    public String getSong_4() {
        return song_4;
    }

    public void setSong_4(String song_4) {
        this.song_4 = song_4;
    }

    public String getSong_5() {
        return song_5;
    }

    public void setSong_5(String song_5) {
        this.song_5 = song_5;
    }

    public String getSong_name_1() {
        return song_name_1;
    }

    public void setSong_name_1(String song_name_1) {
        this.song_name_1 = song_name_1;
    }

    public String getSong_name_2() {
        return song_name_2;
    }

    public void setSong_name_2(String song_name_2) {
        this.song_name_2 = song_name_2;
    }

    public String getSong_name_3() {
        return song_name_3;
    }

    public void setSong_name_3(String song_name_3) {
        this.song_name_3 = song_name_3;
    }

    public String getSong_name_4() {
        return song_name_4;
    }

    public void setSong_name_4(String song_name_4) {
        this.song_name_4 = song_name_4;
    }

    public String getSong_name_5() {
        return song_name_5;
    }

    public void setSong_name_5(String song_name_5) {
        this.song_name_5 = song_name_5;
    }

    @Override
    public String toString() {
        return "Singer [id=" + id + ", singer_name=" + singer_name + ", avatar=" + avatar + ", type_name=" + type_name
                + ", song_1=" + song_1 + ", song_2=" + song_2 + ", song_3=" + song_3 + ", song_4=" + song_4
                + ", song_5=" + song_5 + ", song_name_1=" + song_name_1 + ", song_name_2=" + song_name_2
                + ", song_name_3=" + song_name_3 + ", song_name_4=" + song_name_4 + ", song_name_5=" + song_name_5
                + "]";
    }

}
