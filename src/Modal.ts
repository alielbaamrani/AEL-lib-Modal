interface ModalOptions {
  content: string;
}

export class Modal {
  private modalElement: HTMLDivElement;
  private isOpen: boolean = false;

  constructor() {
      this.modalElement = document.createElement('div');
      this.modalElement.className = 'modal';
      this.modalElement.style.display = 'none';
      document.body.appendChild(this.modalElement);
  }

  open(options: ModalOptions) {
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
