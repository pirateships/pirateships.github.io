import {Component, AfterViewInit, Input} from '@angular/core';

@Component({
    selector: 'app-sprite',
    template: `
        <canvas class="sprite" id="{{spriteName}}" width="10px" height="40px"></canvas>
    `
})
export class SpriteComponent implements AfterViewInit {

    @Input() frames: number;
    @Input() spriteHeight: string;
    @Input() name: string;
    @Input() src: string;
    @Input() spriteName: string;
    @Input() spriteWidth: string;
    context: CanvasRenderingContext2D;
    image = new Image();

    constructor() {
    }

    ngAfterViewInit() {
        this.image.src = this.src;
        const canvas = <HTMLCanvasElement>document.getElementById(this.spriteName);
        this.context = canvas.getContext('2d');
        const fairy = this.sprite({
            context: this.context,
            width: this.spriteWidth,
            height: this.spriteHeight,
            image: this.image,
            numberOfFrames: this.frames,
            ticksPerFrame: 1
        });
        this.animateSprite(fairy);
    }

    animateSprite(sprite) {
        sprite.update();
        sprite.render();
        setTimeout(() => {
            this.animateSprite(sprite);
        }, 33);
    }

    sprite(options) {

        const that = <any>{},
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;
        let tickCount = 0,
            frameIndex = 0;

        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.update = function () {

            tickCount += 1;

            if (tickCount > ticksPerFrame) {

                tickCount = 0;

                // If the current frame index is in range
                if (frameIndex < numberOfFrames - 1) {
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 0;
                }
            }
        };

        that.render = function () {

            // Clear the canvas
            that.context.clearRect(0, 0, that.width, that.height);

            // Draw the animation
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
        };

        return that;
    }

}