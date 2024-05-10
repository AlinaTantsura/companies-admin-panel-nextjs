'use client';

import React from "react";
import CompanyForm from "./CompanyForm";
import Modal, { ModalProps } from "./Modal"

export default function CompanyFormModal({ onClose, ...rest }: ModalProps) {
    return (
        <Modal {...rest} onClose={onClose}>
            <CompanyForm onSubmit={() => onClose()} />
        </Modal>
    )
}