<?php
$conn = null;
$conn = checkDbConnection();
$blog = new Blog($conn);


if (array_key_exists("blogid", $_GET)) {
    checkEndpoint();
}


checkPayload($data);


$blog->blog_title = checkIndex($data, "blog_title");
$blog->blog_excerpt = checkIndex($data, "blog_excerpt");
$blog->blog_content = checkIndex($data, "blog_content");
$blog->blog_image = checkIndex($data, "blog_image");
$blog->blog_reading_time = checkIndex($data, "blog_reading_time");
$blog->blog_published_date = checkIndex($data, "blog_published_date");
$blog->blog_category = checkIndex($data, "blog_category");
$blog->blog_author = checkIndex($data, "blog_author");


$blog->blog_is_active = 1;
$blog->blog_created = date("Y-m-d H:i:s");
$blog->blog_datetime = date("Y-m-d H:i:s");




isNameExist($blog, $blog->blog_title);


$query = checkCreate($blog);
returnSuccess($blog, "blog", $query);



