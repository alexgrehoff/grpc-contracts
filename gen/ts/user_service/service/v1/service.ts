// @generated by protobuf-ts 2.2.2 with parameter long_type_string
// @generated from protobuf file "user_service/service/v1/service.proto" (package "user_service.service.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { User } from "./user";
/**
 * @generated from protobuf message user_service.service.v1.GetUsersRequest
 */
export interface GetUsersRequest {
    /**
     * @generated from protobuf field: optional string name = 1;
     */
    name?: string;
    /**
     * Email
     *
     * @generated from protobuf field: optional string email = 2;
     */
    email?: string;
    /**
     * Account Type
     *
     * @generated from protobuf field: optional string account_type = 3;
     */
    accountType?: string;
    /**
     * Phone Number
     *
     * @deprecated
     * @generated from protobuf field: optional string phone_number = 4 [deprecated = true];
     */
    phoneNumber?: string;
    /**
     * Is Locked
     *
     * @generated from protobuf field: optional bool is_locked = 5;
     */
    isLocked?: boolean;
    /**
     * Is Active
     *
     * @generated from protobuf field: optional bool is_active = 6;
     */
    isActive?: boolean;
    /**
     * Is Admin
     *
     * @generated from protobuf field: optional bool is_admin = 7;
     */
    isAdmin?: boolean;
}
/**
 * @generated from protobuf message user_service.service.v1.GetUsersResponse
 */
export interface GetUsersResponse {
    /**
     * @generated from protobuf field: repeated user_service.service.v1.User users = 1;
     */
    users: User[];
}
/**
 * Request for update user.
 *
 * @generated from protobuf message user_service.service.v1.UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * ID
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string; // mapped to URL
    /**
     * Account Type
     *
     * @generated from protobuf field: optional string account_type = 2;
     */
    accountType?: string; // mapped to body
    /**
     * Phone Number
     *
     * @generated from protobuf field: optional string phone_number = 3;
     */
    phoneNumber?: string; // mapped to body
    /**
     * Email
     *
     * @generated from protobuf field: optional string email = 4;
     */
    email?: string; // mapped to body
    /**
     * Created At
     *
     * @generated from protobuf field: optional string created_at = 5;
     */
    createdAt?: string; // mapped to body
    /**
     * Updated At
     *
     * @generated from protobuf field: optional string updated_at = 6;
     */
    updatedAt?: string; // mapped to body
    /**
     * Locked To
     *
     * @generated from protobuf field: optional string locked_to = 7;
     */
    lockedTo?: string; // mapped to body
    /**
     * Locked Comment
     *
     * @generated from protobuf field: optional string locked_comment = 8;
     */
    lockedComment?: string; // mapped to body
    /**
     * Is Locked
     *
     * @generated from protobuf field: optional bool is_locked = 9;
     */
    isLocked?: boolean; // mapped to body
    /**
     * Is Admin
     *
     * @generated from protobuf field: optional bool is_admin = 10;
     */
    isAdmin?: boolean; // mapped to body
    /**
     * Is Active
     *
     * @generated from protobuf field: optional bool is_active = 11;
     */
    isActive?: boolean; // mapped to body
}
/**
 * Response for update user.
 *
 * @generated from protobuf message user_service.service.v1.UpdateUserResponse
 */
