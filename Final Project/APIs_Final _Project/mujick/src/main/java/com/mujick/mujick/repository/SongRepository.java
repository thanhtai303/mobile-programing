package com.mujick.mujick.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mujick.mujick.model.Songs;

@Repository
public interface SongRepository extends JpaRepository<Songs, Integer> {

}
