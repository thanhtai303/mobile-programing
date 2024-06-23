package com.mujick.mujick.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "songs")
public class Songs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "song")
    private String song;

    @Column(name = "song_name")
    private String song_name;

    @Column(name = "singer_name")
    private String singer_name;

    @Column(name = "avatar")
    private String avatar;

    public Songs() {
    }

    public Songs(int id, String song, String song_name, String singer_name, String avatar) {
        this.id = id;
        this.song = song;
        this.song_name = song_name;
        this.singer_name = singer_name;
        this.avatar = avatar;
    }

    public int getId() {
        return id;
    }

    public String getSong() {
        return song;
    }

    public String getSong_name() {
        return song_name;
    }

    public String getSinger_name() {
        return singer_name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setSong(String song) {
        this.song = song;
    }

    public void setSong_name(String song_name) {
        this.song_name = song_name;
    }

    public void setSinger_name(String singer_name) {
        this.singer_name = singer_name;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Override
    public String toString() {
        return "Songs [id=" + id + ", song=" + song + ", song_name=" + song_name + ", singer_name=" + singer_name
                + ", avatar=" + avatar + "]";
    }

}