export interface UpdateUserResponse {
    /**
     * @generated from protobuf field: user_service.service.v1.User user = 1;
     */
    user?: User;
}
// @generated message type with reflection information, may provide speed optimized methods
class GetUsersRequest$Type extends MessageType<GetUsersRequest> {
    constructor() {
        super("user_service.service.v1.GetUsersRequest", [
            { no: 1, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "account_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "phone_number", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "is_active", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "is_admin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<GetUsersRequest>): GetUsersRequest {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetUsersRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUsersRequest): GetUsersRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string name */ 1:
                    message.name = reader.string();
                    break;
                case /* optional string email */ 2:
                    message.email = reader.string();
                    break;
                case /* optional string account_type */ 3:
                    message.accountType = reader.string();
                    break;
                case /* optional string phone_number = 4 [deprecated = true];*/ 4:
                    message.phoneNumber = reader.string();
                    break;
                case /* optional bool is_locked */ 5:
                    message.isLocked = reader.bool();
                    break;
                case /* optional bool is_active */ 6:
                    message.isActive = reader.bool();
                    break;
                case /* optional bool is_admin */ 7:
                    message.isAdmin = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetUsersRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional string name = 1; */
        if (message.name !== undefined)
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* optional string email = 2; */
        if (message.email !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        /* optional string account_type = 3; */
        if (message.accountType !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.accountType);
        /* optional string phone_number = 4 [deprecated = true]; */
        if (message.phoneNumber !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.phoneNumber);
        /* optional bool is_locked = 5; */
        if (message.isLocked !== undefined)
            writer.tag(5, WireType.Varint).bool(message.isLocked);
        /* optional bool is_active = 6; */
        if (message.isActive !== undefined)
            writer.tag(6, WireType.Varint).bool(message.isActive);
        /* optional bool is_admin = 7; */
        if (message.isAdmin !== undefined)
            writer.tag(7, WireType.Varint).bool(message.isAdmin);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user_service.service.v1.GetUsersRequest
 */
export const GetUsersRequest = new GetUsersRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUsersResponse$Type extends MessageType<GetUsersResponse> {
    constructor() {
        super("user_service.service.v1.GetUsersResponse", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => User }
        ]);
    }
    create(value?: PartialMessage<GetUsersResponse>): GetUsersResponse {
        const message = { users: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<GetUsersResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUsersResponse): GetUsersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated user_service.service.v1.User users */ 1:
                    message.users.push(User.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetUsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated user_service.service.v1.User users = 1; */
        for (let i = 0; i < message.users.length; i++)
            User.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user_service.service.v1.GetUsersResponse
 */
export const GetUsersResponse = new GetUsersResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateUserRequest$Type extends MessageType<UpdateUserRequest> {
    constructor() {
        super("user_service.service.v1.UpdateUserRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "account_type", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "phone_number", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "email", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "created_at", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "updated_at", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "locked_to", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "locked_comment", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "is_locked", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "is_admin", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "is_active", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<UpdateUserRequest>): UpdateUserRequest {
        const message = { id: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateUserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateUserRequest): UpdateUserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* optional string account_type */ 2:
                    message.accountType = reader.string();
                    break;
                case /* optional string phone_number */ 3:
                    message.phoneNumber = reader.string();
                    break;
                case /* optional string email */ 4:
                    message.email = reader.string();
                    break;
                case /* optional string created_at */ 5:
                    message.createdAt = reader.string();
                    break;
                case /* optional string updated_at */ 6:
                    message.updatedAt = reader.string();
                    break;
                case /* optional string locked_to */ 7:
                    message.lockedTo = reader.string();
                    break;
                case /* optional string locked_comment */ 8:
                    message.lockedComment = reader.string();
                    break;
                case /* optional bool is_locked */ 9:
                    message.isLocked = reader.bool();
                    break;
                case /* optional bool is_admin */ 10:
                    message.isAdmin = reader.bool();
                    break;
                case /* optional bool is_active */ 11:
                    message.isActive = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* optional string account_type = 2; */
        if (message.accountType !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.accountType);
        /* optional string phone_number = 3; */
        if (message.phoneNumber !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.phoneNumber);
        /* optional string email = 4; */
        if (message.email !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.email);
        /* optional string created_at = 5; */
        if (message.createdAt !== undefined)
            writer.tag(5, WireType.LengthDelimited).string(message.createdAt);
        /* optional string updated_at = 6; */
        if (message.updatedAt !== undefined)
            writer.tag(6, WireType.LengthDelimited).string(message.updatedAt);
        /* optional string locked_to = 7; */
        if (message.lockedTo !== undefined)
            writer.tag(7, WireType.LengthDelimited).string(message.lockedTo);
        /* optional string locked_comment = 8; */
        if (message.lockedComment !== undefined)
            writer.tag(8, WireType.LengthDelimited).string(message.lockedComment);
        /* optional bool is_locked = 9; */
        if (message.isLocked !== undefined)
            writer.tag(9, WireType.Varint).bool(message.isLocked);
        /* optional bool is_admin = 10; */
        if (message.isAdmin !== undefined)
            writer.tag(10, WireType.Varint).bool(message.isAdmin);
        /* optional bool is_active = 11; */
        if (message.isActive !== undefined)
            writer.tag(11, WireType.Varint).bool(message.isActive);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user_service.service.v1.UpdateUserRequest
 */
export const UpdateUserRequest = new UpdateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateUserResponse$Type extends MessageType<UpdateUserResponse> {
    constructor() {
        super("user_service.service.v1.UpdateUserResponse", [
            { no: 1, name: "user", kind: "message", T: () => User }
        ]);
    }
    create(value?: PartialMessage<UpdateUserResponse>): UpdateUserResponse {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UpdateUserResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateUserResponse): UpdateUserResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* user_service.service.v1.User user */ 1:
                    message.user = User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpdateUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* user_service.service.v1.User user = 1; */
        if (message.user)
            User.internalBinaryWrite(message.user, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message user_service.service.v1.UpdateUserResponse
 */
export const UpdateUserResponse = new UpdateUserResponse$Type();
/**
 * @generated ServiceType for protobuf service user_service.service.v1.UserService
 */
export const UserService = new ServiceType("user_service.service.v1.UserService", [
    { name: "GetUsers", options: {}, I: GetUsersRequest, O: GetUsersResponse },
    { name: "UpdateUser", options: {}, I: UpdateUserRequest, O: UpdateUserResponse }
]);
