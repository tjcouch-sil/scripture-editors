/* eslint-disable @typescript-eslint/no-explicit-any */

export enum OperationType {
  Add = "add",
  Replace = "replace",
  Remove = "remove",
  Move = "move",
}

type PlainObject<T> = Record<string | number, T>;
type ArrayKey<T> = keyof T[];
type PlainObjectKey<T> = keyof PlainObject<T>;
type ObjectOrArrayKey<T> = ArrayKey<T> | PlainObjectKey<T>;

export interface OperationBase {
  type: OperationType;
  path: string | ObjectOrArrayKey<any>[];
  value: any;
}

export interface OperationAdd extends OperationBase {
  type: OperationType.Add;
}

export interface OperationReplace extends OperationBase {
  type: OperationType.Replace;
}

export interface OperationRemove extends Omit<OperationBase, "value"> {
  type: OperationType.Remove;
  value?: any;
}

export type Operation =
  | OperationAdd
  | OperationReplace
  | OperationRemove
  | { [key: string]: unknown };
