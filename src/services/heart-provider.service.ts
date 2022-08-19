import { IHeart } from "../types/heart.type";


const hearts: IHeart[] = [
    {
        symbol: "💓",
    },
    {
        symbol: "💕"
    },
    {
        symbol: "💖",
    },
    {
        symbol: "💗",
    },
    {
        symbol: "💘",
    },
    {
        symbol: "💙",
    },
    {
        symbol: "💚",
    },
    {
        symbol: "💛",
    },
    {
        symbol: "🧡",
    },
    {
        symbol: "💜",
    },
    {
        symbol: "💝",
    },
    {
        symbol: "💞",
    },
];

export class HeartProviderService {
    public generateHearts(limit: number = 20): IHeart[] {
        const generatedHearts: IHeart[] = [];

        for (let i = 0; i < limit; i++) {
            let heartIndex = this.getRandomInt(0, hearts.length - 1);
            
            generatedHearts.push(hearts[heartIndex]);
        }
        return generatedHearts;
    }

    private getRandomInt(min: number, max: number) {        
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
