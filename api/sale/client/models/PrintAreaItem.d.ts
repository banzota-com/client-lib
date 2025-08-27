export type PrintAreaItem = {
    photos?: Array<{
        color: string;
        url: string;
    }>;
    printAreaBounds?: Array<{
        'y': number;
        'x': number;
    }>;
    printCost: number;
    name: string;
};
