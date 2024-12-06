<?php
$conn = null;
$conn = checkDbConnection();
$blog = new Blog($conn);
// $error = [];
// $returnData = [];
if (array_key_exists("blogid", $_GET)) {
    $blog->blog_aid = $_GET['blogid'];
    checkId($blog->blog_aid);
    $query = checkReadById($blog);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($blog);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();