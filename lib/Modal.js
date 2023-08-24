"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
class Modal {
    constructor() {
        this.isOpen = false;
        this.modalElement = document.createElement('div');
        this.modalElement.className = 'modal';
        this.modalElement.style.display = 'none';
        document.body.appendChild(this.modalElement);
    }
    open(options) {
        if (!this.isOpen) {
            this.modalElement.innerHTML = options.content;
            this.modalElement.style.display = 'block';
            this.isOpen = true;
        }
    }
    close() {
        if (this.isOpen) {
            this.modalElement.style.display = 'none';
            this.isOpen = false;
        }
    }
}
exports.Modal = Modal;
