package com.mujick.mujick.repository;

import com.mujick.mujick.model.Singer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SingerRepository extends JpaRepository<Singer, Integer> {

}
