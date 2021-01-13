package com.god.stats;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("http://localhost:3000")
public interface RestRepository extends CrudRepository<God, Long> {

    @Modifying
    @Transactional
    @Query(value = "alter table god AUTO_INCREMENT=1", nativeQuery = true)
    void resetAutoIncrement();
}
