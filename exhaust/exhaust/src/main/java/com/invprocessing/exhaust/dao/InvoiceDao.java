package com.invprocessing.exhaust.dao;

import com.invprocessing.exhaust.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceDao extends JpaRepository<Invoice,Long> {

    
}
