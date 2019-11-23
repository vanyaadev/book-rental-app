package com.vanyaadev.serverbookrental.repo;

import com.vanyaadev.serverbookrental.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
}
