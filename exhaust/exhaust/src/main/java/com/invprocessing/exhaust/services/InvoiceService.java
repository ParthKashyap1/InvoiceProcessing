package com.invprocessing.exhaust.services;

import com.invprocessing.exhaust.model.Invoice;

import java.util.List;

public interface InvoiceService {

    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(long id);
}
