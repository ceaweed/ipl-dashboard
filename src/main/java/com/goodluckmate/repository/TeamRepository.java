package com.goodluckmate.repository;

import com.goodluckmate.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

        Team findByTeamName(String teamName);

}
