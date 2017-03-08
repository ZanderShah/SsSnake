function Food() {
    this.d = randomPosition();

    this.show = function() {
        image(fimg, this.d.x * GRID_SIZE, this.d.y * GRID_SIZE);
    }
}
