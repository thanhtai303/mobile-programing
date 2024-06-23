package com.mujick.mujick.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.mujick.mujick.model.ResponseObject;
import com.mujick.mujick.repository.SongRepository;
import com.mujick.mujick.model.Songs;

@RestController
@RequestMapping("/data/song")
public class SongController {

        @Autowired
        SongRepository songRepository;

        @GetMapping("/get")
        public ResponseEntity<ResponseObject> getAllSongs() {
                List<Songs> foundSongs = songRepository.findAll();
                // HashMap<String, Songs> resonse = new HashMap<>();
                // for (Songs i : foundSongs) {
                // resonse.put("song_" + i.getId(), i);
                // }
                return foundSongs.size() > 0
                                ? ResponseEntity.status(HttpStatus.OK)
                                                .body(new ResponseObject("OK", "Query all songs succesful",
                                                                foundSongs))
                                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body(new ResponseObject("FAILED", "Can not find any songs",
                                                                null));
        }

        @GetMapping("/get/{id}")
        public ResponseEntity<ResponseObject> getSongByID(@PathVariable int id) {
                Optional<Songs> foundSong = songRepository.findById(id);
                return foundSong.isPresent()
                                ? ResponseEntity.status(HttpStatus.OK)
                                                .body(new ResponseObject("OK", "Query song succesful",
                                                                foundSong))
                                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body(new ResponseObject("FAILED",
                                                                "Can not find song with ID=" + id,
                                                                null));
        }

        @PostMapping("/insert")
        public ResponseEntity<ResponseObject> insertSong(@RequestBody Songs newSong) {
                Optional<Songs> foundSong = songRepository
                                .findById(newSong.getId());
                if (foundSong.isEmpty()) {
                        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK",
                                        "Insert song successful",
                                        songRepository.save(newSong)));
                }
                return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                                new ResponseObject("FAILED", "ID of song has already tanken", null));
        }

        @PutMapping("update/{id}")
        public ResponseEntity<ResponseObject> updateSong(@RequestBody Songs newSong,
                        @PathVariable int id) {
                Songs updatedSong = songRepository.findById(id)
                                .map(song -> {
                                        song.setId(newSong.getId());
                                        song.setSong(newSong.getSong());
                                        song.setSong_name(newSong.getSong_name());
                                        song.setSinger_name(newSong.getSinger_name());
                                        song.setAvatar(newSong.getAvatar());
                                        return songRepository.save(song);
                                }).orElseGet(() -> {
                                        newSong.setId(id);
                                        return songRepository.save(newSong);
                                });
                return ResponseEntity.status(HttpStatus.OK).body(
                                new ResponseObject("OK", "Update song successful", updatedSong));
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<ResponseObject> deleteSong(@PathVariable int id) {
                if (songRepository.existsById(id)) {
                        songRepository.deleteById(id);
                        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK",
                                        "Delete song successful", null));
                }
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                                new ResponseObject("FAILED", "Can not find and delete song", null));
        }
}
