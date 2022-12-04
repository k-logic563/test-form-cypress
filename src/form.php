<?php
$request = json_decode(file_get_contents("php://input"), true);

$message = null;

$name = $request["name"];
$email = $request["email"];

if (!isset($name))
{
    $message = "名前がありません";
}

if (!isset($email))
{
    $message = "メールアドレスがありません";
}

$message = "ようこそ{$name}さん\nメールアドレスは{$email}です";

echo json_encode([
    "message" => $message
]);