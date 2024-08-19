import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Course {
  'id' : bigint,
  'title' : string,
  'description' : string,
  'sub_pages' : Array<SubPage>,
  'youtube_link' : string,
}
export type CourseList = Array<Course>;
export interface SubPage { 'title' : string, 'youtube_link' : string }
export interface _SERVICE {
  'create_course' : ActorMethod<
    [bigint, string, string, Array<SubPage>, string],
    undefined
  >,
  'init' : ActorMethod<[], undefined>,
  'list_courses' : ActorMethod<[], CourseList>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
