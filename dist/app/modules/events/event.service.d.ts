import { IEvent } from "./event.interface";
export declare const EventService: {
    createEvent: (payload: IEvent) => Promise<import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getAllEvents: () => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    })[]>;
    getEventById: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    updateEvent: (id: string, payload: Partial<IEvent>) => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    deleteEvent: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IEvent, {}, import("mongoose").DefaultSchemaOptions> & IEvent & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=event.service.d.ts.map