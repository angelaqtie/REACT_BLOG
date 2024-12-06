<?php

require '../../../core/header.php';
require '../../../core/functions.php';
require '../../../models/developer/Blog.php';

$conn = null;
$conn = checkDbConnection();
$blog = new Blog($conn);
$response = new Response();

$body = file_get_contents("php://input");
$data = json_decode($body, true);

$error = [];
$returnData = [];

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("blogid", $_GET)) {

        checkPayload($data);
        $blog->blog_aid = $_GET['blogid'];
        $blog->blog_is_active = trim($data["isActive"]);
        $blog->blog_datetime = date("Y-m-d H:i:s");
        checkId($blog->blog_aid);
        $query = checkActive($blog);
        http_response_code(200);
        returnSuccess($blog, "blog", $query);
    }

    checkEndpoint();
}

http_response_code(200);
checkAccess();