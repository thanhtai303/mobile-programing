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
import com.mujick.mujick.repository.SingerRepository;
import com.mujick.mujick.model.Singer;

@RestController
@RequestMapping("/data/singer")
public class SingerController {

        @Autowired
        SingerRepository singerRepository;

        @GetMapping("/get")
        public ResponseEntity<ResponseObject> getAllSinger() {
                List<Singer> foundSinger = singerRepository.findAll();
                return foundSinger.size() > 0
                                ? ResponseEntity.status(HttpStatus.OK)
                                                .body(new ResponseObject("OK", "Query all singers succesful",
                                                                foundSinger))
                                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body(new ResponseObject("FAILED", "Can not find any singer",
                                                                null));
        }

        @GetMapping("/get/{id}")
        public ResponseEntity<ResponseObject> getSingerByID(@PathVariable int id) {
                Optional<Singer> foundSinger = singerRepository.findById(id);
                return foundSinger.isPresent()
                                ? ResponseEntity.status(HttpStatus.OK)
                                                .body(new ResponseObject("OK", "Query singer succesful",
                                                                foundSinger))
                                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                                                .body(new ResponseObject("FAILED",
                                                                "Can not find singer with ID=" + id,
                                                                null));
        }

        @PostMapping("/insert")
        public ResponseEntity<ResponseObject> insertSinger(@RequestBody Singer newSinger) {
                Optional<Singer> foundSinger = singerRepository
                                .findById(newSinger.getId());
                if (foundSinger.isEmpty()) {
                        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK",
                                        "Insert singer successful",
                                        singerRepository.save(newSinger)));
                }
                return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(
                                new ResponseObject("FAILED", "ID of singer has already tanken", null));
        }

        @PutMapping("update/{id}")
        public ResponseEntity<ResponseObject> updateSinger(@RequestBody Singer newSinger,
                        @PathVariable int id) {
                Singer updatedSinger = singerRepository.findById(id)
                                .map(singer -> {
                                        singer.setSinger_name(newSinger.getSinger_name());
                                        singer.setAvatar(newSinger.getAvatar());
                                        singer.setType_name(newSinger.getType_name());
                                        singer.setSong_1(newSinger.getSong_1());
                                        singer.setSong_2(newSinger.getSong_2());
                                        singer.setSong_3(newSinger.getSong_3());
                                        singer.setSong_4(newSinger.getSong_4());
                                        singer.setSong_5(newSinger.getSong_5());
                                        singer.setSong_name_1(newSinger.getSong_name_1());
                                        singer.setSong_name_2(newSinger.getSong_name_2());
                                        singer.setSong_name_3(newSinger.getSong_name_3());
                                        singer.setSong_name_4(newSinger.getSong_name_4());
                                        singer.setSong_name_5(newSinger.getSong_name_5());
                                        return singerRepository.save(singer);
                                }).orElseGet(() -> {
                                        newSinger.setId(id);
                                        return singerRepository.save(newSinger);
                                });
                return ResponseEntity.status(HttpStatus.OK).body(
                                new ResponseObject("OK", "Update singer successful", updatedSinger));
        }

        @DeleteMapping("/delete/{id}")
        public ResponseEntity<ResponseObject> deleteSinger(@PathVariable int id) {
                if (singerRepository.existsById(id)) {
                        singerRepository.deleteById(id);
                        return ResponseEntity.status(HttpStatus.OK).body(new ResponseObject("OK",
                                        "Delete singer successful", null));
                }
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                                new ResponseObject("FAILED", "Can not find and delete singer", null));
        }
}
