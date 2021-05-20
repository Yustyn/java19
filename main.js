class PrintMaсhine {
    constructor(size, color, family, container) {
        this.size = size
        this.color = color
        this.family = family
        this.container = container
    }
    show() {
        document.querySelector(`${this.container}`).innerHTML = `<p style='font-size: ${this.size}; color: ${this.color}; font-family: ${this.family}'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius atque nesciunt magnam rem aliquid fuga, quia modi voluptatem libero excepturi nobis nulla, provident, cumque maiores neque aperiam nam tempora.</p>`
    }
}

let example1 = new PrintMaсhine(18, 'red', "'Courier New', Courier, monospace", '.wrapper')

example1.show()

let example2 = new PrintMaсhine(10, 'blue', "'Courier New', Courier, monospace", '.wrapper1')

example2.show()