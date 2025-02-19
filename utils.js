class Modal {
    element = null;
    constructor(element) {
        this.element = element;
    }
    open() {
        this.element.style.display = 'flex';
    }
    close() {
        this.element.style.display = 'none';
    }
}