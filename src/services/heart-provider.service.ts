import { IHeart } from "../types/heart.type";
import { HeartType } from "../types/heart-svg.type";


function randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum as any)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];

    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];

    return randomEnumValue;
}

type ExcludeRange = {
    start: number,
    end: number,
}

export class HeartProviderService {
    public generateHearts(limit: number = 20): IHeart[] {
        const generatedHearts: IHeart[] = [];

        for (let i = 0; i < limit; i++) {
            generatedHearts.push(
                {
                    type: this.generateType(),
                    color: this.generateColor([
                        {
                            start: 0,
                            end: 1000000,
                        },
                        {
                            start: 13977215,
                            end: 16777215,
                        }
                    ]),
                }
            );
        }
        return generatedHearts;
    }

    public generateType(): HeartType {
        return randomEnum(HeartType);
    }

    public generateColor(excludeRanges: ExcludeRange[] = []): string {
        let colorDec: number;

        while (true) {
            colorDec = Math.floor(Math.random() * 16777215);

            const colorIsInvalid = excludeRanges.filter(
                (excludeRange) => excludeRange.start <= colorDec && excludeRange.end >= colorDec
            ).length !== 0;

            if (colorIsInvalid) {
                continue;
            } else {
                break;
            }

        }
        console.log(`#${colorDec.toString(16)}`);
        return `#${colorDec.toString(16)}`;
    }
}
