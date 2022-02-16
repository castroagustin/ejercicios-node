const getNum0to255 = (): number => Math.floor(Math.random() * 255);

class Color {
    get(): string {
        const color: string = `rgb(${getNum0to255()}, ${getNum0to255()}, ${getNum0to255()})`;
        return color;
    }
}

const color: Color = new Color;
console.log(color.get());