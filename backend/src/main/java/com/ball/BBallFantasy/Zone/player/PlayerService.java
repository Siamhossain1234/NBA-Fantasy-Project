package com.ball.BBallFantasy.Zone.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    @Cacheable("allPlayers")
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Cacheable(value = "playersByTeam", key = "#team")
    public List<Player> getPlayersByTeam(String team) {
        return playerRepository.findByTeam(team);
    }

    @Cacheable(value = "playersByPosition", key = "#position")
    public List<Player> getPlayersByPosition(String position) {
        return playerRepository.findByPos(position);
    }

    public Player addPlayer(Player player){
        return playerRepository.save(player);
    }

    public Player updatePlayer(Player player){
        Optional<Player> existingPlayer = playerRepository.findByName(player.getName());
        if (existingPlayer.isPresent()){
            Player playerUpdate = existingPlayer.get();
            playerUpdate.setName(player.getName());
            playerUpdate.setTeam(player.getTeam());
            playerUpdate.setPos(player.getPos());
            return playerRepository.save(playerUpdate);
        }
        return null;
    }

    @Transactional
    public void deletePlayer(String playerName){
        playerRepository.deleteByName(playerName);
    }
}
