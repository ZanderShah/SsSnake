function Food() {
    this.d = randomPosition();

    this.show = function() {
        fill(255, 0, 100);
        rect(this.d.x * GRID_SIZE, this.d.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
    }
}
