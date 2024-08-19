use ic_cdk::api::stable;
use ic_cdk_macros::{init, update, query};
use ic_cdk::print;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Course {
    id: u64,
    title: String,
    description: String,
    sub_pages: Vec<(String, String)>, // Vector of tuples (sub-page title, YouTube link)
    image_link: String,
}

pub const COURSE_LIST_KEY: u64 = 0; // Key for stable memory

#[init]
pub fn init() {
    // Initialize the canister state
    stable::stable_write(COURSE_LIST_KEY, &vec![]);
    print("Canister initialized.");
}


#[update]
pub fn create_course(
    id: u64,
    title: String,
    description: String,
    sub_pages: Vec<(String, String)>, // Vector of tuples (sub-page title, YouTube link)
    image_link: String
) {
    let mut course_list: Vec<Course> = stable::stable_read(COURSE_LIST_KEY).unwrap_or_default();

    // Check if the course with the given ID already exists
    if course_list.iter().any(|c| c.id == id) {
        print("Course with this ID already exists.");
        return;
    }

    // Add the new course to the list
    let new_course = Course {
        id,
        title,
        description,
        sub_pages,
        image_link,
    };
    course_list.push(new_course);

    // Save the updated course list back to stable memory
    stable::stable_write(COURSE_LIST_KEY, &course_list);
    print("Course created successfully.");
}


#[query]
pub fn list_courses() -> Vec<Course> {
    let course_list: Vec<Course> = stable::stable_read(COURSE_LIST_KEY).unwrap_or_default();
    course_list
}
pub fn main(){
    create_course(1,"Title1".to_string(),"Lorem ipsum".to_string(),[("Page1","https://youtube.com/link")
    ,("Page2","https://youtube.com/link"),("Page3","https://youtube.com/link")], "image.png".to_string());
}
