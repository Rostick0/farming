<?

require_once __DIR__ . './vendor/autoload.php';

use MongoDB\BSON\ObjectId as ObjectId;

session_start();

$mongo = new MongoDB\Client;
$task_2 = $mongo->task_2;

function get_old_url()
{
    return $_SERVER['HTTP_REFERER'];
}

function set_session_user($user): void
{
    $_SESSION['user'] = [
        '_id' => $user->_id,
        'nickname' => $user->nickname,
        'password' => $user->password
    ];
}
function get_user($nickname, $password = '')
{
    global $task_2;

    $user = $task_2->user;

    $query_params = [
        'nickname' => $nickname
    ];

    if ($password) {
        $query_params['password'] = md5($password);
    }

    return $user->findOne(
        $query_params
    );
}

function create_user($nickname, $password)
{
    global $task_2;

    $user = $task_2->user;

    if (mb_strlen($nickname) < 4) return 'Ник меньше 4 символов';

    if (mb_strlen($password) < 4) return 'Пароль меньше 4 символов';

    if (!empty(get_user($nickname))) return 'Данный пользователь уже существует';

    $password = md5($password);

    $query = $user->insertOne([
        'nickname' => $nickname,
        'password' => $password
    ]);

    if (!$query) return 'Ошибка при создании';

    set_session_user(get_user($nickname));

    echo 'Спасибо за регистрацию';
    die(header('Refresh: 2; URL=/'));
}

function login_user($nickname, $password)
{
    $query = get_user($nickname, $password);

    if (empty($query)) return 'Неправильный логин или пароль';

    set_session_user($query);

    echo 'Авторизация прошла успеша';
    die(header('Refresh: 2; URL=/'));
}

function get_posts($category_id = '')
{
    global $task_2;

    $post = $task_2->post;

    $query_params = [];

    if ($category_id) {
        $query_params['category_id'] = new ObjectId($category_id);
    }

    return $post->find(
        $query_params
    );
}

function create_post($text, $category_id, $user_id)
{
    global $task_2;

    $post = $task_2->post;

    $valid = valid_post($text, $category_id);

    if ($valid) {
        return $valid;
    }

    $query = $post->insertOne([
        'text' => $text,
        'category_id' => new ObjectId($category_id),
        'user_id' => new ObjectId($user_id)
    ]);

    if (!$query) {
        return 'Ошибка при создании';
    }

    echo 'Пост создан';
    die(header('Refresh: 2; URL=/'));
}

function update_post($text, $category_id, $user_id, $post_id)
{
    global $task_2;

    $post = $task_2->post;

    $valid = valid_post($text, $category_id);

    if ($valid) {
        return $valid;
    }

    $query = $post->updateOne(
        [
            '_id' => new ObjectId($post_id),
            'user_id' => new ObjectId($user_id)
        ],
        [
            '$set' => [
                'text' => $text,
                'category_id' => new ObjectId($category_id)
            ]
        ]
    );

    if (!$query) {
        return 'Ошибка при редактировании, возможно, что данный пост вам не принадлежит';
    }

    echo 'Пост изменени';
    die(header('Refresh: 2; URL=/'));
}

function valid_post($text, $category_id)
{
    if (mb_strlen($text) < 5) return 'Описание меньше 5 символов';

    if (!$category_id) return 'Отсутствует категория';
}

function get_post($post_id)
{
    global $task_2;

    $post = $task_2->post;

    return $post->findOne(
        [
            '_id' => new ObjectId($post_id)
        ]
    );
}

function get_categories()
{
    global $task_2;

    $category = $task_2->category;

    return $category->find();
}

require_once(__DIR__ . './components/nav.php');

?>

<style>
    body {
        padding: 100px;
    }
</style>