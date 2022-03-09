import { sumValues } from "./sum";

export function asyncAdd(values) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const sum = sumValues(values);
                console.log(`Aync sum: ${sum}`);
                resolve(sum);
            } catch (e) {
                reject(e);
            }
        }, 1000);
    
    });
}