import Tool from './tool';
export const LINE = 'Line';

const line = { ...Tool };

line.name = 'Line';

line.onMouseDown = function onMouseDown(start, options) {
    this.ctx.strokeStyle = options ? options.color : "#000";
    this.setInitSettings({ start, options });
    if (!this.state.data) {
        // get the start point on mouse down
        // TODO: it is not the best solution
        // revisit later
        this.state.firstMouseDown = start;
        this.state.data = [];
    }
}

line.onMouseMove = function onMouseMove(position) {
    if (!this.state || !this.state.started) return;
    this.ctx.putImageData(this.imageData, 0, 0);
    this.draw(this.state.start, position);
}

// see #3
// Change mechanism to draw line
line.onMouseUp = function onMouseUp(position, callback) {
    if (!this.state) return;
    // NOTE: This state data is just to avoid draw in
    // the first mouse up
    this.state.data.push([position.x, position.y]);
    if (this.state.data.length > 1) {
        const data = [[this.state.firstMouseDown.x, this.state.firstMouseDown.y], [position.x, position.y]];
        const start = this.state.start;
        const options = this.state.options;
        this.resetState();
        callback();
        return {
            data: data,
            canvas: {
                start,
                end: position,
                options
            }
        };
    }
}

export default line;
