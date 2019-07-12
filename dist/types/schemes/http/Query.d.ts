import { FilterOperator } from "./Filter";
/**
 * @internal
 */
interface IQueryParameters {
    meta: object;
    fields: string | string[];
    limit: number;
    offset: number;
    single: number;
    sort: string | string[];
    status: string | string[];
    filter: {
        [field: string]: {
            [operator in FilterOperator]: any;
        };
    };
    lang: object;
    q: string;
    groups: string | string[];
    activity_skip: number;
    comment: string;
}
/**
 * @see https://docs.directus.io/api/reference.html#query-parameters
 */
export declare type QueryParams = Partial<IQueryParameters>;
export {};
//# sourceMappingURL=Query.d.ts.map