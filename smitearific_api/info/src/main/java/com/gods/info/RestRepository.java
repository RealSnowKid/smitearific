package com.gods.info;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.transaction.annotation.Transactional;

@RepositoryRestResource
public interface RestRepository extends CrudRepository<godinfo, Long> {
    List<godinfo> findByName(@Param("name") String name);

    @Modifying
    @Transactional
    @Query(value = "alter table godinfo AUTO_INCREMENT=1", nativeQuery = true)
    void resetAutoIncrement();
}