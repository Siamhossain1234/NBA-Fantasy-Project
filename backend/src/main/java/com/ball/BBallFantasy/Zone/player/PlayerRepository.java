package com.ball.BBallFantasy.Zone.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    Optional<Player> findByName(String name);
    void deleteByName(String name);
    List<Player> findByTeam(String team);
    List<Player> findByPos(String position);
}

