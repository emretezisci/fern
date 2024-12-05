/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedObject from "../index";

export interface RootType1 {
    /** lorem ipsum */
    foo: string;
    /** lorem ipsum */
    bar: RootType1.Bar;
    /** lorem ipsum */
    fooMap: Record<string, RootType1.FooMap.Value>;
    /** lorem ipsum */
    fooList: RootType1.FooList.Item[];
    /** lorem ipsum */
    fooSet: RootType1.FooSet.Item[];
    /** lorem ipsum */
    ref: SeedObject.ReferenceType;
}

export namespace RootType1 {
    export interface Bar {
        /** lorem ipsum */
        foo: string;
        /** lorem ipsum */
        bar: Bar.Bar;
        /** lorem ipsum */
        ref: SeedObject.ReferenceType;
    }

    export namespace Bar {
        export interface Bar {
            /** lorem ipsum */
            foo: string;
            /** lorem ipsum */
            bar: string;
            /** lorem ipsum */
            myEnum: Bar.MyEnum;
            /** lorem ipsum */
            ref: SeedObject.ReferenceType;
        }

        export namespace Bar {
            export type MyEnum = "SUNNY" | "CLOUDY" | "RAINING" | "SNOWING";
            export const MyEnum = {
                Sunny: "SUNNY",
                Cloudy: "CLOUDY",
                Raining: "RAINING",
                Snowing: "SNOWING",
            } as const;
        }
    }

    export namespace FooMap {
        export interface Value {
            /** lorem ipsum */
            foo: string;
            /** lorem ipsum */
            ref: SeedObject.ReferenceType;
        }
    }

    type FooList = FooList.Item[];

    export namespace FooList {
        export interface Item {
            /** lorem ipsum */
            foo: string;
            /** lorem ipsum */
            ref: SeedObject.ReferenceType;
        }
    }

    type FooSet = FooSet.Item[];

    export namespace FooSet {
        export interface Item {
            /** lorem ipsum */
            foo: string;
            /** lorem ipsum */
            ref: SeedObject.ReferenceType;
        }
    }
}
