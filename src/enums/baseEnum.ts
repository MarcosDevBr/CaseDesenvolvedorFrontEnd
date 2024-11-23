interface Idata<T> {[key: string]: T;}

export default abstract class baseEnum<T> {
    protected abstract enumData: Idata<T>;

    public asObject() {
        return this.enumData;
    }

    public toArray() {
        return Object.entries(this.enumData).map((i) => ({ [i[0]]: i[1] }));
    }

    public mapKeys(iterator: (param: string) => any) {
        return Object.keys(this.enumData).map((i) => iterator(i));
    }

    public mapValues(iterator: (param: T) => any) {
        return Object.values(this.enumData).map((i) => iterator(i));
    }

    public map(iterator: (param: {key: string, value: T}) => any) {
        return Object.entries(this.enumData).map((i) => (
            iterator(
                {
                    key: i[0],
                    value: i[1],
                },
            )
        ));
    }

    public getKeyByValue(value:T): string {
        const a = Object.entries(this.enumData).find((i) => i[1] === value);

        return a ? a[0] : 'Status invalido';
    }
    
}
