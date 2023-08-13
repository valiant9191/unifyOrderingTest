interface INestedObject {
    [key: string]: string | INestedObject;
}

function get<T>(
    objectData: INestedObject,
    path: string,
    defaultValue?: T
): string | INestedObject | T | undefined {
    const pathArray = path.split('.');
    let value: any = objectData;

    for (const key of pathArray) {
        if (value && objectData.constructor === Object && key in value) {
            value = value[key];
        } else {
            return defaultValue !== undefined ? defaultValue : undefined;
        }
    }

    return value;
}

const obj = {
    a: {
        b: {
            c: 'd',
        },
        e: 'f',
    },
};

console.log(get(obj, 'a.b')); // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e')); // 'f'
console.log(get(obj, 'x.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value
