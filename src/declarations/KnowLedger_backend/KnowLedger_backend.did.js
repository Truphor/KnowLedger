export const idlFactory = ({ IDL }) => {
  const SubPage = IDL.Record({ 'title' : IDL.Text, 'youtube_link' : IDL.Text });
  const Course = IDL.Record({
    'id' : IDL.Nat64,
    'title' : IDL.Text,
    'description' : IDL.Text,
    'sub_pages' : IDL.Vec(SubPage),
    'youtube_link' : IDL.Text,
  });
  const CourseList = IDL.Vec(Course);
  return IDL.Service({
    'create_course' : IDL.Func(
        [IDL.Nat64, IDL.Text, IDL.Text, IDL.Vec(SubPage), IDL.Text],
        [],
        [],
      ),
    'init' : IDL.Func([], [], []),
    'list_courses' : IDL.Func([], [CourseList], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
