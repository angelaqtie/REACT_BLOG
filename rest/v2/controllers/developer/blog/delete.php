<?php
$conn = null;
$conn = checkDbConnection();
$blog = new Blog($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("blogid", $_GET)) {
    $blog->blog_aid = $_GET['blogid'];
    checkId($blog->blog_aid);
    // isAssociated($blog);
    $query = checkDelete($blog);
    returnSuccess($blog, "blog", $query);
}

checkEndpoint();