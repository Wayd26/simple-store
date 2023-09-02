type StoreData = Record<string, any>;


class Store {
    private data: StoreData = {};

    setValue(key: string, value: any): void {
        const keys = key.split(".");
        let current = this.data;

        for (let i = 0; i < keys.length - 1; i++) {
            const k = keys[i];
            current[k] = current[k] || {};
            current = current[k];
        }

        const lastKey = keys[keys.length - 1];
        current[lastKey] = value;
    }

    getValue(key: string): any {
        const keys = key.split(".");
        let current = this.data;

        for (const k of keys) {
            if (!current[k]) {
                return undefined;
            }
            current = current[k]
        }
        return current;
    }


    listEntries(): Record<string, any> {
        return this.data;
    }

    toJSON(): string {
        return JSON.stringify(this.data);
    }
}

export default StoreData;