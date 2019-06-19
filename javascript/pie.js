var Pie = function (selector, options) {
    this.selector = selector
    this.canvas = document.querySelector(selector)
    this.ctx = this.canvas.getContext('2d')
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.options =Object.assign({
        center: { x: this.width / 2, y: this.height / 2 },
        radius: { R: (this.width > this.height ? this.height : this.width) / 4, r: (this.width > this.height ? this.height : this.width) / 8 }, 
    },options)

}




