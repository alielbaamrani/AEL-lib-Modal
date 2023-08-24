interface ModalOptions {
    content: string;
}
export declare class Modal {
    private modalElement;
    private isOpen;
    constructor();
    open(options: ModalOptions): void;
    close(): void;
}
export {};
