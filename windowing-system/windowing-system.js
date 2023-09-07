// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
    this.resize = function (newWidth, newHeight) {
        this.width = newWidth;
        this.height = newHeight;
    }

}

/**Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
}
*/

export function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (newx, newy) {
    this.x = newx;
    this.y = newy;
}


/*export function creatPosition(x, y) {
    return {
        x,
        y,
        move: function (newx, newy) {
            this.x = newx;
            this.y = newy;
        }
    }
}
*/

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(newSize) {
        if (newSize.width < 1) {
            newSize.width = 1;
        }
        if (newSize.height < 1) {
            newSize.height = 1;
        }
        if (newSize.width > this.screenSize.width - this.position.x) {
            newSize.width = this.screenSize.width - this.position.x;
        }
        if (newSize.height > this.screenSize.height - this.position.y) {
            newSize.height = this.screenSize.height - this.position.y;
        }

        this.size.width = newSize.width;
        this.size.height = newSize.height;

    }

    move(newposition) {
        if (newposition.x < 0) {
            newposition.x = 0;
        }
        if (newposition.y < 0) {
            newposition.y = 0;
        }
        newposition.x = Math.min(newposition.x, this.screenSize.width - this.size.width);
        newposition.y = Math.min(newposition.y, this.screenSize.height - this.size.height);
        this.position.x = newposition.x;
        this.position.y = newposition.y;
    }


}

export function changeWindow(newWindow) {
    newWindow.size.width = 400;
    newWindow.size.height = 300;
    newWindow.position.x = 100;
    newWindow.position.y = 150;
    return newWindow;
}

