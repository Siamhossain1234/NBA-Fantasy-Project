package com.ball.BBallFantasy.Zone.player;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository = playerRepository;
    }

    public List<Player> getPlayers(){
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeam(String teamName){
        return playerRepository.findAll().stream()
                .filter(player -> teamName.equals(player.getTeam()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String playerName){
        return playerRepository.findAll().stream()
                .filter(player -> player.getName().toLowerCase().contains(playerName.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPos(String searchpos){
        return playerRepository.findAll().stream()
                .filter(player -> player.getPos().toLowerCase().contains(searchpos.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersbyTeamPos(String searchTeam, String searchPos){
        return playerRepository.findAll().stream()
                .filter(player -> searchTeam.equals(player.getTeam())&& searchPos.equals(player.getPos()))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player){
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player player){
        Optional<Player> existingPlayer = playerRepository.findByName(player.getName());
        if (existingPlayer.isPresent()){
            Player playerupdate = existingPlayer.get();
            playerupdate.setName(player.getName());
            playerupdate.setTeam(player.getTeam());
            playerupdate.setPos(player.getPos());

            playerRepository.save(playerupdate);
            return playerupdate;
        }
        return null;
    }

    @Transactional
    public void deletePlayer(String playerName){
        playerRepository.deleteByName(playerName);
    }
}
